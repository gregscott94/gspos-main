import React from 'react';
import App from 'grommet/components/App';

import StartScreen from './screens/StartScreen';

const SCREENS = {
  START: 0,
  MAIN: 1
};

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeScreen: SCREENS.START };
  }

  render() {
    const { activeScreen } = this.state;
    const screenOptions = [<StartScreen />];
    return <App>{screenOptions[activeScreen]}</App>;
  }
}
