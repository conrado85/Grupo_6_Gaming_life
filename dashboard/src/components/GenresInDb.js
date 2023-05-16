import React, { Component } from 'react';
import Genre from './Genre';


class GenresInDb extends Component {
    constructor() {
        super()
        this.state = {
            genres: []
        }
    }

    async componentDidMount() {
        const response = await fetch("/api/products");
        const data = await response.json();
       // this.setState({ genres: data.data });
       console.log(data)
    }

    SecondaryColor() {
        document.querySelector("#card-body").classList.toggle("bg-secondary")
    }

    render() {
        return (
            <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 onMouseOver={this.SecondaryColor} className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
                        </div>
                        <div id="card-body" className="card-body">
                            <div className="row">
                                {
                                    this.state.genres.map((genre, index) => {
                                        return <Genre  {...genre} key={genre + index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
export default GenresInDb;