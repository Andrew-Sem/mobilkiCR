import {AxiosResponse} from "axios";
import {IGame} from "../models/IGame";
import {$api} from "../http/api";

export class GamesService{
    static fetchGames():Promise<AxiosResponse<IGame[]>>{
        return $api.get<IGame[]>("/games/v1/catalogue/all")
    }
}