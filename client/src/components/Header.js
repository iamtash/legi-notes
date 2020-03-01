import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Avatar from './Avatar'
import GoogleAuth from './GoogleAuth'

const Header = ({ isSignedIn }) => {
    const renderLinks = () => {
        return (isSignedIn ? <Link to="/bookmarks" className="item">Bookmarks</Link> : null)
    }

    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item header">LegiNotes</Link>
            {renderLinks()}
            <div className="right menu">
                <Avatar style={{marginRight: '1em'}} />
                <GoogleAuth />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps)(Header)