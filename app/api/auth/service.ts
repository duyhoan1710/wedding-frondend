import { NextResponse } from "next/server";

import User, { IUser } from "models/User";
import { compareHash, hash } from "@/lib/helpers/bcrypt";
import { Role, Status } from "@/lib/enum";
import connectDB from "@/lib/dbConnect";
import { signJWT } from "@/lib/helpers/jwt";

connectDB();

interface IAuth {
  username: string;
  password: string;
}

export const register = async ({
  username,
  password,
}: IAuth): Promise<void> => {
  const hashPassword = await hash(password);

  await User.create({
    username,
    password: hashPassword,
    role: Role.USER,
    status: Status.TRAIL,
    isActive: true,
  });
};

export const login = async ({ username, password }: IAuth) => {
  const user: IUser | null = await User.findOne({ username });

  if (!user) {
    return NextResponse.json(
      {
        message: "User is not exists",
      },
      { status: 404 },
    );
  }

  const result = await compareHash(password, user.password);

  if (!result) {
    return NextResponse.json(
      {
        message: "username or password is incorrect",
      },
      { status: 400 },
    );
  }

  const accessToken = await signJWT({
    _id: user._id,
    role: user.role,
    status: user.status,
  });

  return { accessToken };
};
