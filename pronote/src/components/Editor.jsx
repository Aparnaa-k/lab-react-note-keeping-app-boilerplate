import React, { Component } from 'react';
import './Editor.css';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  render() {
    const { text } = this.state;

    return (
      <div className="editor-container">
        <h3 className='left'> Input</h3>
        <textarea
          className="editor"
          value={text}
          onChange={this.handleChange}
          placeholder="Type something..."
        ></textarea>
        <h3 className='left'>Pro note</h3>
        <div className="display">{text}</div>
      </div>
    );
  }
}

export default Editor;

