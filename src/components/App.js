import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import ReactMarkdown from 'react-markdown/with-html';
import '../style/App.css';

import EditorPane from './EditorPane';
import ImportFromFile from './ImportFromFile';
import SaveFile from './SaveFile';
import ExportFile from './ExportFile';
import FileOptionIcon from './FileOptionButton';

class App extends Component {
  constructor() {
    super();
    this.state = {
        markdownSrc: '',
        loadedSrc: '',
        fileName: 'file',
    };
    this.printableZone = React.createRef();
  }

  updateMarkdown(value) {
      this.setState({ markdownSrc: value });
  }

  handleFileRead(e, fileName) {
    const content = e.srcElement.result;
    this.setState({ fileName: fileName });
    this.setState({ loadedSrc: content });
  }

  handleNewFile() {
    // Perguntar se não quer salvar antes, se detectar que houve modificação
    window.location.reload();
  }

  render() {
    return (
      <div className='App'>
        <div className="file-actions">
          <FileOptionIcon type='new' onClick={this.handleNewFile.bind(this)} />
          <ImportFromFile handleFileRead={this.handleFileRead.bind(this)}/>
          <SaveFile fileName={this.state.fileName} fileContent={this.state.markdownSrc} />
          <ExportFile fileName={this.state.fileName} printableZone={this.printableZone.current} />
        </div>
        <SplitPane
          split='vertical'
          defaultSize='50%'
          allowResize={false}
        >
          <div className='editor-pane'>
            <EditorPane loadedValue={this.state.loadedSrc} handleMarkdown={this.updateMarkdown.bind(this)} />
          </div>
          <div className='view-pane'>
            <div ref={this.printableZone} className='printable-zone'>
              <ReactMarkdown source={this.state.markdownSrc} escapeHtml={false} />
            </div>
          </div>
        </SplitPane>
      </div>
    );
  }
}

export default App;
