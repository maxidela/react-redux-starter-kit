import React from 'react';

class Pagination extends React.Component {
    search(index) {
        this.props.paginate(this.props.currentSearch, index);
    }
    render() {
        return (
            <div>
                {[...Array(Math.ceil(this.props.pagesData.get('total') / 12))]
                    .map((page, index) => <a key={index} onClick={() => {this.search(index)}}> {index} </a>)}
            </div>
        );
    }
}

export default Pagination;