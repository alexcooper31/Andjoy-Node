interface IUserLoginCredentials {
  email: string;
  password: string;
}

interface IUserCreationParameters {
  email: string;
  password: string;
}

interface IList {
  gameId: number;
  name: string;
  date: number;
  url: string;
  platforms: number[];
  wish?: boolean;
  played?: boolean;
  favorite?: boolean;
  rating?: number;
}

interface IUserPayload {
  id: string;
  email: string;
  list?: IList[];
}

interface IUserJWT<UserPayload = IUserPayload> {
  exp: number;
  iat: number;
  user: UserPayload;
}

export {
  IUserCreationParameters,
  IUserLoginCredentials,
  IUserJWT,
  IUserPayload,
};
