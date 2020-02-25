import React from 'react'
import SearchBar from './SearchBar'
import BillDetail from './BillDetail'
import BillList from './BillList'

class App extends React.Component {
    state = { 
        bills: [],
        selectedBill: null
    }
/*
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
            bills: response.data.items,
            selectedBill: response.data.items[0]
        })
    }
*/

    onBillSelect = bill => {
        this.setState({ selectedBill: bill })
    }
    
    render() {
        return (
            <div className="ui container"> 
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <BillDetail bill={this.state.selectedBill} />
                        </div>
                        <div className="five wide column">
                            <BillList bills={this.state.bills} onBillSelect={this.onBillSelect} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App