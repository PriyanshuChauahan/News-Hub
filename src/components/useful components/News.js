import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:21,
   apiKey:"71330bfc5ed841dbaefa06ea1d4cdfac" ,
   category:'general'

  }
  static propTypes={
    country: PropTypes.string,
    pageSize:PropTypes.number,
    apiKey: PropTypes.string,
    category: PropTypes.string,

  };
   
    constructor()
    {
        super();
       
        this.state={
            articles:[],
            loading:false,
            page:1,
            totalpage:1
               
        }
        
    }
    async fetching_news(page)
    {
        const url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&page=${page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data=await fetch(url);
        let parseData=await data.json();
      
        if(page===1)
        {
            this.setState(
                {
                    totalpage: Math.ceil(parseData.totalResults/this.props.pageSize)
                }
            )

        }
        this.setState({articles : parseData.articles,
            page:page,
            loading:false
    })

    }
   async componentDidMount()
    {
       
       await this.fetching_news(this.state.page)
       
    }
    
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>NewsMonkey - Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles && this.state.articles.map((element)=>{
          return   <div className="col-md-4"  key={element.url}>
            

        <NewsItem key={element.url} title={element.title!=null? element.title.length>39? element.title.slice(0,39)+"...":element.title : "Please Click  on Link Below to Know More"} description={element.description!=null? element.description.length>78? element.description.slice(0,78)+"...":element.description : "Please Click  on Link Below to Know More"} imgurl={element.urlToImage!=null? element.urlToImage:"https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=1024x1024&w=is&k=20&c=S9FBe3KUvooZHZktJzr8Nt94wtg56BQTQiqAz8zUK8M="} newsurl={element.url}
        date={element.publishedAt} author={element.author} source={element.source["name"]}/>
            </div>
          })}
            

        </div>
        <div className="container d-flex justify-content-between my-4">
        <button disabled={this.state.page<=1} type="button" onClick={async ()=>{
        await this.fetching_news(this.state.page-1)
  }} className="btn btn-dark">&larr; Previous</button><button disabled={this.state.page>=this.state.totalpage} type="button"className="btn btn-dark" onClick={async ()=>{
         await this.fetching_news(this.state.page+1)
    }}>Next &rarr;</button>
        </div>
       
      </div>
    )
  }
}
