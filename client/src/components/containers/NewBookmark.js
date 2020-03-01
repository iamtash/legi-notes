import React from 'react'
import CreateCase from '../cases/CreateCase'
import CaseList from '../cases/CaseList'
import SelectOption from '../cases/SelectOption'
import { createBookmarkAndCase, addBookmarkToCase } from '../../actions'
import { connect } from 'react-redux'

class NewBookmark extends React.Component {
    state = { 
        showOption: true, 
        showForm: false,
        showCases: true
    }

    onFormSubmit = caseAttributes => {
        const data = { ...this.props.selectedBill, case_attributes: { 
                ...caseAttributes, 
                user_id: this.props.currentUserId 
            }
        }

        this.props.createBookmarkAndCase(data)

        this.props.history.push('/bookmarks')
    }

    onCaseSelect = caseId => {
        const data = { ...this.props.selectedBill, case_id: caseId}

        this.props.addBookmarkToCase(data)

        this.props.history.push('/bookmarks')
    }

    onShowFormClick = () => {
        this.setState({ 
            showOption: false, 
            showForm: true
        })
    }

    onCloseFormClick = () => {
        this.setState({ 
            showOption: true, 
            showForm: false,
            showCases: true 
        })
    }

    renderOption = () => {
        if (this.state.showOption) {
            return <SelectOption onShowFormClick={this.onShowFormClick} />
        } else {
            return null
        }
    }

    renderCases = () => {
        if (this.state.showCases) {
            return <CaseList onCaseSelect={this.onCaseSelect} />
        } else {
            return null
        }
    }

    redirect = () => {
        if (!this.props.selectedBill.bill_number) {
            this.props.history.push('/bookmarks')
        }
    }

    render() {
        this.redirect()

        return (
            <>
            {this.renderOption()}
            <CreateCase 
                showForm={this.state.showForm} 
                onCloseFormClick={this.onCloseFormClick} 
                onFormSubmit={this.onFormSubmit}
            />
            {this.renderCases()}
            </>
        )
    }
}

const mapStateToProps = state => {
    const { number, congressdotgov_url } = state.selectedBill 

    return { 
        selectedBill: { 
            bill_number: number,
            url: congressdotgov_url
        },
        currentUserId: state.currentUser.id
    }
}

export default connect(mapStateToProps, { createBookmarkAndCase, addBookmarkToCase })(NewBookmark)