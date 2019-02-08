import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BookCreateComponent } from './book-create.component';
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

describe('BookCreateComponent', () => {
  let component: BookCreateComponent;
  let fixture: ComponentFixture<BookCreateComponent>;

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
      declarations: [ BookCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('athor should be blank', () => {
    expect(component.author).toEqual('');
  });
});
