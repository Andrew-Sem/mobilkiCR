import { AxiosResponse } from "axios";
import { IAuthResponse } from "../models/IAuthResponse";
import { $api } from "../http/api";

export class AuthService {
  static auth(
    username: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post("/login/v1/authorization", { username, password });
  }
}
