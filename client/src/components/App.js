import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './Header'
import SearchBar from './SearchBar'
import BillDetail from './bills/BillDetail'
import BillList from './bills/BillList'
import { getBills } from '../actions'

class App extends React.Component {
    state = { 
        selectedBill: {},
        modalOpen: false
    }

    componentDidMount() {
        this.onTermSubmit('tax')
    }

    onTermSubmit = term => {
        this.props.getBills(term)
    }


    onBillSelect = bill => {
        this.setState({ selectedBill: bill, modalOpen: true })
    }

    onModalClose = () => {
        this.setState({ modalOpen: false })
    }
    
    render() {
        return (
            <div className="ui container"> 
                <BrowserRouter>
                    <Header />
                    <SearchBar onFormSubmit={this.onTermSubmit} />
                    <BillDetail bill={this.state.selectedBill} open={this.state.modalOpen} onModalClose={this.onModalClose} />
                    <BillList onBillSelect={this.onBillSelect} />
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, { getBills })(App)