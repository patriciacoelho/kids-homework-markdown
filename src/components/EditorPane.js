import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/theme-solarized_light';

import '../style/SplitPaneResizer.css';

class EditorPane extends Component {
    constructor(){
        super();
        this.aceEditor = React.createRef();
    }

    componentDidUpdate(prevProps) {
        let loadedValue = this.props.loadedValue;
        if (loadedValue !== prevProps.loadedValue && loadedValue !== null) {
            this.aceEditor.current.editor.setValue(loadedValue,-1);
        }
    }

    render() {
        let handleMarkdown = this.props.handleMarkdown;

        return (
            <div>
                <AceEditor
                    ref={this.aceEditor}
                    onChange={handleMarkdown}
                    mode='markdown'
                    theme='solarized_light'
                    height='100vh'
                    width='50vw'
                    fontSize='16px'
                />
            </div>
        );
    }
}

EditorPane.propTypes = {
    handleMarkdown: PropTypes.func.isRequired,
    loadedValue: PropTypes.string,
}

export default EditorPane;
