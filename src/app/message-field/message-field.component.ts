import { Component, OnInit } from '@angular/core';
import { TextField } from 'tns-core-modules/ui/text-field/text-field';


@Component({
  selector: 'ns-message-field',
  templateUrl: './message-field.component.html',
  styleUrls: ['./message-field.component.css'],
  moduleId: module.id,
})
export class MessageFieldComponent implements OnInit {

  public message:'';

  constructor() { }

  ngOnInit() {
  }

  click() {
    console.log(this.message);
  }

  onchange(args) {
    let textField = <TextField>args.object;
    console.log('jhvjhv', textField.text);
  }
}
