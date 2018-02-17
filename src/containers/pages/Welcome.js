import React, {Component} from 'react';
import {connect} from 'react-redux';

import actions from '../../actions';
// import {Link} from 'react-router-dom';
// import Home from '../components/Home';

type Props = {};

class Welcome extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      exchanges: []
    };
  }

  render() {
    return (
      <div>
        <section className="section">
          <div className="container has-text-centered">
            <h2 className="title is-2">Welcome to Coinero</h2>
            <h3 className="is-4 subtitle is-normal">
              Cryptocurrency Trading Bot
            </h3>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column has-text-centered">
                <ul className="steps is-narrow is-medium is-centered has-content-centered">
                  <li className="steps-segment">
                    <a href="#" className="has-text-dark">
                      <span className="steps-marker">
                        <span className="icon">
                          <i className="fas fa-exchange-alt" />
                        </span>
                      </span>
                      <div className="steps-content">
                        <p className="heading">Exchange</p>
                      </div>
                    </a>
                  </li>
                  <li className="steps-segment">
                    <a href="#" className="has-text-dark">
                      <span className="steps-marker">
                        <span className="icon">
                          <i className="fas fa-key" />
                        </span>
                      </span>
                      <div className="steps-content">
                        <p className="heading">API Token</p>
                      </div>
                    </a>
                  </li>
                  <li className="steps-segment is-active has-gaps">
                    <span className="steps-marker">
                      <span className="icon">
                        <i className="fa fa-usd" />
                      </span>
                    </span>
                    <div className="steps-content">
                      <p className="heading">Payment</p>
                    </div>
                  </li>
                  <li className="steps-segment">
                    <span className="steps-marker is-hollow">
                      <span className="icon">
                        <i className="fa fa-check" />
                      </span>
                    </span>
                    <div className="steps-content">
                      <p className="heading">Confirmation</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container has-text-centered">
            <h3 className="title is-3">Select your exchange</h3>
            <div className="columns">
              <div className="column has-text-centered">
                <figure className="image is-96x96">
                  <img src="/logos/hitbtc.svg" alt="HitBTC" />
                </figure>
                <h2 className="title is-4">HitBTC</h2>
              </div>
              <div className="column has-text-centered">
                <figure className="image is-96x96">
                  <img src="/logos/binance.svg" alt="HitBTC" />
                </figure>
                <h2 className="title is-4">Binance</h2>
              </div>
              <div className="column has-text-centered">
                <figure className="image is-96x96">
                  <img src="/logos/gdax.svg" alt="HitBTC" />
                </figure>
                <h2 className="title is-4">GDAX</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    settings: actions.getSettings,
    ...state
  }
}

export default connect(mapStateToProps)(Welcome)
