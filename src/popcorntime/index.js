import React from 'react';
import Headline from 'grommet/components/Headline';

import SearchBar from '../components/SearchBar';

export default class PopcornTime extends React.Component {
  render() {
    return (
      <div>
        <Headline
          size="small"
          align="center"
          style={{ marginBottom: '20px', marginTop: '15px' }}
        >
          Popcorn Time
        </Headline>
        <SearchBar />
      </div>
    );
  }
}
