import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Icon } from 'semantic-ui-react'
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
            <Link to="/" className="item">
                <Icon name="search" color="blue" />
            </Link>
            <div className="right menu">
                <div className="item"><Avatar /></div>
                <div className="item"><GoogleAuth /></div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps)(Header)