import React from 'react'
import { Form, Input, Button, Segment, Icon } from 'semantic-ui-react'

class CreateCase extends React.Component {
    state = {
        number: '',
        title: '',
        client: ''
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.onFormSubmit(this.state)
    }

    render() {
        return (
            <Segment raised>
                <Form>
                    <Form.Field>
                        <label>Case Number</label>
                        <Input placeholder="Case Number" name="number" value={this.state.number} />
                    </Form.Field>
                    <Form.Field>
                        <label>Title</label>
                        <Input placeholder="Title" name="title" value={this.state.title} />
                    </Form.Field>
                    <Form.Field>
                        <label>Client</label>
                        <Input placeholder="Client" name="client" value={this.state.client} />
                    </Form.Field>
                    <Button primary type="submit">
                        <Icon name="folder" />
                        Create
                    </Button>
                    <Button secondary onClick={this.props.onCloseFormClick}>
                        <Icon name="close" />
                        Close
                    </Button>
                </Form>
            </Segment>
        )
    }
}

export default CreateCase