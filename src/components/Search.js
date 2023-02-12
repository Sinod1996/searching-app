import React, {Component} from 'react';
class Search extends Component {
    render() {
        const {value} = this.props;
        return (
            <form onSubmit={this.props.onSubmit} className={'form'}>
                <input
                    type={'text'}
                    value={value}
                    placeholder={'Search...'}
                    onChange={this.props.onChange}
                />
                <button>Search</button>
            </form>
        );
    }
}

export default Search;