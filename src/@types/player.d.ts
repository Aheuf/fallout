export interface IPlayer {
    origin:string;
}

export type PlayerContextType = {
    player: IPlayer;
    savePlayer: (player:IPlayer) => void;
}