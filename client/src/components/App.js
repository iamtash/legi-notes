import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './Header'
import SearchBar from './SearchBar'
import BillDetail from './bills/BillDetail'
import BillList from './bills/BillList'
import CaseList from './cases/CaseList'
import NewBookmark from './containers/NewBookmark'
import { getBills } from '../actions'
import { selectBill } from '../actions'

class App extends React.Component {
    state = { modalOpen: false }

    componentDidMount() {
        this.onTermSubmit('')
    }

    onTermSubmit = term => {
        this.props.getBills(term)
    }

    onBillSelect = bill => {
        this.props.selectBill(bill)
        this.setState({ modalOpen: true })
    }

    onModalClose = () => {
        this.setState({ modalOpen: false })
    }
    
    render() {
        return (
            <div className="ui container"> 
                <BrowserRouter>
                    <Header />
                    <Route path="/" exact>
                        <SearchBar onFormSubmit={this.onTermSubmit} />
                        <BillDetail bill={this.props.selectedBill} open={this.state.modalOpen} onModalClose={this.onModalClose} />
                        <BillList onBillSelect={this.onBillSelect} />
                    </Route>
                    <Route path="/bookmarks" exact component={CaseList} />
                    <Route path="/bookmarks/new" exact component={NewBookmark} />
                </BrowserRouter>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { selectedBill: state.selectedBill }
}

export default connect(mapStateToProps, { getBills, selectBill })(App)