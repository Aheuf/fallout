export interface IPlayer {
    origin:string;
    survivorOption:string;
}

export type PlayerContextType = {
    player: IPlayer;
    savePlayer: (player:IPlayer) => void;
}