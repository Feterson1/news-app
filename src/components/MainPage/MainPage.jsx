import React, { useEffect,useState } from 'react';
import '../../App.css';
import { getArticlesByWord } from '../../api';
import NewsInfo from '../NewsInfo/NewsInfo';



const MainPage = (props) => {

    const [articles, setArticles] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const [searchActive,setSearchActive] = useState(false);


  useEffect(() => {

    getData('');



  }, []);

  useEffect(()=>{
    if(searchWord === ''){
      setSearchActive(false);
    }
      

  },[searchWord])



  const getData = async (word) => {
    const dataByWord = await getArticlesByWord(word);
    setArticles(dataByWord.data.response.results);
    
  }

  const inputHandler = (e) => {
    if(e.target.value !== null){
      setSearchWord(e.target.value);
      
    }else{
      setSearchWord(null);
      
    }
    
  }
  const buttonHandler = (e) => {
    if(searchWord !== ''){
      getData(searchWord);
      setSearchActive(true);

    }else{
      setSearchActive(false);
    }
  }
  const searchFunc = (article) =>{

    if(searchActive === true){
      return <NewsInfo article={article} isSearchPage = {true} searchWord = {searchWord}/>
    }else{
      return null;
    }
  }





    return(
        <div>
        <input type="text" value={searchWord} onChange={inputHandler} />
        <button onClick={buttonHandler}>Search</button>

       
        {articles.map(article => {
          return (searchFunc(article))
        })}

        </div>

    )
}

export default MainPage;