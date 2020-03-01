import React from 'react'
import { Modal, Form, Input, Button, Icon } from 'semantic-ui-react'

class CreateCase extends React.Component {
    state = {
        number: '',
        title: '',
        client: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.onFormSubmit(this.state)
    }

    render() {
        const { showForm, onCloseFormClick } = this.props

        return (
            <Modal open={showForm} onClose={onCloseFormClick}>
                <i onClick={this.props.onCloseFormClick} className="close icon"></i>
                <div className="header">New Case</div>
                <div className="content">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <label>Case Number</label>
                            <Input 
                                placeholder="Case Number" 
                                name="number" 
                                value={this.state.number} 
                                onChange={this.handleChange}
                                required 
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Title</label>
                            <Input 
                                placeholder="Title" 
                                name="title" 
                                value={this.state.title} 
                                onChange={this.handleChange}
                                required 
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Client</label>
                            <Input 
                                placeholder="Client" 
                                name="client" 
                                value={this.state.client} 
                                onChange={this.handleChange}
                                required 
                            />
                        </Form.Field>
                        <Button primary type="submit">
                            <Icon name="folder" />
                            Create
                        </Button>
                        <Button secondary onClick={onCloseFormClick}>
                            <Icon name="close" />
                            Close
                        </Button>
                    </Form>
                </div>
            </Modal>
        )
    }
}

export default CreateCase