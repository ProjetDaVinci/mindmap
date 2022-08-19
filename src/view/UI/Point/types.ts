export type PropsPoint = {
  title: string;
  id: number;
  // selected: boolean;
};

export type PropsEvent = {
  onPlacemarkClick: (id: number) => void;
  // onDelete: (id: number) => void;
};
