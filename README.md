# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## HTML PART

`<form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
  <!-- Loop of schems -->
  <label *ngFor="let schema of profileForm.value.data">
    {{schema.description}} :
    <input *ngIf="schema.type == 'text'" type="text" formControlName="{{schema.controlName}}">
    <input *ngIf="schema.type == 'number'" type="number" formControlName="{{schema.controlName}}">
    <br>
  </label>
  <button type="submit" [disabled]="!profileForm.valid">Submit</button>
</form>`


## COMPONENT PART

`import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.css"]
})
export class DynamicFormComponent implements OnInit {
  profileForm;

  schema = [
    { type: "text", description: "First Name", controlName: "firstname" },
    { type: "text", description: "Last Name", controlName: "lastname" },
    { type: "number", description: "Age", controlName: "age" }
  ];

  constructor() {}

  ngOnInit() {
    this.getSchems();
  }

  getSchems() {
    this.buildForm();
  }

  buildForm() {
    const formProp = {};
    let props = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.schema.length; i++) {
      formProp[this.schema[i].controlName] = new FormControl("");
      props.push(this.schema[i]);
    }
    // Here we are putting all form property in 'data'
    formProp["data"] = new FormControl(props);
    this.profileForm = new FormGroup(formProp);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}`
