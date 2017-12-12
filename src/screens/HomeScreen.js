import React from 'react';
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import Button from 'grommet/components/Button';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';

const BOXES = {
  THEATER: 1,
  SETTINGS: 2,
  TOOLS: 3,
  OTHER: 4
};

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeBox: BOXES.THEATER };
  }

  componentDidMount() {
    this.props.api.sendMessage('r:home');
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.api.lastCommand &&
      this.props.api.cmdToggle !== nextProps.api.cmdToggle
    ) {
      this.handleCommand(nextProps.api.lastCommand);
    }
  }

  handleCommand(cmd) {
    if (cmd === 'up') {
      this.setState({
        activeBox:
          this.state.activeBox - 2 > 0
            ? this.state.activeBox - 2
            : this.state.activeBox + 2
      });
    } else if (cmd === 'down') {
      this.setState({
        activeBox:
          this.state.activeBox + 2 <= 4
            ? this.state.activeBox + 2
            : this.state.activeBox - 2
      });
    } else if (cmd === 'right') {
      this.setState({
        activeBox:
          (this.state.activeBox + 1) % 2 === 0
            ? this.state.activeBox + 1
            : this.state.activeBox - 1
      });
    } else if (cmd === 'left') {
      this.setState({
        activeBox:
          (this.state.activeBox - 1) % 2 !== 0
            ? this.state.activeBox - 1
            : this.state.activeBox + 1
      });
    }
  }

  render() {
    const { activeBox } = this.state;
    return (
      <div style={{ marginTop: '200px' }}>
        <Headline size="large" align="center" style={{ marginBottom: '60px' }}>
          GSPOS
        </Headline>
        <Columns justify="center" size="large">
          <Box
            align="center"
            pad="medium"
            margin="medium"
            colorIndex={activeBox === BOXES.THEATER ? 'accent-1-a' : 'light-2'}
          >
            <Heading tag="h3" style={{ marginBottom: '0' }}>
              Theater
            </Heading>
          </Box>
          <Box
            align="center"
            pad="medium"
            margin="medium"
            colorIndex={activeBox === BOXES.TOOLS ? 'accent-1-a' : 'light-2'}
          >
            <Heading tag="h3" style={{ marginBottom: '0' }}>
              Tools
            </Heading>
          </Box>
          <Box
            align="center"
            pad="medium"
            margin="medium"
            colorIndex={activeBox === BOXES.SETTINGS ? 'accent-1-a' : 'light-2'}
          >
            <Heading tag="h3" style={{ marginBottom: '0' }}>
              Settings
            </Heading>
          </Box>
          <Box
            align="center"
            pad="medium"
            margin="medium"
            colorIndex={activeBox === BOXES.OTHER ? 'accent-1-a' : 'light-2'}
          >
            <Heading tag="h3" style={{ marginBottom: '0' }}>
              Other
            </Heading>
          </Box>
        </Columns>
      </div>
    );
  }
}
