import React from 'react';
import Headline from 'grommet/components/Headline';

import SearchBar from './components/SearchBar';

export default class PopcornTime extends React.Component {
  render() {
    return (
      <div>
        <Headline
          size="medium"
          align="center"
          style={{ marginBottom: '40px', marginTop: '20px' }}
        >
          Popcorn Time
        </Headline>
        <SearchBar />
      </div>
    );
  }
}
