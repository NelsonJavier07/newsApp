import { useEffect, useState } from 'react';
// import { getNews } from '../../../utils/httpClient.js';
import axios from 'axios';

import '../NewsGrid/NewsGrid.css';
import { NewsCard } from '../NewsCard/NewsCard.jsx';

export const NewsGrid = () => {
    
    const url = 'https://newsapi.org/v2/';
    const urlPath = 'top-headlines?' +
        'country=ar&' +
        'apiKey=34bb8890a09f4be9be849b19707857f3';

        const [news, setNews] = useState ([]);
        
        const infoNews = () => {
        axios.get(url + urlPath)
        .then((res) => {setNews(res.data.articles);
            console.log(res.data.articles);
        })
        .catch((error) => console.log(error))
    }

    useEffect(() => {
        infoNews();
        
    }, [])

    

    return(
        <ul className='notiContainer list-group'>
            <li className='list-group-item'>
                {
                    news.map((noti) => { <NewsCard key={noti.source.id} noti={{noti}}  />})
                }
            </li>
        </ul>
    )
}

//

 // <div className="container text-center">
            //     <div className="row">
            //     <div className="col-8">
            //              { news.map(function(newItem) {
            //                 console.log(newItem);
            //              }) }
            //         </div>
            //         <div className="col-4">
                        
            //         </div>
            //     </div>
            // </div>