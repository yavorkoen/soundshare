
import './ConfirmDialog.css';

const ConfirmDialog = ({
    show,
    onClose,
    onSave
}) => {


    return (
        <div id="myModal" className="modal" style={ show ? {display: 'block'} : {display: 'none'}}>
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={onClose}>&times;</span>
                    <h6>Do you really want to delete your sound?</h6>
                </div>
                <div className="modal-body">
                    <button className="button-delete" onClick={onSave}>Yes</button>
                    <button className="button no-delete" onClick={onClose}>No</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmDialog;