import React from 'react';
import imagenFondo from '../assets/images/DiscodurointernoSeagateSkyHawk1TB.jpg';

function LastMovieInDb(){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto visto</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Ultimo produto visto "/>
                    </div>
                    <p>ARTICULOS: DISCOS RIGIDOS 2,5¨ 160 GB -

Marca: Samsung -WD -Toshiba - (Segun Stock)

PARA USAR EN NETBOOKS, NOTEBOOKS, PC, All in one, Macbook - DVR
PLAY STATION 3 y 4 todos los modelos (No incluye soporte)

Grosor: 9,5 mm</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View  detail</a>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
