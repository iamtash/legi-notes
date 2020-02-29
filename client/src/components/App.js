import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import SearchBar from './SearchBar'
import BillDetail from './bills/BillDetail'
import BillList from './bills/BillList'
import propublica from '../apis/propublica.js'

class App extends React.Component {
    state = { 
        bills: [],
        selectedBill: {},
        modalOpen: false
    }

    componentDidMount() {
        this.onTermSubmit('tax')
    }

    onTermSubmit = async term => {
        const response = await propublica.get('/search.json', {
            params: {
                query: term
            }
        })
        
        this.setState({ 
            bills: response.data.results[0].bills
        })
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
                    <BillList bills={this.state.bills} onBillSelect={this.onBillSelect} />
                </BrowserRouter>
            </div>
        )
    }
}

export default App