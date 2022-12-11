interface IPlayer{
  origin:string
}

type PlayerState = {
  player: IPlayer
}

type PlayerAction = {
  type: string
  player: IPlayer
}

type DispatchType = (args: PlayerAction) => PlayerAction