import newsImage from '../../assets/images/news-pic.jpg';
import React from "react";


const NewsInfo = ({article,isSearchPage,searchWord}) => {

    return (
        <div key={article.id} className = "News-Info">

            {isSearchPage 
            ?  <>
            <h2 className='News-Info-Link'>
            <a href={article.webUrl}>
               {article.webTitle}
              </a>
            </h2>
            <img src={newsImage} alt="" />
            <p id='Date-Info'>{article.webPublicationDate.split('T')[0]}</p>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minus, reprehenderit voluptas vel adipisci beatae modi architecto quae aspernatur consectetur quo atque ea quos deserunt est illo. Totam, voluptatum cumque.</p>
           
            </>
            
            
            : <>
            <h2 className='News-Info-Link'><a href={article.webUrl}>
                {article.webTitle}
            </a>
            </h2>
            <img src={newsImage} alt="" />
            <p id='Date-Info'>{article.webPublicationDate.split('T')[0]}</p>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minus, reprehenderit voluptas vel adipisci beatae modi architecto quae aspernatur consectetur quo atque ea quos deserunt est illo. Totam, voluptatum cumque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minus, reprehenderit voluptas vel adipisci beatae modi architecto quae aspernatur consectetur quo atque ea quos deserunt est illo. Totam, voluptatum cumque.</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minus, reprehenderit voluptas vel adipisci beatae modi architecto quae aspernatur consectetur quo atque ea quos deserunt est illo. Totam, voluptatum cumque.
            <hr />
            </>  
            }
        </div>

    )


}


export default NewsInfo;