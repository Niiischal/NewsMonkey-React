import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  constructor(){
    super()
    this.state = {
      articles: [],
      loading: false,
      page: 1,

    }

  }

  async componentDidMount(){
    let url= "https://newsapi.org/v2/top-headlines?country=us&apiKey=90c71cea048a4c9f9714415dd37eb9cc&pageSize=18"
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }
  handlePreviousClick = async ()=>{
    let url= `https://newsapi.org/v2/top-headlines?country=us&apiKey=90c71cea048a4c9f9714415dd37eb9cc&page=${this.state.page - 1}&pageSize=18`
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState(
      {
        page: this.state.page - 1,
        articles: parsedData.articles
      }
    )  
  }
  handleNextClick = async()=>{
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
    let url= `https://newsapi.org/v2/top-headlines?country=us&apiKey=90c71cea048a4c9f9714415dd37eb9cc&page=${this.state.page + 1}&pageSize=18`
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState(
      {
        page: this.state.page + 1,
        articles: parsedData.articles
      }
    )
  }
}
  render() {
    return (
      <div className='container my-3'>
        <h1>NewsMonkey- Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                    <NewsItems title={element.title?.slice(0,63)} description={element.description?.slice(0,78)}  imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&laquo; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
        </div>
      </div>
    )
  }
}

export default News
