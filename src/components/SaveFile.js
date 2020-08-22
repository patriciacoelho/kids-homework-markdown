import React, {Component} from 'react';
import PropTypes from 'prop-types';


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
                <Button onClick={this.handleSaveFile.bind(this)}>
                    Clique aqui para salvar
                </Button>
            </div>
        );
    }
}

const Button = ({ onClick, children }) => (
    <button type="button" onClick={onClick}>
        {children}
    </button>
);

SaveFile.propTypes = {
    fileContent: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
};

export default SaveFile;