import React from 'react'
import { connect } from 'react-redux'
import { Icon } from 'semantic-ui-react'
import clientId from '../apis/gapiClientId.js'
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component {
    componentDidMount() {
        // load the library module
        window.gapi.load('client:auth2', () => {
            // initialize google api client 
            window.gapi.client.init({
                clientId,
                scope: 'email'
            }).then(() => {
                // get reference to the auth library/ auth object
                this.auth = window.gapi.auth2.getAuthInstance()
                // immediately update auth state inside redux store
                this.onAuthChange(this.auth.isSignedIn.get())
                // passes a boolean to callback anytime auth status changes
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn()
        } else {
            this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton = () => {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return (
                <button className="ui red google button google-button" onClick={this.onSignOutClick}>
                    <Icon name="google" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button className="ui red google button google-button" onClick={this.onSignInClick}>
                    <Icon name="google" />
                    Sign in with Google
                </button>
            )
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)