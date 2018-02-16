import React, {Component} from 'react';

type Props = {
  children: React.Node
};

export default class App extends Component<Props> {
  props: Props;

  render() {
    return <main>{this.props.children}</main>;
  }
}
