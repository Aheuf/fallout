
export interface IPlayer {
    origin:string;
    survivorOption:string;
    misterHandyOptions:string[];
    special:{
        s:number,
        p:number,
        e:number,
        c:number,
        i:number,
        a:number,
        l:number
    }
}

export type PlayerContextType = {
    player: IPlayer;
    savePlayer: (player:IPlayer) => void;
}