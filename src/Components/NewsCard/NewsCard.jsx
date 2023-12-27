import { Link } from 'react-router-dom'

export const NewsCard = (noti) => {

    console.log(noti);

    const imgNewsPath = `/assets/${noti.author}.svg`;

    return (
        <div className="card" style="width: 18rem;">
            <img src={ imgNewsPath } className="card-img-top" alt="" />
                <div className="card-body">
                    <h4 className="card-title">Titulo: { noti.title }</h4>
                    <p className="card-text"> Fuente:{ noti.author }</p>
                    <small className='card-text'>Fecha de publicación: {noti.publishedAt}</small>
                    <Link to={ noti.url } className="btn btn-primary">Ir a la noticia</Link>
                </div>
        </div>
    )
}