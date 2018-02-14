import React, {Component} from 'react';
import './Ticker.css';
import {subscribeTicker, getSymbols, getCurrencies} from '../../lib/socket';

class Ticker extends Component {
  state = {
    ticker: {symbol: 'No Symbol defined'},
    symbols: 'Loading Symbols...',
    currencies: 'Loading currencies...'
  };

  constructor(props) {
    super(props);

    getSymbols(symbols => {
      console.log(symbols);
      this.setState({symbols: symbols});
    });
    getCurrencies(currencies => {
      console.log(currencies);
      this.setState({currencies: currencies});
    });

    subscribeTicker((err, ticker) => {
      this.setState({ticker});
    });
  }

  selectSymbol() {}

  render() {
    return (
      <div className="Ticker">
        <h2>
          {this.state.ticker.symbol}{' '}
          {typeof this.state.symbols === 'string'
            ? this.state.symbols
            : this.state.symbols.length}
        </h2>
        <p>
          <strong>Ask:</strong> {this.state.ticker.ask}
        </p>
        <p>
          <strong>Bid:</strong> {this.state.ticker.bid}
        </p>
        <p>
          <strong>Last:</strong> {this.state.ticker.last}
        </p>
        <p>
          <strong>Open:</strong> {this.state.ticker.open}
        </p>
      </div>
    );
  }
}

export default Ticker;
