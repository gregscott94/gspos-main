import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    const componentStyle = {
      background: '#f5f5f5',
      padding: '10px 20px',
      borderRadius: '2px'
    };
    const inputStyle = {
      padding: '0',
      background: '0',
      border: '0',
      color: '#393939',
      fontSize: '130px',
      fontWeight: '700',
      lineHeight: '130px',
      textTransform: 'uppercase',
      width: '100%'
    };
    return (
      <div style={componentStyle}>
        <span>Start typing..</span>
        <input style={inputStyle} autoFocus />
      </div>
    );
  }
}
