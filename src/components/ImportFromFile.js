import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ImportFromFile extends Component {
    handleFileChosen(file, handleFileRead) {
        let fileReader = new FileReader();
        fileReader.onloadend = e => handleFileRead(e, file.name);
        fileReader.readAsText(file);
    }

    render() {
        let handleFileRead = this.props.handleFileRead;

        return (
            <div className='upload-expanse'>
                <input
                    type='file'
                    id='file'
                    className='input-file'
                    accept='.txt'
                    onChange={e =>  this.handleFileChosen(e.target.files[0], handleFileRead)}
                />
            </div>
        );
    }
}

ImportFromFile.propTypes = {
    handleFileRead: PropTypes.func.isRequired,
};

export default ImportFromFile;