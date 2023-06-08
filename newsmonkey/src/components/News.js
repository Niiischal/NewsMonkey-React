import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  constructor(){
    super()
    this.state = {
      articles: [],
      loading: false
    }

  }

  async componentDidMount(){
    let url= "https://newsapi.org/v2/top-headlines?country=us&apiKey=90c71cea048a4c9f9714415dd37eb9cc"
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles})
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
      </div>
    )
  }
}

export default News
