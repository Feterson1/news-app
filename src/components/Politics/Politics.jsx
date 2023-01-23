import React from "react";
import { useEffect, useState } from "react";
import { getArticleByTag } from "../../api";
import NewsInfo from "../NewsInfo/NewsInfo";



const Politics = (props) => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {

        const data = await getArticleByTag('politics/politics');
        console.log(data)
        setArticles(data.data.response.results);

    }


    return (
        <div>
            <h1>Politics</h1>
            {articles.map(article => {
                return <NewsInfo article ={article}/>
            })}

        </div>
    )

}


export default Politics;