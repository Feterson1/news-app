import React from "react";
import { getArticleByTag } from "../../api";


const Wrapper = (props) => {


    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const getData = async (page = '1') => {

        const data = await getArticleByTag(props.apiRequest, page);
        console.log(data)
        props.setArticles(data.data.response.results);

    }

    const clickHandler = (event) => getData(event.target.name);



    return (
        <div className="Wrapper">
            {props.children}
            <div className="paginator">
            {pages.map((page, index) => {
                return (
                   
                        <button className="btnPaginator" key={index} name={page} onClick={clickHandler}>{page}</button>
                    
                )

            })}
            </div>

        </div>
    )

}

export default Wrapper;