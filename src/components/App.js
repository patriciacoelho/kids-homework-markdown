import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import ReactMarkdown from 'react-markdown';
import '../style/App.css';

import EditorPane from './EditorPane';
import ImportFromFile from './ImportFromFile';

class App extends Component {
  constructor() {
    super();
    this.state = {
        markdownSrc: '',
        loadedSrc: '',
    };
  }

  updateMarkdown(value) {
      this.setState({markdownSrc: value});
  }

  handleFileRead(e) {
    const content = e.srcElement.result;
    this.setState({loadedSrc: content});
}

  render() {
    return (
      <div className='App'>
        <ImportFromFile handleFileRead={this.handleFileRead.bind(this)}/>
        <SplitPane
          split='vertical'
          defaultSize='50%'
          minSize='370'
        >
          <div className='editor-pane'>
            <EditorPane loadedValue={this.state.loadedSrc} handleMarkdown={this.updateMarkdown.bind(this)} />
          </div>
          <div className='view-pane'>
            <ReactMarkdown source={this.state.markdownSrc}/>
          </div>
        </SplitPane>
      </div>
    );
  }
}

export default App;
