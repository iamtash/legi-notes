import React from 'react'
import { connect } from 'react-redux'
import CaseItem from './CaseItem'

const CaseList = ({ cases, onCaseSelect }) => {
    const renderedList = cases.map(kase => {
        if (onCaseSelect) {
            return (
                <CaseItem
                    key={kase.id} 
                    kase={kase}
                    onCaseSelect={onCaseSelect}
                />               
            )
        } else {
            return <CaseItem key={kase.id} kase={kase}/>
        }
    })
    return <div className="ui three stackable cards">{renderedList}</div>
}

const mapStateToProps = state => {
    return { cases: state.cases }
}

export default connect(mapStateToProps)(CaseList)