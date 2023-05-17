import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let product = {
    title: 'Total de Productos',
    color: 'primary', 
    cuantity: 6,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let user= {
    title:' Total de Usuario', 
    color:'success', 
    cuantity: '2',
    icon:'fa-user-check'
}

/* <!-- Actors quantity --> */

let category = {
    title:'Total de Categorias' ,
    color:'warning',
    cuantity:'3',
    icon:'fa-user-check'
}

let cartProps = [product, user, category];

function ContentRowMovies(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;
