import newsImage from '../../assets/images/news-pic.jpg';
import React from "react";


const NewsInfo = ({article}) => {

    return (
        <div key={article.id} className = "News-Info">
            <h2><a href={article.webUrl}>
                {article.webTitle}
            </a>
            </h2>
            <img src={newsImage} style = {{width:'500px',height:'500px'}} alt="" />
            <p>{article.webPublicationDate.split('T')[0]}</p>
            <p id='Date-Info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minus, reprehenderit voluptas vel adipisci beatae modi architecto quae aspernatur consectetur quo atque ea quos deserunt est illo. Totam, voluptatum cumque.</p>
        </div>
    )


}


export default NewsInfo;