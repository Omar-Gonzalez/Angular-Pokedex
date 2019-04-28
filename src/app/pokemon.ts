export class Pokemon {
  sprites: [any];
  spriteFrontDefault: string;
  spriteBackDefault: string;
  spriteFrontFemale: string;
  spriteBackFemale: string;
  abilities: [any];
  moves: [any];
  types: [any];
  forms: [any];
  name: string;
  locationEncounterUrl: string;
  speciesUrl: string;
  height: string;

  constructor(data: any) {
    try {
      this.name = data.name;
      this.locationEncounterUrl = data.location_area_encounters;
      this.sprites = data.sprites;
      this.abilities = data.abilities;
      this.types = data.types;
      this.moves = data.moves;
      this.forms = data.forms;
      this.spriteFrontDefault = data.sprites.front_default;
      this.spriteBackDefault = data.sprites.back_default;
      this.spriteFrontFemale = data.sprites.front_female;
      this.spriteBackFemale = data.sprites.back_female;
      this.speciesUrl = data.species.url;
      this.height = data.height;
    } catch (e) {
      this.name = 'N/A';
      this.sprites = [] as any;
      this.abilities = [] as any;
      this.moves = [] as any;
      this.types = [] as any;
      this.forms = [] as any;
    }
  }
}
