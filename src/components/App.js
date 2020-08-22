import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import ReactMarkdown from 'react-markdown';
import '../style/App.css';

import EditorPane from './EditorPane';
import ImportFromFile from './ImportFromFile';
import SaveFile from './SaveFile';

class App extends Component {
  constructor() {
    super();
    this.state = {
        markdownSrc: '',
        loadedSrc: '',
        fileName: 'file',
    };
  }

  updateMarkdown(value) {
      this.setState({ markdownSrc: value });
  }

  handleFileRead(e, fileName) {
    const content = e.srcElement.result;
    this.setState({ fileName: fileName });
    this.setState({ loadedSrc: content });
}

  render() {
    return (
      <div className='App'>
        <ImportFromFile handleFileRead={this.handleFileRead.bind(this)}/>
        <SaveFile fileName={this.state.fileName} fileContent={this.state.markdownSrc} />
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
