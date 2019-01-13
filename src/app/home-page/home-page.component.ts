import { Component, OnInit } from '@angular/core';
import { TimePicker } from "tns-core-modules/ui/time-picker";
import { TextField } from 'ui/text-field';

export class User  {
  message : string;
  time : string;
};
@Component({
  selector: 'ns-home-page',
  moduleId: module.id,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})


export class HomePageComponent implements OnInit {
  user: User;

  constructor() {
    this.user = new User();
  }

  ngOnInit() {
  }

//   onPickerLoaded(args) {
    
//     let timePicker = <TimePicker>args.object;

//     var displayDate = new Date();

//     console.log(displayDate);

//     timePicker.hour = 9;
//     timePicker.minute = 25;
// }

//     onTimeChanged(args) {
//         console.log(args.value);
//     }

//     onchange(args) {
//       let textField = <TextField>args.object;
//       console.log('jhvjhv', textField.text);
//     }

//   click() {
//     console.log(this.user);
//   }

  
}
