import React from 'react'
import { Segment, Button } from 'semantic-ui-react'

const SelectOption = props => {
    return (
        <Segment raised>
            Select a case to add your bookmark to or 
            <Button 
                basic 
                color="blue"
                style={{marginLeft: '5px'}}
                onClick={props.onShowFormClick}
            >Create a new case
            </Button>
        </Segment>
    )
}

export default SelectOption