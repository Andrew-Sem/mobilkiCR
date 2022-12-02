import { IGame } from "./IGame";

export interface addToCartProps {
  userId: string;
  token: string;
  gameData: IGame[];
}
