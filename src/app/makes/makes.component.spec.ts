/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MakesComponent } from './makes.component';
import { MockDataService } from '../mockDataService';
import { DataService } from '../data.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ModelsComponent} from "../models/models.component";
describe('MakesComponent', () => {
  let component: MakesComponent;
  let fixture: ComponentFixture<MakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule
      ],
      declarations: [ MakesComponent , ModelsComponent],
      providers: [
        { provide: DataService, useClass: MockDataService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakesComponent);
    component = fixture.componentInstance;
    component.selectedMake = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a dropdown', () => {
    expect(fixture.debugElement.query(By.css('select')).nativeElement).toBeDefined();
  });
});
