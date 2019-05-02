import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheEmailComponent } from './detalhe-email.component';

describe('DetalheEmailComponent', () => {
  let component: DetalheEmailComponent;
  let fixture: ComponentFixture<DetalheEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
