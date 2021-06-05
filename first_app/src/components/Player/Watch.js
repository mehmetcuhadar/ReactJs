import React from "react";
import Header from "../Header/Header";
import { createBrowserHistory } from "history";
import movieData from "../../apis/movieData";
const KEY = '53200af1fabb723edbed6a89600e1449';

class Watch extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:""
        };
    }
    componentDidMount(){
        const history = createBrowserHistory().location.pathname.split("/");
        this.getName(history[1],history[3]);
    }
    getName = async (type,id) =>{
        const isMovie= type==="movie";   
        const response =await movieData.get(`/${ isMovie ? "movie" : "tv"}/${id}?api_key=${KEY}&language=en-US`);
        this.setState({name:isMovie ? response.data.original_title : response.data.original_name});             
    };

    filmRender = (name) =>{
        if(this.state.name===null){
            
            return(
                <div>not yet</div>
            );
        }
        return(
           
                        <React.Fragment >
                            <h1 style={{color:"aqua"}}>{name}</h1>
                        </React.Fragment>
            
        )
        
    }

    render(){
       
        return(
            <div>
                <Header></Header>
                <div className="ui container">
                    <h1 style={{marginTop:"10px",textAlign:"center"}}>{this.filmRender(this.state.name)}</h1>
                </div>

            </div>
        )
    }
}

export default Watch;