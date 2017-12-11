import React from 'react';
import App from 'grommet/components/App';

import StartScreen from './screens/StartScreen';
import HomeScreen from './screens/HomeScreen';

const SCREENS = {
  START: 0,
  HOME: 1
};

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeScreen: SCREENS.HOME };
  }

  render() {
    const { activeScreen } = this.state;
    const screenOptions = [<StartScreen />, <HomeScreen />];
    return <App>{screenOptions[activeScreen]}</App>;
  }
}
