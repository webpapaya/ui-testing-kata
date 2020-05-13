import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AssigneesComponent } from './assignees.component';
import {assertThat, equalTo} from 'hamjest';

describe('AssigneesComponent', () => {
  let component: AssigneesComponent;
  let fixture: ComponentFixture<AssigneesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssigneesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('implement me', () => {
    assertThat('implement', equalTo('me'))
  });
});
