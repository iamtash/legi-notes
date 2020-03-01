import React from 'react'
import { connect } from 'react-redux'
import { Image } from 'semantic-ui-react'

const Avatar = ({ avatar, style }) => {
    return (avatar ? <Image src={avatar} verticalAlign='middle' size="mini" style={style} circular /> : null)
}

const mapStateToProps = state => {
    return { avatar: state.currentUser.avatar }
}

export default connect(mapStateToProps)(Avatar)