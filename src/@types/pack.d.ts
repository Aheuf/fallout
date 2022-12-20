export interface IPack {
    type: string;
    name: string;
    inventory: string[];
  }

  export type PackContextType = {
    packs: IPack[];
  };