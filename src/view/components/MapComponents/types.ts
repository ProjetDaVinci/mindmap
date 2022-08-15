export type MapType = {
  id: number;
  coords: number[];
  descr: string;
  title: string;
};

export type NewPoint = {
  coords: number[];
};

export enum EdgeType {
  buttonedge = "buttonedge",
}
