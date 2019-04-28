export class EncounterArea {
  name: string;
  chance: string;
  method: string;

  constructor(data: any) {
    this.name = data.location_area.name.split('-').join(' ');
    try {
      this.chance = data.version_details[0].encounter_details[0].chance;
      this.method = data.version_details[0].encounter_details[0].method.name;
    } catch (e) {
    }
  }
}
