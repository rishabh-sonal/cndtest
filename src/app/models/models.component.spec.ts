/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModelsComponent } from './models.component';
import { MockDataService } from '../mockDataService';
import { DataService } from '../data.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


describe('ModelsComponent', () => {
  let component: ModelsComponent;
  let fixture: ComponentFixture<ModelsComponent>;
  const mockModel = {
    'model': 'acura_ilx',
    'name': 'ILX',
    'is_hidden': false,
    'is_in_navigation': true,
    'image': 'http://buyersguide.caranddriver.com/media/assets/submodel/7655.jpg'
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule
      ],
      declarations: [  ModelsComponent],
      providers: [
        { provide: DataService, useClass: MockDataService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show image after model is selected', () => {
    component.model = mockModel;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('img')).nativeElement).toBeDefined();
  });
});
