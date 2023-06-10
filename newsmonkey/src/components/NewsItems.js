import React from 'react';

const NewsItems=(props)=> {
    let {title , description, imageUrl, newsUrl, author, publishedAt, source } = props;
    return (
      <div className='my-3'>
        <div className="card">
          <div><span class="badge rounded-pill bg-danger" style={{display:'flex',justifyContent:'flex-end', position:"absolute", right:'0'}}>{source}</span>
          </div>
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

export default NewsItems
