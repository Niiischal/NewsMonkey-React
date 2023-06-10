import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItems from './NewsItems';
import Spinner from './Spinner';

const News=(props) => {
  const[articles,setArticles ]=useState([])
  const[loading,setLoading ]=useState(true)
  const[page,setPage ]=useState(1)
  const[totalResults,setTotalResults ]=useState(0)



  const capitalizeFirstLetter =(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  const updateNews=async()=>{ // function to fetch content from the api and update as per requirement
    props.setProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);// fetching the url
    props.setProgress(30);
    let parsedData = await data.json()// waiting for it to change into json
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() =>{
      document.title=`NewsMonkey - ${capitalizeFirstLetter(props.category)} `
      updateNews();
  },[])

  // You can use this function if you want to include previous button
  // const handlePreviousClick = async ()=>{
  //   setPage(page-1)
  //   updateNews()
  //   }

  // You can use this function if you want to include next button
  // const handleNextClick = async ()=>{
  //   setPage(page +1 )
  //   updateNews()
  //   }
  

  // async componentDidMount(){  // it is invoked after all the elements of the page have been rendered correctly
  //   // const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}`;
  //   // this.setState({loading:true})
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json()
  //   // this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false})
  //   this.updateNews();
  // }

  // handlePreviousClick = async ()=>{
  // //   let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
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
  // //   if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize))){
  // //   let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
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

  
  const fetchMoreData = async () => {
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);// fetching the url
    let parsedData = await data.json()// waiting for it to change into json
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

    return (
      <>
        <h1 className='text-center' style={{marginTop:'90px'}}>NewsMonkey- Top Headlines : {capitalizeFirstLetter(props.category)} </h1>
        {/* By using loading spinner */}

        {/* {this.state.loading && <Spinner/>} */}
        {/* <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                    <NewsItems title={element.title} description={element.description}  imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
            </div>
        })} */} 
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
        {articles.map((element)=>{
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
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
        </div> */}
      </>
    )
}

export default News

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
