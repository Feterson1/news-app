
import  React, { useEffect, useState } from 'react';
import './App.css';
import { getArticlesByWord } from './api';
// const src = `https://content.guardianapis.com/search?page=3&tag=environment/recycling&api-key=${API_KEY}`;


// // axios.get(src).then(data => {
// //     console.log(data);
// //     });



function App() {


  const [articles,setArticles] = useState([]);


  useEffect(()=>{

    getData('debates');

    console.log(articles);

  },[]);



  const getData = async (word) =>{
    const data = await getArticlesByWord(word);
    setArticles(data.data.response.results);
  }

  
 

  return (
    <div className="App">
      {articles.map(article => {
        return (
          <p key={article.id}><a href={article.webUrl}>{article.webTitle}</a></p>
        )
      })}
     
    
    </div>
  );
}

export default App;
