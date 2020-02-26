import DataTable from './DataTable'
import React from 'react'
import { Modal, Button } from 'semantic-ui-react'

const BillDetail = ({ bill, open, onModalClose }) => {
    const { number, title,  congressdotgov_url } = bill 

    return (
        <Modal open={open} onClose={onModalClose} >
            <i onClick={onModalClose} className="close icon"></i>
                <div className="header">
                    {number}
                </div>
            <div className="content">
                <div className="description">
                    <div className="ui header">{title}</div>

                    <DataTable {...bill} />

                    <div>
                        <a href={congressdotgov_url} target="_blank" rel="noopener noreferrer">
                            <Button basic color='blue' content='View Full Bill' />
                        </a>
                    </div>
                </div>
            </div>
            <div className="actions">
                <Button primary content="Save" />
            </div>
        </Modal>
    )
}

export default BillDetail