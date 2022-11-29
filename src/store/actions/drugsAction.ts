import {createAsyncThunk} from "@reduxjs/toolkit";
import {GamesService} from "../../services/GamesService";


export const fetchGames = createAsyncThunk("drugs/catalogue", async () => {
    const res = await GamesService.fetchGames()
    return res.data
})