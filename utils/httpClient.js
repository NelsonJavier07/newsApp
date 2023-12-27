import axios from 'axios';


const url = 'https://newsapi.org/v2/';

export const getNews = (urlPath) => {
    axios.get(url + urlPath)
    .then((res) => {res.data.articles
        console.log(res.data.articles)})
    .catch((err) => console.log(err.data))
}

//'https://newsapi.org/v2/everything?'
//