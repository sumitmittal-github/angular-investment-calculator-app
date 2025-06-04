import { Component, inject, Signal, } from '@angular/core';
import { InvestmentResults } from './investment-results.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss',
  imports: [CurrencyPipe]
})
export class InvestmentResultsComponent {

  investmentService = inject(InvestmentService);

  get results() : Signal<InvestmentResults[] | undefined> {
    return this.investmentService.investmentResults;
  }

}