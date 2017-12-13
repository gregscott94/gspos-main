import React from 'react';
import App from 'grommet/components/App';

import StartScreen from './screens/StartScreen';
import HomeScreen from './screens/HomeScreen';
import PopcornTime from './popcorntime';

const SCREENS = {
  START: 0,
  HOME: 1,
  POPCORN: 2
};

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeScreen: SCREENS.POPCORN,
      lastCommand: '',
      cmdToggle: false
    };

    this.connection = new WebSocket('ws://127.0.0.1:3012');
    this.connection.onmessage = evt => {
      console.log('Response: ', evt.data);
      this.parseMessage(evt.data);
    };
    this.setScreen = this.setScreen.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  parseMessage(msg) {
    let msgParts = msg.split(':');
    if (msgParts[0] === 'd' && msgParts[1]) {
      switch (msgParts[1]) {
        case 'home':
          this.setScreen(SCREENS.HOME);
        default:
          this.setState({
            lastCommand: msgParts[1],
            cmdToggle: !this.state.cmdToggle
          });
          break;
      }
    }
  }

  sendMessage(msg) {
    this.connection.send(msg);
  }

  setScreen(screen) {
    this.setState({ activeScreen: screen });
  }

  render() {
    const { activeScreen, lastCommand, cmdToggle } = this.state;
    const api = {
      sendMessage: this.sendMessage,
      setScreen: this.setScreen,
      SCREENS,
      lastCommand,
      cmdToggle
    };
    const screenOptions = [
      <StartScreen api={api} />,
      <HomeScreen api={api} />,
      <PopcornTime api={api} />
    ];
    return <App>{screenOptions[activeScreen]}</App>;
  }
}
