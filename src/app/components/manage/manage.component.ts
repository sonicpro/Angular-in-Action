import { Component } from '@angular/core';
import { StocksService } from '../../services/stocks.service';

@Component({
  selector: 'manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  public symbols: string[];
  public stock: string; // Not a StockInterface, just an input's value.
  constructor(private service: StocksService) {
    this.symbols = service.get();
  }

  public add(): void {
    this.symbols = this.service.add(this.stock.toUpperCase());
    this.stock = "";
  }

  public remove(symbol: string): void {
    this.symbols = this.service.remove(symbol);
  }
}
