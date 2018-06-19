import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
let service: string = 'https://angular2-in-action-api.herokuapp.com';

// Export stock object interface
export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable()
export class StocksService {
  constructor(private http: HttpClient) { }
  public get() {
    return stocks.slice();
  }
  public add(stock: string) {
    stocks.push(stock);
    return this.get();
  }
  public remove(stock: string) {
    stocks.splice(stock.indexOf(stock), 1);
    return this.get();
  }
  public load(symbols): Observable<Array<StockInterface>>{
    if (symbols) {
      return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
    }
  }
}
