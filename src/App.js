import React, {Component} from 'react';
import Search from "./components/Search";
import ReactPaginate from "react-paginate";
import PhotoList from "./components/PhotoList";
import axios from "axios";

const KEY = `RhH1SHOP0MEBOC9fqGkqGRxf2FbOX11LXvLSTMJ7zO0`;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            result: [],
            pages: '',
        }
    }

    handleSubmit = async (ev) => {
        ev.preventDefault();
        await this.getCurrentPage(1)
    }

    getCurrentPage = async (currentPage, color) => {
        const {value} = this.state;
        const result = await axios.get(`https://api.unsplash.com/search/photos?client_id=${KEY}&query=${value}&page=${currentPage}`)
        console.log(result)
        this.setState({
            result: result.data.results,
            pages: result.data.total_pages
        })
    }
    handleChange = (e) => {
        this.setState({value: e.target.value})
    }

    handleClick = async (data) => {
        await this.getCurrentPage(data.selected + 1)
    }

    render() {
        const {value, pages, result} = this.state;
        return (
            <div>
                <Search
                    onSubmit={this.handleSubmit}
                    value={value}
                    onChange={this.handleChange}
                />
                <PhotoList result={result}/>
                <ReactPaginate
                    pageCount={+pages}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={3}
                    activeClassName={'active'}
                    className={'page'}
                    onPageChange={this.handleClick}
                />
            </div>
        );
    }
}

export default App;