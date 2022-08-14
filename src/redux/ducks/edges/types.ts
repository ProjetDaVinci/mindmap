export type NodesState = {
  id: number;
  mass: string;
};

// export type Filter = { namePage: string; mass: FilterItem[] };

export type EdgesItem = {
  id: string;
  source: string;
  target: string;
  type?: string;
  style?: { stroke: string };
  label?: string;
  animated?: true;
  labelStyle?: { fill: string; fontWeight: number };
};
