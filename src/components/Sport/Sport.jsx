import React from "react";
import { useEffect, useState } from "react";
import { getArticleByTag } from "../../api";
import NewsInfo from "../NewsInfo/NewsInfo";



const Sport = (props) => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {

        const data = await getArticleByTag('sport/sport');
        setArticles(data.data.response.results);

    }


    return (
        <div className="Wrapper">
            <h1>Sport</h1>
            {articles.map(article => {
               return <NewsInfo article ={article}/>
            })}

        </div>
    )

}


export default Sport;
