import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudentComponent } from './edit-student.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EditStudentComponent', () => {
  let component: EditStudentComponent;
  let fixture: ComponentFixture<EditStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatSortModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatCheckboxModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [ EditStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
