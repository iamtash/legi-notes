import React from 'react'
import { connect } from 'react-redux'
import BillItem from './BillItem'

const BillList = ({ bills, onBillSelect }) => {
    const renderedList = bills.map(bill => {
        return (
            <BillItem
                key={bill.bill_id} 
                bill={bill}
                onBillSelect={onBillSelect}
            />
        )
    })
    return <div className="ui three stackable cards">{renderedList}</div>
}

const mapStateToProps = state => {
    return { bills: state.bills }
}

export default connect(mapStateToProps)(BillList)