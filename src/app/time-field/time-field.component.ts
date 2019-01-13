import { Component, OnInit } from '@angular/core';
import { TimePicker } from 'tns-core-modules/ui/time-picker/time-picker';
import { TextField } from 'tns-core-modules/ui/text-field/text-field';

@Component({
  selector: 'ns-time-field',
  templateUrl: './time-field.component.html',
  styleUrls: ['./time-field.component.css'],
  moduleId: module.id,
})
export class TimeFieldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onPickerLoaded(args) {
    
    let timePicker = <TimePicker>args.object;

    var displayDate = new Date();

    console.log(displayDate);

    timePicker.hour = 9;
    timePicker.minute = 25;
}

    onTimeChanged(args) {
        console.log(args.value);
    }

    onchange(args) {
        let textField = <TextField>args.object;
        console.log('jhvjhv', textField.text);
      }
    

}
