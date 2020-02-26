import React from 'react'
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

export default BillList