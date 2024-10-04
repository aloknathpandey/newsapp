import React, { Component } from 'react'

export class NewsItem extends Component {
   
    render() {
        let {title , description, imageUrl, url} = this.props;
        return (
            <div>
                <div className="card mt-2 mb-2" style={{width:"18rem"}}>
                    <img src={imageUrl} className="image card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}...</p>
                            <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem