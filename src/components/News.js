import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import PropTypes from 'prop-types'
export class News extends Component {

    static defaultProps={
        country:'us',
        pageSize: 8,
        category:'general'
    }

    static propTypes={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            page: 1,
            articles: [],
            loading: false,
        }
    }

    handlePrevClick = async () => {
        
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=657b4e1de7294b7e86c784395b30b765&page=${this.state.page - 
            1}&pagesize=${this.props.pageSize}`
        let data = await fetch(url);
        this.setState({ loading:true});
        console.log(data);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles });

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading:false

        })
    }

    handleNextClick = async () => {
            console.log("Next")
           
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=657b4e1de7294b7e86c784395b30b765&page=${this.state.page + 
                1}&pagesize=${this.props.pageSize}`
            let data = await fetch(url);
            this.setState({ loading:true});
            let parsedData = await data.json();
            console.log("next p data", parsedData);

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading:false

            })
        
    }

    async componentDidMount(prevProps) {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=657b4e1de7294b7e86c784395b30b765&page=1&pagesize=${this.props.pageSize}`
        let data = await fetch(url);
        this.setState({ loading:true});
        console.log(data);
        let parsedData = await data.json();
        this.setState({ loading:false});
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
    }


    render() {
        return (
           
            <div className='container my-3'>
                 
                <h2 className="text-center">NewsMonkey Top Headlines</h2>
                {this.state.loading && <Loader/>}
                <div className="row mt-2 mb-2">
                    {!this.state.loading && this.state.articles.map((ele) => {
                        return <div className="col-md-4" key={ele.url}>
                            <NewsItem title={ele.title ? ele.title.slice(0, 40) : " "} description={ele.description ?
                             ele.description.slice(0, 90) : " "} imageUrl={ele.urlToImage ? ele.urlToImage 
                                : "https://www.reuters.com/resizer/v2/466BJJQ7PVGY5O53NZ3KL65MHM.png?auth=b9c3bf166c40a6778eb5672993fde7c30a15f48329026674eff92afd8da1d0ca&height=1005&width=1920&quality=80&smart=true"}
                                url={ele.url} />
                        </div>

                    })}
                </div>
                <div className="d-flex justify-content-between container">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark "
                     onClick={this.handlePrevClick}>Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults 
                        / this.props.pageSize)} className="btn btn-dark ms-2" onClick={this.handleNextClick}>Next</button>
                </div>
            </div>
        )
    }
}

export default News