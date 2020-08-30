import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FileOptionIcon from './FileOptionButton';

class ImportFromFile extends Component {
    handleFileChosen(file, handleFileRead) {
        let fileReader = new FileReader();
        fileReader.onloadend = e => handleFileRead(e, file.name);
        fileReader.readAsText(file);
    }

    render() {
        let handleFileRead = this.props.handleFileRead;

        return (
            <div className='open-file'>
                <input
                    type='file'
                    id='open-file-input'
                    accept='.txt, .md'
                    className='d-none'
                    onChange={e =>  this.handleFileChosen(e.target.files[0], handleFileRead)}
                />
                <label htmlFor="open-file-input">
                    <FileOptionIcon type='open' onClick={ () => ({}) }/>
                </label>
            </div>
        );
    }
}

ImportFromFile.propTypes = {
    handleFileRead: PropTypes.func.isRequired,
};

export default ImportFromFile;
