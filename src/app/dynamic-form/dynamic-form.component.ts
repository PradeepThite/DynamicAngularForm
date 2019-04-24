import { Component, OnInit } from "@angular/core";
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
}
