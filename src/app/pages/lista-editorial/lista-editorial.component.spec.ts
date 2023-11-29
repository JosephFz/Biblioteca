import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEditorialComponent } from './lista-editorial.component';

describe('ListaEditorialComponent', () => {
  let component: ListaEditorialComponent;
  let fixture: ComponentFixture<ListaEditorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaEditorialComponent]
    });
    fixture = TestBed.createComponent(ListaEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
