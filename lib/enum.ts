export enum Role {
  ADMIN = 1,
  USER = 2,
}

export enum Status {
  TRAIL = 1,
  PREMIUM = 2,
}

export enum EnvVariableKey {
  JWT_SECRET_KEY = "JWT_SECRET_KEY",
  JWT_EXPIRES_IN = "JWT_EXPIRES_IN",
  MONGODB_URI = "MONGODB_URI",
}
