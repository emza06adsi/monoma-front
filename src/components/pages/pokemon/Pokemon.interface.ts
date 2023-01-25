import { User } from "../../../App";

export interface Request {
  data: string;
}

export interface IResult {
  name: string;
  url: string;
}

export interface Iuser {
  user?: User;
}
