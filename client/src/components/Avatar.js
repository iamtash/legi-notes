import React from 'react'
import { connect } from 'react-redux'
import { Image } from 'semantic-ui-react'

const Avatar = ({ avatar }) => {
    return (avatar ? <Image src={avatar} avatar /> : null)
}

const mapStateToProps = state => {
    return { avatar: state.currentUser.avatar }
}

export default connect(mapStateToProps)(Avatar)