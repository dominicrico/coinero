import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
// import Home from '../components/Home';

type Props = {};

export default class Dashboard extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      hasSettings: false
    };
  }

  render() {
    return this.state.hasSettings ? (
      <h1>Dashboard</h1>
    ) : (
      <Redirect to={{pathname: '/welcome'}} />
    );
  }
}
