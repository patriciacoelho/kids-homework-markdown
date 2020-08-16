import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/theme-solarized_light';

import '../style/SplitPaneResizer.css';

class EditorPane extends Component {
    render() {
        let handleMarkdown = this.props.handleMarkdown;

        return (
            <div>
                <AceEditor
                    onChange={handleMarkdown}
                    mode="markdown"
                    theme="solarized_light"
                    height="100vh"
                    width="50vw"
                    fontSize="16px"
                />
            </div>
        );
    }
}

EditorPane.propTypes = {
    handleMarkdown: PropTypes.func.isRequired,
}

export default EditorPane;
