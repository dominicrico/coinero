import * as React from 'react';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    return <main>{this.props.children}</main>;
  }
}
