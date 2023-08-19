import { SignJWT, jwtVerify } from "jose";

import { EnvVariableKey } from "../enum";
import { getEnvVariable } from "../utils";

export const signJWT = async (payload: any): Promise<string> => {
  const secret = new TextEncoder().encode(
    getEnvVariable(EnvVariableKey.JWT_SECRET_KEY),
  );

  const alg = "HS256";

  return new SignJWT(payload)
    .setProtectedHeader({ alg })
    .setExpirationTime(getEnvVariable(EnvVariableKey.JWT_EXPIRES_IN))
    .setIssuedAt()
    .setSubject(payload._id)
    .sign(secret);
};

export const verifyJWT = async (token: string): Promise<any> => {
  const secret = new TextEncoder().encode(
    getEnvVariable(EnvVariableKey.JWT_SECRET_KEY),
  );

  return (await jwtVerify(token, secret)).payload;
};
