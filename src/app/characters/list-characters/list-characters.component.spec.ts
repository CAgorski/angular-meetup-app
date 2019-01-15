import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCharactersComponent } from './list-characters.component';

describe('ListCharactersComponent', () => {
  let component: ListCharactersComponent;
  let fixture: ComponentFixture<ListCharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCharactersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
