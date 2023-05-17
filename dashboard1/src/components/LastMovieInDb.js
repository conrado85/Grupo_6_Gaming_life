import React, { useState, useEffect } from 'react';

function LastMovieInDb() {
  const [lastProduct, setLastProduct] = useState(null);

  useEffect(() => {
    const fetchLastProduct = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        const products = data.products;
        if (products.length > 0) {
          const lastProduct = products[products.length - 1];
          console.log(lastProduct)
          setLastProduct(lastProduct);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchLastProduct();
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto visto</h5>
        </div>
        <div className="card-body">
          {lastProduct ? (
            <>
              <div className="text-center">
                <img
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: '40rem' }}
                  src={lastProduct.imageUrl}
                  alt={lastProduct.name}
                />
              </div>
              <p>{lastProduct.description}</p>
              <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
                Ver detalles del producto
              </a>
            </>
          ) : (
            <p>No se encontraron productos</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LastMovieInDb;