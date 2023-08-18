import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscudosPage } from './escudos.page';

describe('EscudosPage', () => {
  let component: EscudosPage;
  let fixture: ComponentFixture<EscudosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EscudosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
