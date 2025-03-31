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

export enum ERole {
  ADMIN = "admin",
  USER = "user",
}

export enum EHeader {
  PATHNAME = "x-pathname",
  INVOKE_PATH = "x-invoke-path",
}

export enum EVersion {
  V1 = "v1",
  V2 = "v2",
}

export enum EWindowSize {
  SM = 640,
  MD = 768,
  LG = 1024,
  XL = 1280,
  XXL = 1536,
}
