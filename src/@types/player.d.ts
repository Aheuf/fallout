
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
    defence:{balistique:number,energetique:number,radiation:number,poison:number}
}

export type PlayerContextType = {
    player: IPlayer;
    savePlayer: (player:IPlayer) => void;
}