import React, { Component } from 'react';

import ChartRow from './ChartRow';

class Chart extends Component {
	constructor() {
		super()
		this.state = {
			movies: []
		}
	}

	async componentDidMount() {
		const response = await fetch("/api/user")
		const data = await response.json()
		//this.setState({ movies: data.data })
		console.log(data)
	}
	render() {
		return (
			<React.Fragment>
				{/*<!-- PRODUCTS LIST -->*/}
				< h1 className="h3 mb-2 text-gray-800" > Todos los usuarios</h1 >

				{/*<!-- DataTales Example -->*/}
				< div className="card shadow mb-4" >
					<div className="card-body">
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
								<thead>
									<tr>
										<th>id</th>
										<th>name</th>
										<th>email</th>
										<th>detail</th>
										
									</tr>
								</thead>
								<tbody>
									{
										this.state.movies.map((user, i) => {
											return <ChartRow {...user} key={user + i} />
										})
									}
								</tbody>
								<tfoot>
									<tr>
										<th>id</th>
										<th>name</th>
										<th>email</th>
										<th>detail</th>
										
									</tr>
								</tfoot>
							</table>
						</div>
					</div>
				</div >
			</React.Fragment >
		)


	}

}


export default Chart;