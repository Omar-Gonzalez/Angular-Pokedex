export class SpecieInfo {
  shape: string;
  color: string;
  eggGroup: string;
  flavorText: string;
  captureRate: string;
  genus: string;
  generation: string;

  constructor(data: any) {
    this.shape = data.shape.name;
    this.color = data.color.name;
    this.captureRate = `${data.capture_rate}%`;
    this.generation = data.generation.name;
    this.flavorText = data.flavor_text_entries.filter(entry => {
      if (entry.language.name === 'en') {
        return entry.flavor_text;
      }
    })[0].flavor_text;
    this.eggGroup = data.egg_groups.map(group => {
      return group.name;
    }).join(', ');
    this.genus = data.genera.filter(genera => {
      if (genera.language.name === 'en') {
        return genera.genus;
      }
    })[0].genus;
  }
}
