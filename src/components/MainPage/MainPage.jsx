import React, { useEffect,useState } from 'react';
import '../../App.css';
import { getArticlesByWord } from '../../api';



const MainPage = (props) => {

    const [articles, setArticles] = useState([]);
  const [searchWord, setSearchWord] = useState('');


  useEffect(() => {

    getData('');



  }, []);



  const getData = async (word) => {
    const dataByWord = await getArticlesByWord(word);
    setArticles(dataByWord.data.response.results);
    
  }

  const inputHandler = (e) => {
    setSearchWord(e.target.value);
  }
  const buttonHandler = (e) => {
    getData(searchWord);

  }





    return(
        <div>
        <input type="text" value={searchWord} onChange={inputHandler} />
        <button onClick={buttonHandler}>Search</button>

       
        {articles.map(article => {
          return (
            <p key={article.id}>
              <a href={article.webUrl}>
                {article.webTitle.split(searchWord)[0]}
                <span style={{ backgroundColor: 'Yellow' }}>{searchWord}</span>
                {article.webTitle.split(searchWord)[1]}
              </a>
            </p>

          )
        })}

        </div>

    )
}

export default MainPage;