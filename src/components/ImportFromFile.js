import React, {Component} from 'react';
import PropTypes from 'prop-types';

let fileReader;

const handleFileChosen = (file, handleFileRead) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
}

class ImportFromFile extends Component {
    render() {
        let handleFileRead = this.props.handleFileRead;

        return (
            <div className='upload-expanse'>
                <input
                    type='file'
                    id='file'
                    className='input-file'
                    accept='.txt'
                    onChange={e =>  handleFileChosen(e.target.files[0], handleFileRead)}
                />
            </div>
        );
    }
}

ImportFromFile.propTypes = {
    handleFileRead: PropTypes.func.isRequired,
};

export default ImportFromFile;