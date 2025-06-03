import { Component, Input, signal } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { InvestmentResults } from './investment-results/investment-results.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent]
})
export class AppComponent {

  investmentResults = signal<InvestmentResults[] | undefined>(undefined);

  onSubmitUserInput($event: InvestmentResults[]) {
    this.investmentResults.set($event);
    //this.investmentResults = $event;
  }

  
}