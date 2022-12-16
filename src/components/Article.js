import React, { useEffect, useState } from 'react'
import SkeletonArticle from '../skeleton/skeletonArticle';
 const Articles = () => {
    const[articles,setArticles]=useState(null)

    useEffect(()=>{
        setTimeout(async() => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            setArticles(data)
        }, 3000);
    })
    return ( 
        <div className="articles">

         <h2>Articles</h2>
         
         { articles &&  articles.map(articles =>(
            <div className='article' key={articles.id}>
                 <h3>{articles.title}</h3>
                 <p>{articles.body}</p>
            </div>
         ))}
         {!articles &&[1,2,3,4,5].map((n)=><SkeletonArticle key={n} theme="dark"/>)}
        </div>
     );
}
 
export default Articles;