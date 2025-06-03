import { Component, Input } from '@angular/core';
import { InvestmentResults } from './investment-results.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss',
  imports: [CurrencyPipe]
})
export class InvestmentResultsComponent {

  @Input()
  investmentResults?: InvestmentResults[];

  

}