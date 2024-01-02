import { Link } from 'react-router-dom';
import '../NewsCard/NewsCard.css';

export const NewsCard = ({noti}) => {

    

    const imgNewsPath = `src/assets/${noti.author}.svg`;

    console.log(imgNewsPath);

    return (
        <div className="card cardCssLocal">
            <img src={ imgNewsPath } className="card-img-top" alt="" />
                <div className="card-body">
                    <h4 className="card-title">{ noti.title }</h4>
                    <p className="card-text"> Fuente: { noti.author }</p>
                    <small className='card-text'>Fecha de publicación: {noti.publishedAt}</small>
                    <Link to={ noti.url } className="btn btn-primary" target='blank'>Ir a la noticia</Link>
                </div>
        </div>
    )
}