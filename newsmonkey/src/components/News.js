import PropTypes from 'prop-types';
import React, { Component } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItems from './NewsItems';
import Spinner from './Spinner';

export class News extends Component {

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor(props){
    super(props)
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
    document.title=`NewsMonkey - ${this.capitalizeFirstLetter(this.props.category)} `
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  async updateNews(){ // function to fetch content from the api and update as per requirement
    this.props.setProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=90c71cea048a4c9f9714415dd37eb9cc&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);// fetching the url
    this.props.setProgress(30);
    let parsedData = await data.json()// waiting for it to change into json
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false})
    this.props.setProgress(100);
  }

  async componentDidMount(){  // it is invoked after all the elements of the page have been rendered correctly
    // const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=90c71cea048a4c9f9714415dd37eb9cc&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false})
    this.updateNews();
  }

  // handlePreviousClick = async ()=>{
  // //   let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=90c71cea048a4c9f9714415dd37eb9cc&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  // //   let data = await fetch(url);
  // //   let parsedData = await data.json()
  // //   this.setState(
  // //     {
  // //       page: this.state.page - 1,
  // //       articles: parsedData.articles,
  // //       loading: false
  // //     }
  // //   )  
  // this.setState({page: this.state.page -1 })
  // this.updateNews()
  // }
  // handleNextClick = async()=>{
  // //   if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
  // //   let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=90c71cea048a4c9f9714415dd37eb9cc&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  // //   this.setState({loading: true})
  // //   let data = await fetch(url);
  // //   let parsedData = await data.json()
  // //   this.setState(
  // //     {
  // //       page: this.state.page + 1,
  // //       articles: parsedData.articles,
  // //       loading: false
  // //     }
  // //   )
  // // }
  // this.setState({page: this.state.page + 1 })
  // this.updateNews();
  // }

  
  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1})
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=90c71cea048a4c9f9714415dd37eb9cc&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);// fetching the url
    let parsedData = await data.json()// waiting for it to change into json
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
      })
  };

  render() {
    return (
      <>
        <h1 className='text-center'>NewsMonkey- Top Headlines : {this.capitalizeFirstLetter(this.props.category)} </h1>
        {/* By using loading spinner */}

        {/* {this.state.loading && <Spinner/>} */}
        {/* <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                    <NewsItems title={element.title} description={element.description}  imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
            </div>
        })} */} 
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                    <NewsItems title={element.title} description={element.description}  imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
            </div>
        })}
        </div>
        </div>
        </InfiniteScroll>

        {/* required when you use previous and next buttons */}
        {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&laquo; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
        </div> */}
      </>
    )
  }
}

export default News
