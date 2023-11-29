import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLocalizacionComponent } from './lista-localizacion.component';

describe('ListaLocalizacionComponent', () => {
  let component: ListaLocalizacionComponent;
  let fixture: ComponentFixture<ListaLocalizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaLocalizacionComponent]
    });
    fixture = TestBed.createComponent(ListaLocalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
