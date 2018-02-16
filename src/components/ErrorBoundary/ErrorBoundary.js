import React, {Component} from 'react';
import './ErrorBoundary.css';
import {Transition} from 'react-transition-group';
import App from '../../containers/App';

const transitionStyles = {
  entering: {
    opacity: 0,
    display: 'block',
    top: 0,
    transform: 'translate(-50%, -100%)'
  },
  entered: {opacity: 1, top: '20px', transform: 'translate(-50%, 0%)'}
};

const duration = 300;

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false, error: {}};
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({
      hasError: true,
      error: {
        title: 'Oops... an error occured!',
        message: error.message
      }
    });
    // You can also log the error to an error reporting service
    console.log('ERROR', error.message);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.hasError) {
      setTimeout(() => {
        this.setState({
          hasError: false
        });
      }, 5000);
    }
  }

  render() {
    // You can render any custom fallback UI
    return (
      <App>
        <Transition in={this.state.hasError} timeout={duration}>
          {state => (
            <div
              className="message is-error is-danger"
              style={{
                ...transitionStyles[state]
              }}>
              <div className="message-body">
                <div className="columns">
                  <div className="column is-narrow">
                    <i className="fas fa-3x fa-times" />
                  </div>
                  <div className="column">
                    <p>
                      <strong>{this.state.error.title}</strong>
                    </p>
                    <p>{this.state.error.message}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Transition>
        {this.props.children}
      </App>
    );
  }
}
