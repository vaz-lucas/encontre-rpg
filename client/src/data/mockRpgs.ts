import type { Rpg } from "../types/rpg";

export const mockRpgs: Rpg[] = [
  {
    id: "1",
    name: "Mörk Borg",
    description: "RPG OSR sombrio em um mundo doom metal à beira do apocalipse.",
    tags: ["OSR", "horror", "doom"],
    minPlayers: 2,
    maxPlayers: 5,
    duration: "one-shot",
    author: "Pelle Nilsson, Johan Nohr",
    coverUrl: "https://picsum.photos/seed/morkborg/400/300",
    isFeatured: true,
  },
  {
    id: "2",
    name: "Dungeon World",
    description: "RPG narrativo de fantasia baseado no sistema PbtA.",
    tags: ["PbtA", "fantasia", "narrativo"],
    minPlayers: 3,
    maxPlayers: 6,
    duration: "campanha",
    author: "Sage LaTorra, Adam Koebel",
    coverUrl: "https://picsum.photos/seed/dungeonworld/400/300",
    isFeatured: true,
  },

];