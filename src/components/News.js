import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  // const [totalPage,setTotalPage]=useState(1)
  const [totalResults,setTotalResults]=useState(0)
  
  
   
  const Fetching_News= async (page)=>
    {
      props.setProgress(0);
     
      const url=`https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      
        let data=await fetch(url);
        
        props.setProgress(30);
        let parseData=await data.json();
        props.setProgress(70);
      
        if(page===1)
        {
          // setTotalPage(Math.ceil(parseData.totalResults/props.pageSize));
          setTotalResults(parseData.totalResults);
          setLoading(false)
        }
        if(parseData.status!=="error")
        {
          setPage(page);
          setArticles(articles.concat(parseData.articles));
        
       
        props.setProgress(100);
       }
    }
      useEffect( ()=>{

         Fetching_News(page)
         // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
  
    const fetchMoreData = async () => {
     
       await Fetching_News(page+1);
    };
    
  
    return (
      <>
        <h1 className='text-center'>News Hub - Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines</h1>
        { loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles!==null? articles.length:0}
          next={fetchMoreData}
          hasMore={( articles!==null? articles.length:0)<= totalResults}
          
          loader={<Spinner/>}
        >
          <div className="container">

          
        <div className="row">
        {  articles &&  articles.map((element,id)=>{
          return   <div className="col-md-4"  key={id}>
            

        <NewsItem key={element.url} title={element.title!=null? element.title.length>39? element.title.slice(0,39)+"...":element.title : "Please Click  on Link Below to Know More"} description={element.description!=null? element.description.length>78? element.description.slice(0,78)+"...":element.description : "Please Click  on Link Below to Know More"} imgurl={element.urlToImage!=null? element.urlToImage:"https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=1024x1024&w=is&k=20&c=S9FBe3KUvooZHZktJzr8Nt94wtg56BQTQiqAz8zUK8M="} newsurl={element.url}
        date={element.publishedAt} author={element.author} source={element.source["name"]}/>
            </div>
          })}
          </div>
            

        </div>
        </InfiniteScroll>
       
     </>
    )
  }


News.defaultProps={
  country:'in',
  pageSize:21,
 category:'general'

}
News.propTypes={
  country: PropTypes.string,
  pageSize:PropTypes.number,
  apiKey: PropTypes.string,
  category: PropTypes.string,

};
export default News;
