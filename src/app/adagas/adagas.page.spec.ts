import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdagasPage } from './adagas.page';

describe('AdagasPage', () => {
  let component: AdagasPage;
  let fixture: ComponentFixture<AdagasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdagasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
