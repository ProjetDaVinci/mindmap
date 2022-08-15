export type NodesState = {
  id: number;
  mass: string;
};

// export type Filter = { namePage: string; mass: FilterItem[] };

export type NodesItem = {
  id: string;
  data: {
    label: string;
    //   label: (
    //     <>
    //       Welcome to <strong>React Flow!</strong>
    //     </>
    //   ),
  };
  width: number;
  height: number;
  position: { x: number; y: number };
};
