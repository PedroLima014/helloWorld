import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArcosPage } from './arcos.page';

describe('ArcosPage', () => {
  let component: ArcosPage;
  let fixture: ComponentFixture<ArcosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArcosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
