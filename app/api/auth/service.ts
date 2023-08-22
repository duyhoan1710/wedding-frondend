import User, { IUser } from "@/lib/models/User";
import { compareHash, hash } from "@/lib/helpers/bcrypt";
import { Role, Status } from "@/lib/enum";
import connectDB from "@/lib/dbConnect";
import { signJWT } from "@/lib/helpers/jwt";
import { throwError } from "@/lib/helpers/response";

connectDB();

interface IAuth {
  email: string;
  fullName: string;
  password: string;
}

export const register = async ({
  email,
  fullName,
  password,
}: IAuth): Promise<void> => {
  const hashPassword = await hash(password);

  await User.create({
    email,
    fullName,
    password: hashPassword,
    role: Role.USER,
    status: Status.TRAIL,
    isActive: true,
  });
};

export const login = async ({ email, password }: IAuth) => {
  const user: IUser | null = await User.findOne({ email });

  if (!user) {
    return throwError(404, "User is not exists");
  }

  const result = await compareHash(password, user.password);

  if (!result) {
    return throwError(400, "email or password is incorrect");
  }

  const accessToken = await signJWT({
    _id: user._id,
    role: user.role,
    status: user.status,
  });

  return { accessToken };
};
