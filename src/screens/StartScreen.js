import React from 'react';
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import Button from 'grommet/components/Button';

export default class StartScreen extends React.Component {
  render() {
    return (
      <div>
        <Headline size="xlarge" align="center" style={{ marginTop: '100px' }}>
          GSPOS
        </Headline>
        <Heading id="subTitle" align="center" tag="h2">
          The entertainment system of the future
        </Heading>
      </div>
    );
  }
}
