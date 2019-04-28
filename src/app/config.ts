export class Config {
  public title: string;
  public build: string;
  public author: string;
  public authorWebsite: string;
  public sourceLegend: string;
  public sourceUrl: string;
  public legalLegend: string;
  public currentYear: number;

  constructor(data: any) {
    this.currentYear = (new Date()).getFullYear();
    try {
      this.title = data.app.title;
      this.build = data.app.build;
      this.author = data.app.author;
      this.authorWebsite = data.app['author-website'];
      this.sourceLegend = data.app['source-legend'];
      this.sourceUrl = data.app['source-url'];
      this.legalLegend = data.app['legal-legend'];
    } catch (e) {
      this.title = 'Pokedex';
      this.build = '';
      this.author = 'Omar González';
      this.authorWebsite = 'https://www.google.com';
      this.sourceLegend = 'Source code';
      this.sourceUrl = 'https://www.google.com';
      this.legalLegend = 'Legal';
    }
  }
}

