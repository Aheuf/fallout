
export interface IPlayer {
    origin:string;
    postHuman:boolean;
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
    };
    atouts:{name:string,value:number,checked:boolean}[];
}

export type PlayerContextType = {
    player: IPlayer;
    savePlayer: (player:IPlayer) => void;
}