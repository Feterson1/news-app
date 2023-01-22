
import  React, { useEffect, useState } from 'react';
import './App.css';
import { getArticlesByWord } from './api';
// const src = `https://content.guardianapis.com/search?page=3&tag=environment/recycling&api-key=${API_KEY}`;


// // axios.get(src).then(data => {
// //     console.log(data);
// //     });



function App() {


  const [articles,setArticles] = useState([]);
  const [searchWord,setSearchWord] = useState('');


  useEffect(()=>{

    getData('debates');

    console.log(articles);

  },[]);



  const getData = async (word) =>{
    const data = await getArticlesByWord(word);
    setArticles(data.data.response.results);
  }

  const inputHandler = (e) => {
    setSearchWord(e.target.value);
  }
  const buttonHandler = (e) =>{
    getData(searchWord);
   
  }

  
 

  return (
    <div className="App">
      <input type="text" value={searchWord} onChange={inputHandler}/>
      <button onClick={buttonHandler}>Search</button>
      {articles.map(article => {
        return (
          <p key={article.id}>
            <a href={article.webUrl}>
              {article.webTitle.split(searchWord)[0]}
            <span style={{backgroundColor: 'Yellow'}}>{searchWord}</span>
            {article.webTitle.split(searchWord)[1]}
          </a>
          </p>

        )
      })}
     
    
    </div>
  );
}

export default App;
