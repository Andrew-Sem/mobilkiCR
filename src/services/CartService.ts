import { addToCartProps } from "./../models/addToCartProps";
import { IAuthResponse } from "./../models/IAuthResponse";
import { IGame } from "./../models/IGame";
import { AxiosResponse } from "axios";
import { $api } from "../http/api";

export class CartService {
  static fetchCartGames({ userId, token }: IAuthResponse) {
    return $api.post(
      "/cart/v1/content",
      { userId: "user" + userId },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
  }

  static addToCart({ userId, token, gameData }: addToCartProps) {
    return $api.post(
      "/cart/v1/update",
      { userId, token },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
  }
}
