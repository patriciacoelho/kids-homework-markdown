import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import ReactMarkdown from 'react-markdown';
import './App.css';

import EditorPane from './components/EditorPane';

class App extends Component {
  constructor() {
    super();
    this.state = {
        markdownSrc: '',
    };
  }

  updateMarkdown(value) {
      this.setState({markdownSrc: value});
  }

  render() {
    return (
      <div className="App">
        <SplitPane
          split="vertical"
          defaultSize="50%"
          minSize="370"
        >
          <div className="editor-pane">
            <EditorPane handleMarkdown={this.updateMarkdown.bind(this)} />
          </div>
          <div className="view-pane">
            <ReactMarkdown source={this.state.markdownSrc}/>
          </div>
        </SplitPane>
      </div>
    );
  }
}

export default App;
