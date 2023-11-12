import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAutorComponent } from './listar-autor.component';

describe('ListarAutorComponent', () => {
  let component: ListarAutorComponent;
  let fixture: ComponentFixture<ListarAutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarAutorComponent]
    });
    fixture = TestBed.createComponent(ListarAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
