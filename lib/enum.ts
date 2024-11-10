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

export enum EComponentCode {
  BANNER_V1 = "banner_v1",

  FOREWORD_V1 = "foreword_v1",

  ADDRESS_V1 = "address_v1",

  TIMELINE_V1 = "timeline_v1",

  IMAGES_V1 = "images_v1",

  BANK_ACCOUNT_v1 = "bank_account_v1",

  FOOTER_V1 = "footer_v1",
}

export enum EWindowSize {
  SM = 640,
  MD = 768,
  LG = 1024,
  XL = 1280,
  XXL = 1536,
}
