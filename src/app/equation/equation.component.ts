import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css'],
})
export class EquationComponent implements OnInit {
  mathForm = new FormGroup(
    {
      a: new FormControl(this.randomNumber()),
      b: new FormControl(this.randomNumber()),
      answer: new FormControl(''),
    },
    [
      (form: AbstractControl) => {
        if (form.value.a + form.value.b === parseInt(form.value.answer)) {
          return null;
        } else {
          return { addition: true };
        }
      },
    ]
  );

  constructor() {}

  get a() {
    return this.mathForm.value.a;
  }

  get b() {
    return this.mathForm.value.b;
  }

  ngOnInit(): void {}

  randomNumber() {
    return Math.floor(Math.random() * 10);
  }
}
