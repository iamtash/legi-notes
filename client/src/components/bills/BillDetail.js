import DataTable from './DataTable'
import React from 'react'
import { Modal, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const BillDetail = ({ bill, open, onModalClose, isSignedIn }) => {
    const { number, title,  congressdotgov_url } = bill 

    const renderBookmarkBtn = () => {
        if (isSignedIn) {
            return (
                <Link to="/bookmarks/new">
                    <Button primary onClick={onModalClose}>
                        <Icon name="bookmark" />
                        Bookmark
                    </Button>
                </Link> 
            )
        } else {
            return null
        }
    }

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
                {renderBookmarkBtn()}
                <Button secondary onClick={onModalClose}>
                    <Icon name="close" />
                    Close
                </Button>
            </div>
        </Modal>
    )
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps)(BillDetail)