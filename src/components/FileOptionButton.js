import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';

import '../style/FileOptionButton.css';

class FileOptionButton extends Component {

    render() {
        let onClick = this.props.onClick;
        let type = this.props.type;

        return (
            <Button
                variant='contained'
                color='primary'
                size='small'
                className='file-option-button'
                component='span'
                onClick={onClick}
            >
                {type === 'new' && <AddIcon fontSize='small' />}
                {type === 'save' && <SaveIcon fontSize='small' />}
                {type === 'export_as_pdf' && <PictureAsPdfIcon fontSize='small' />}
                {type === 'open' && <FolderOpenIcon fontSize='small' />}
            </Button>
        );
    }
}

FileOptionButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['new', 'save', 'export_as_pdf', 'open']).isRequired,
};

export default FileOptionButton;