import React, {Component} from 'react';
import PropTypes from 'prop-types';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

class ExportFile extends Component {
    handleExportFile() {
        html2canvas(this.props.printableZone).then((canvas) => {
            const image = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(image,'PNG',0,0);
            pdf.save(`${this.props.fileName}.pdf`);
        });
    }

    render() {
        return (
            <div className='download-expanse'>
                <Button onClick={this.handleExportFile.bind(this)}>
                    Exportar para PDF
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

ExportFile.propTypes = {
    printableZone: PropTypes.object.isRequired,
    fileName: PropTypes.string.isRequired,
};

export default ExportFile;