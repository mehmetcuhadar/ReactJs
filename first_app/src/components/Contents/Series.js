import React from "react";
import Header from '../Header/Header';
import movieData from "../../apis/movieData";
import {Link} from "react-router-dom";
const KEY = '53200af1fabb723edbed6a89600e1449';

class Series extends React.Component {
    constructor(props) {
        super(props);
        this.state ={filmData:null};
    }

    componentDidMount(){
        this.onTermSubmit();
    }

    onTermSubmit = async () =>{    
        const response =await movieData.get(`/tv/popular?api_key=${KEY}&language=en-US`);
        this.setState({ filmData: response.data.results });
        
    };

    getImage = (path) =>{
        
        const imageSrc= `https://image.tmdb.org/t/p/w500/${path}`;
        return imageSrc;
    }

    filmRender = (films) =>{
        if(films===null){
            
            return(
                <div>not yet</div>
            );
        }
        return(
            films.map((film) =>
                        <React.Fragment >
                            <div class="ui card" key={film.id}>
                                <div class="image">
                                    <img alt="yes" src={this.getImage(film.poster_path)}/>
                                </div>
                                <div class="content">
                                    <div class="header">{film.title}</div>
                                    <div class="description">{film.overview}</div>
                                </div>
                                <Link to={`series/watch/${film.id}`} className="ui primary button">
                                    Watch Now
                                </Link>     
                            </div>
                               
                        </React.Fragment>
            )
        )
        
    }
    render(){
        
        return(
            <div>
                <Header></Header>
                <div className="ui five doubling stackable cards">
                    {this.filmRender(this.state.filmData)}   
                </div>
                             
            </div>
        );

    }

}


export default Series;