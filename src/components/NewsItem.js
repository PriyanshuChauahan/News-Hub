import React from 'react'

const  NewsItem =(props)=> {
   
   
    let {title,description,newsurl,imgurl,author,date,source}=props;
    return (
      <div className='my-3'>
       <div className="card" >
  <img src={imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}<span className="badge bg-secondary">New</span></h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-body-secondary"> By {!author? "unknown":author} on  {new Date(date).toLocaleString()} ago</small></p>
    <a href={newsurl} target="_blank" rel="noreferrer noopener" className="btn btn-sm btn-dark">Read More</a>
    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger">
     {source}  
    <span className="visually-hidden"></span>
  </span>
  </div>
</div>
      </div>
    )
  }
export default NewsItem;
