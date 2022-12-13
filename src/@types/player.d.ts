export interface IPlayer {
    origin:string;
    survivorOption:string;
    misterHandyOptions:string[];
}

export type PlayerContextType = {
    player: IPlayer;
    savePlayer: (player:IPlayer) => void;
}