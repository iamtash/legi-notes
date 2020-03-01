import React from 'react'
import { Button } from 'semantic-ui-react'

const SelectOption = props => {
    return (
        <div className="ui compact blue message">
            <div className="header">
                Select a case to add your bookmark to or 
                <Button 
                    inverted
                    secondary
                    style={{marginLeft: '1em'}}
                    onClick={props.onShowFormClick}
                >Create a new case
                </Button>
            </div>
        </div>
    )
}

export default SelectOption