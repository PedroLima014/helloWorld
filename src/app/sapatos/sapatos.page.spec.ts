import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SapatosPage } from './sapatos.page';

describe('SapatosPage', () => {
  let component: SapatosPage;
  let fixture: ComponentFixture<SapatosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SapatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
