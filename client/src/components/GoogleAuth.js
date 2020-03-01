import React from 'react'
import { connect } from 'react-redux'
import { Icon } from 'semantic-ui-react'
import clientId from '../apis/gapiClientId.js'
import { signOut, updateCurrentUser, signInActions } from '../actions'

class GoogleAuth extends React.Component {
    componentDidMount() {
        // load the library module
        window.gapi.load('client:auth2', () => {
            // initialize google api client which is an async action
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
            const currentUser = this.auth.currentUser.get()
            const idtoken = currentUser.getAuthResponse().id_token
            const email = currentUser.getBasicProfile().getEmail()
            const avatar = currentUser.getBasicProfile().getImageUrl()
            this.props.signInActions(idtoken, email, avatar)
        } else {
            this.props.signOut()
            this.props.updateCurrentUser(null, null, null)
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
                <a href="/">
                    <button className="ui red google button" onClick={this.onSignOutClick}>
                        <Icon name="google" />
                        Sign Out
                    </button>
                </a>
            )
        } else {
            return (
                <button className="ui red google button" onClick={this.onSignInClick}>
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

export default connect(mapStateToProps, { signOut, signInActions, updateCurrentUser })(GoogleAuth)