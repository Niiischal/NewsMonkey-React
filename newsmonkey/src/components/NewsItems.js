import React, { Component } from 'react';

export class NewsItems extends Component {
  render() {
    let {title , description, imageUrl, newsUrl, author, publishedAt } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={!imageUrl?"https://i.ytimg.com/vi/Jvpt-3VaIH0/maxresdefault.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-body-secondary">By: {!author?"Unknown" :author} on {new Date(publishedAt).toGMTString()}</small></p>
              <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
            </div>
       </div>
      </div>
    )
  }
}

export default NewsItems
