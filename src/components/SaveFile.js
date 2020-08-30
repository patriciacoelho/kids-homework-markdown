import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FileOptionIcon from './FileOptionButton';

class SaveFile extends Component {
    handleSaveFile() {
        let blob = new Blob([this.props.fileContent], { type: 'text/plain' });
        let anchor = document.createElement('a');

        anchor.download = this.props.fileName;
        anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
        anchor.dataset.downloadurl = ['text/plain', anchor.download, anchor.href].join(':');
        anchor.click();
    }

    render() {
        return (
            <div className='download-expanse'>
                <FileOptionIcon type='save' onClick={this.handleSaveFile.bind(this)} />
            </div>
        );
    }
}

SaveFile.propTypes = {
    fileContent: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
};

export default SaveFile;