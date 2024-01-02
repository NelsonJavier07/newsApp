import { useEffect, useState } from 'react';
import axios from 'axios';

import '../NewsGrid/NewsGrid.css';
import { NewsCard } from '../NewsCard/NewsCard.jsx';
import { v4 as uuidv4 } from 'uuid';

export const NewsGrid = () => {


    
    const url = 'https://newsapi.org/v2/top-headlines?country=ar&apiKey=34bb8890a09f4be9be849b19707857f3'
    
    
        const [news, setNews] = useState ([]);
        
        

    useEffect(() => {

    
        axios.get(url)
        .then((res) => {setNews(res.data.articles);
        console.log(res.data.articles);
        })
        .catch((error) => console.log(error))
    

    }, [])

    

    return(
            <div className='listContainer'>
                {
                    news.map((noti) => { return <NewsCard key={uuidv4()} noti={noti} />})
                }
            </div>
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