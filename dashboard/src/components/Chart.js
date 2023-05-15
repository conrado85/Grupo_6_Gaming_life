import React from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        name: ' Disco rigido',
        description: 'disco de estado solido de 128gigas',
        price: '200',
        Category: '2'
      
    },
    {
        name: 'Placa de video',
        description: 'placade video  de 128',
        price: '270',
        Category: '1'
      
    },
    
]


function Chart (){
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>description</th>
                                <th>price</th>
                                <th>category</th>
                                
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>name</th>
                                <th>description</th>
                                <th>price</th>
                                <th>category</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;