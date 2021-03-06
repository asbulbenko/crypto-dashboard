import axios from "axios";
import {useEffect, useState} from "react";

const NewsFeed = () => {

    const [articles, setArticles] = useState(null)

    useEffect( () => {
        const options = {
            method: 'GET',
            url: 'http://localhost:8000/news'
        }

        axios.request(options).then( (response) => {
            console.log(response.data)
            setArticles(response.data)

        }).catch( (error) => {
            console.error(error)
        })
    }, [])

    const first7Articles = articles?.slice(0,7)

    return (
        <div className={"news-feed"}>
            <h2>News Feed</h2>

            {first7Articles?.map((article, _index) => (
                <div key={_index}>
                    <a href={article.url}><p>{article.title}</p></a>
                </div>))}
        </div>
    )
}

export default NewsFeed