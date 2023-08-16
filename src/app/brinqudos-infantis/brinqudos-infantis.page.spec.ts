import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrinqudosInfantisPage } from './brinqudos-infantis.page';

describe('BrinqudosInfantisPage', () => {
  let component: BrinqudosInfantisPage;
  let fixture: ComponentFixture<BrinqudosInfantisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BrinqudosInfantisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
