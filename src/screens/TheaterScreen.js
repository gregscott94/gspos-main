import React from 'react';

import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

import PopcornTime from '../popcorntime';
import YouTube from '../youtube';

const SIDEOPTIONS = {
  YOUTUBE: [0, 0],
  POPCORN: [1, 0]
};

export default class TheaterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeFocus: SIDEOPTIONS.YOUTUBE };
  }

  render() {
    const { activeFocus } = this.state;
    return (
      <Split flex="right">
        <Sidebar colorIndex="grey-2-a" size="medium">
          <Header pad="medium" justify="between">
            <Title>Theater</Title>
          </Header>
          <Box flex="grow" justify="start">
            <Menu primary={true}>
              <Anchor
                href="#"
                className={activeFocus === SIDEOPTIONS.YOUTUBE ? 'active' : ''}
              >
                YouTube
              </Anchor>
              <Anchor
                href="#"
                className={activeFocus === SIDEOPTIONS.POPCORN ? 'active' : ''}
              >
                Popcorn Time
              </Anchor>
            </Menu>
          </Box>
        </Sidebar>
        <YouTube />
      </Split>
    );
  }
}
