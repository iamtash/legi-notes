import React from 'react'
import { connect } from 'react-redux'
import { Input } from 'semantic-ui-react'

class SearchBar extends React.Component {
    state = { term: '' }

    onInputChange = event => {
        this.setState({ term: event.target.value })
    }

    onFormSubmit = event => {
        event.preventDefault()
        this.props.onFormSubmit(this.state.term)
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

    render() {
        return (
            <div className="search-bar ui segment raised">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Congressional Bill Search</label>
                        {this.renderInput()}
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { loading: state.loading.bills }
}

export default connect(mapStateToProps)(SearchBar)