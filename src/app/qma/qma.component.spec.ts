import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QmaComponent } from './qma.component';

describe('QmaComponent', () => {
  let component: QmaComponent;
  let fixture: ComponentFixture<QmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QmaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
