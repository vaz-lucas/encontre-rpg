export interface Rpg {
  id: string;
  name: string;
  description: string;
  tags: string[];
  minPlayers: number;
  maxPlayers: number;
  duration: string; // ex: "one-shot", "campanha curta", "longa"
  author: string;
  coverUrl: string;
  isFeatured: boolean;
}