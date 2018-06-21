import { Component, OnInit } from '@angular/core';
import { StocksService, StockInterface } from '../../services/stocks.service'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public symbols: string[];
  public stocks: StockInterface[];

  constructor(private service: StocksService) {
    // Load default symbols from the service immediately.
    this.symbols = service.get();
  }

  ngOnInit() {
    this.service.load(this.symbols).subscribe(stocks => this.stocks = stocks);
  }
}
