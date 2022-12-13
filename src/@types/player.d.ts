export interface IPlayer {
    origin:string;
    survivorOption:string;
    misterHandyOptions:Array<3,string>;
}

export type PlayerContextType = {
    player: IPlayer;
    savePlayer: (player:IPlayer) => void;
}