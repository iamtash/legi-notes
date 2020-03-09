import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import './SelectOption.css'

const SelectOption = props => {
    const renderMsg = () => {
        if (props.cases.length < 1) {
            return (
                <>
                {renderButton()}
                <div className="inline-header header" style={{marginLeft: '1em'}}>
                    to add your bookmark to.
                </div>
                </>
            )
        } else {
            return (
                <>
                <div className="header inline-header">
                    Select a case to add your bookmark to or 
                </div>
                {renderButton()}
                </>
            )
        }
    }

    const renderButton = () => (
        <Button 
            inverted
            secondary
            style={{marginLeft: '1em'}}
            onClick={props.onShowFormClick}
        >Create a new case
        </Button>
    )

    return (
        <div className="ui compact blue message">
            {renderMsg()}
        </div>
    )
}

const mapStateToProps = state => {
    return { cases: state.cases }
}

export default connect(mapStateToProps)(SelectOption)