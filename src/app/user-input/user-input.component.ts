import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
  imports: [FormsModule]

})
export class UserInputComponent {
  
  enteredInitialInvestment: number = 0;
  enteredAnnualInvestment: number = 0;
  enteredExpectedReturn: number = 0;
  enteredDuration: number = 0;

  onSubmit(){
    console.log('initial-investment:', this.enteredInitialInvestment);
    console.log('annual-investment:', this.enteredAnnualInvestment);
    console.log('expected-return:', this.enteredExpectedReturn);
    console.log('duration:', this.enteredDuration);
  }

}