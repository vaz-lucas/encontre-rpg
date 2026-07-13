export interface Rpg {
  id: string;
  name: string;
  description: string;
  short_description: string;
  tags: string[];
  min_players: number;
  max_players: number;
  avg_duration: number;
  author: string;
  cover_url: string;
  is_featured: boolean;
}
