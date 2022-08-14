export type PropsPoint = {
  title: string;
  id: number;
};

export type PropsEvent = {
  // onPlacemarkClick: (obj: PropsPoint) => void;
  onDelete: (id: number) => void;
};
