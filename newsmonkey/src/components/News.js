import PropTypes from 'prop-types';
import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';

export class News extends Component {

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor(){
    super()
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }

  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=90c71cea048a4c9f9714415dd37eb9cc&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false})
  }
  handlePreviousClick = async ()=>{
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=90c71cea048a4c9f9714415dd37eb9cc&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState(
      {
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false
      }
    )  
  }
  handleNextClick = async()=>{
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=90c71cea048a4c9f9714415dd37eb9cc&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState(
      {
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      }
    )
  }
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>NewsMonkey- Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                    <NewsItems title={element.title} description={element.description}  imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&laquo; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
        </div>
      </div>
    )
  }
}

export default News
