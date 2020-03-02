import React from 'react'
import { connect } from 'react-redux'
import { Input, Message } from 'semantic-ui-react'

class SearchBar extends React.Component {
    state = { term: '', message: '' }

    onInputChange = event => {
        this.setState({ term: event.target.value, message: false })
    }

    onFormSubmit = event => {
        event.preventDefault()
        this.props.onFormSubmit(this.state.term)
        this.setState(prevState => ({ term: '', message: prevState.term }))
    }

    renderInput = () => {
        if (this.props.loading) {
            return (
                <Input
                    loading
                    type="text" 
                    value={this.state.term} 
                    onChange={this.onInputChange}
                />
            )
        } else {
            return (
                <Input
                    type="text" 
                    value={this.state.term} 
                    onChange={this.onInputChange}
                />
            )
        }
    }

    renderMessage = () => {
        if (!this.props.loading && this.state.message) {
            return (
                <Message 
                    positive 
                    compact 
                    size="mini" 
                >Search results for <b>{this.state.message}</b>
                </Message>
            )
        }
    }

    render() {
        return (
            <div className="search-bar ui segment raised">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Congressional Bill Search</label>
                        {this.renderInput()}
                    </div>
                </form>
                {this.renderMessage()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { loading: state.loading.bills }
}

export default connect(mapStateToProps)(SearchBar)