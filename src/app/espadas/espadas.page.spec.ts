import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EspadasPage } from './espadas.page';

describe('EspadasPage', () => {
  let component: EspadasPage;
  let fixture: ComponentFixture<EspadasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EspadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
