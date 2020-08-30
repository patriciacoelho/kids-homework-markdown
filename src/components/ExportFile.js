import React, {Component} from 'react';
import PropTypes from 'prop-types';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import FileOptionIcon from './FileOptionButton';

class ExportFile extends Component {
    handleExportFile() {
        if (this.props.printableZone) {
            html2canvas(this.props.printableZone).then((canvas) => {
                const image = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(image,'PNG',0,0);
                pdf.save(`${this.props.fileName}.pdf`);
            });
        }
    }

    render() {
        return (
            <div className='download-expanse'>
                <FileOptionIcon type='export_as_pdf' onClick={this.handleExportFile.bind(this)} />
            </div>
        );
    }
}

ExportFile.propTypes = {
    printableZone: PropTypes.object,
    fileName: PropTypes.string.isRequired,
};

export default ExportFile;