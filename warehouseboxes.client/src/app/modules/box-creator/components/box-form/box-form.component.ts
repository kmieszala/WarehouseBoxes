import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'box-form',
  templateUrl: './box-form.component.html',
  styleUrls: ['./box-form.component.css']
})
export class BoxFormComponent implements OnInit  {
  form: FormGroup = new FormGroup({});  
  loading = true;

  constructor(
    private _formBuilder: FormBuilder) { }

  get formName() { return this.form.get('formName'); }
  get formCorridor() { return this.form.get('formCorridor'); }
  get formX() { return this.form.get('formX'); }
  get formY() { return this.form.get('formY'); }
  get formHeight() { return this.form.get('formHeight'); }
  get formWidth() { return this.form.get('formWidth'); }
  get formDescription() { return this.form.get('formDescription'); }

  ngOnInit(): void {    
    this.form = this._formBuilder.group({
      formName: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      formCorridor: new FormControl(false),
      formX: new FormControl(null, [Validators.required]),
      formY: new FormControl(null, [Validators.required]),
      formHeight: new FormControl(null, [Validators.required]),
      formWidth: new FormControl(null, [Validators.required]),
      formDescription: new FormControl(null, [Validators.maxLength(500)]),
    });
    this.loading = false;

    console.log(this.form)
  }

  saveBox() {

  }
}
