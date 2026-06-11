import type { Evento } from "../types/evento";

export const mockEventos: Evento[] = [
  {
    id: "1",
    name: "Encontro RPG - Mörk Borg",
    date: "2024-07-15",
    time: "19:00",
    location: "Bar do RPG, São Paulo",
    description: "Venha jogar Mörk Borg com a gente! Traga seus dados e prepare-se para uma noite de horror e doom metal.",
    duration: "one-shot",
    coverUrl: "https://picsum.photos/seed/evento1/400/300",
    isFeatured: true,
  },
  {
    id: "2",
    name: "Encontro RPG - Dungeon World",
    date: "2024-07-20",
    time: "18:00",
    location: "Casa do RPG, Rio de Janeiro",
    description: "Participe do nosso encontro de Dungeon World! Jogue uma aventura épica de fantasia e narrativa com outros fãs do sistema PbtA.",
    duration: "campanha",
    coverUrl: "https://picsum.photos/seed/evento2/400/300",
    isFeatured: true,
  },
  {
    id: "3",
    name: "Encontro RPG - Ironsworn",
    date: "2024-07-25",
    time: "20:00",
    location: "Clube do RPG, Belo Horizonte",
    description: "Junte-se a nós para jogar Ironsworn, o RPG de fantasia sombria que pode ser jogado solo, cooperativo ou com mestre. Traga seus amigos e venha se aventurar!",
    duration: "campanha",
    coverUrl: "https://picsum.photos/seed/evento3/400/300",
    isFeatured: false,
  },
];