import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {

    constructor() {
        super();
        this.state = {
            page: 1,
            articles: [],
            loading: false,
        }
    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=657b4e1de7294b7e86c784395b30b765&page=${this.state.page - 1}&pageSize=20`
        let data = await fetch(url);
        console.log(data);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles });

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles

        })
    }

    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        }
        else {
            console.log("Next")
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=657b4e1de7294b7e86c784395b30b765&page=${this.state.page + 1}&pageSize=20`
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log("next p data", parsedData);

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles

            })
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=657b4e1de7294b7e86c784395b30b765"
        let data = await fetch(url);
        console.log(data);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
    }


    render() {
        return (
            <div className='container my-3'>
                <h2>NewsMonkey Top Headlines</h2>
                <div className="row mt-2 mb-2">
                    {this.state.articles.map((ele) => {
                        return <div className="col-md-4">
                            <NewsItem title={ele.title ? ele.title.slice(0, 40) : " "} description={ele.description ? ele.description.slice(0, 90) : " "} imageUrl={ele.urlToImage ? ele.urlToImage : "https://www.reuters.com/resizer/v2/466BJJQ7PVGY5O53NZ3KL65MHM.png?auth=b9c3bf166c40a6778eb5672993fde7c30a15f48329026674eff92afd8da1d0ca&height=1005&width=1920&quality=80&smart=true"}
                                url={ele.url} />
                        </div>

                    })}
                </div>
                <div className="d-flex justify-content-between container">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark " onClick={this.handlePrevClick}>Previous</button>
                    <button type="button" className="btn btn-dark ms-2" onClick={this.handleNextClick}>Next</button>
                </div>
            </div>
        )
    }
}

export default News