import React from 'react';
import MyCarousel from "./MyCarousel";
import MyFooter from './MyFooter';
import Header from "../Header/Header";
import Loading from '../Loading';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import movieData from "../../apis/movieData";

const KEY = '53200af1fabb723edbed6a89600e1449';

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state ={filmData:null};
    }

    componentDidMount(){
        this.onTermSubmit();
    }

    onTermSubmit = async () =>{    
        const response =await movieData.get(`/movie/popular?api_key=${KEY}&language=en-US`);
        this.setState({ filmData: response.data.results });

    };

    getImage = (path) =>{
        
        const imageSrc= `https://image.tmdb.org/t/p/w500/${path}`;
        return imageSrc;
    }

    signedAuth =(value) => {
        if(value===null){
            return (
                <div style={{position:"absolute" ,top:"40%",left:"40%"}}>
                    <Loading></Loading>
                </div>
            );
        }else if(value){
            return (
                <div class="ui five doubling stackable cards">
                    {this.filmRender(this.state.filmData)}
                </div>
            );
        }else{
            return (
                <div>
                    
                    <MyCarousel></MyCarousel>
                    <MyFooter></MyFooter>
                </div>
            );
        }
        

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
                                <Link to={`/movie/watch/${film.id}`} className="ui primary button">
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
                {this.signedAuth(this.props.isSignedIn)}                  
            </div>
        );

    }
}

const mapStateToProps = (state) =>{
    return {isSignedIn:state.auth.isSignedIn};
}

export default connect(mapStateToProps)(Home);