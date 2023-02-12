import React, {Component} from 'react';

class PhotoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {result} = this.props;
        return (
            <div className={'flex'}>
                {result.map(item => (
                    <div key={item.id} className={'photo_div'}>
                        <img src={item.urls.regular} alt={item.alt_description}/>
                    </div>
                ))}
            </div>
        );
    }
}

export default PhotoList;