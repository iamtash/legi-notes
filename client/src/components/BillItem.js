import './BillItem.css'
import React from 'react'

const BillItem = ({ bill, onBillSelect }) => {
    const { number, short_title, sponsor_title, sponsor_name, sponsor_party, sponsor_state } = bill 

    return (
        <div onClick={() => onBillSelect(bill)} className="ui raised card bill-item">
            <div className="content">
                <div className="header">
                    {number}
                </div>
                <div className="meta">
                    {`${sponsor_title} ${sponsor_name} [${sponsor_party}-${sponsor_state}]`}
                </div>
            </div>
            <div className="content">
                <div className="description">
                    {short_title}
                </div>
            </div>
            <div className="ui bottom attached button">
                <i className="info icon"></i>
                Expand
            </div>
        </div>
    )
}

export default BillItem