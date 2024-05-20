import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent implements OnInit {

  @Input() targetControl: any;

  constructor() { }

  ngOnInit(): void {
  }

}
