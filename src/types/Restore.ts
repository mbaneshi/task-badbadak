export interface Restore {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

export interface Restores {
  data: Restore[];
  selected: Restore[];
}
