import { Component } from '@angular/core';

//import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-month-picker';
  currentMonth:  any;

  changeValue(e) {
    console.log(e);
  }

  // Reactive form example
  // ngOnInit() {
  //   this.infoForm.get("currentMonth").valueChanges.subscribe(selectedValue  => {
  //     console.log(selectedValue)
  //   })
  // }

  // infoForm = new FormGroup({
  //   title: new FormControl(''),
  //   currentMonth: new FormControl(''),
  // });

  // onSubmit() {
  //   console.log(this.infoForm.value);
  // }

}
