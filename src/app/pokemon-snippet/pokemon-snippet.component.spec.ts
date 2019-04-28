import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSnippetComponent } from './pokemon-snippet.component';

describe('PokemonSnippetComponent', () => {
  let component: PokemonSnippetComponent;
  let fixture: ComponentFixture<PokemonSnippetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonSnippetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
