import React from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import Header from "./Header/Header";
import Loading from "./Loading";
import FontAwesomeIcon from "react-fontawesome"

class Users extends React.Component {
   
    signedAuth =() => {
        
        if(this.props.isSignedIn){
            return( 
            <div class="ui special cards">
                <div class="card">
                    <div class="blurring dimmable image">
                    
                    <img alt="yes" src={this.props.profile.url}/>
                    </div>
                    <div class="ui content primary button" style={{textAlign:"center"}}>
                    <Link to="/" class="header">{this.props.profile.name}</Link>
                    <FontAwesomeIcon icon="check-square" />
                    </div>
                    
                </div>
                
            </div>
            )
        }
        return(
            <div style={{position:"absolute",top:"40%",left:"40%"}}>
                <Loading></Loading>
            </div>
           
        );

    }
    render() {
        return(
            <div>
                <div style={{display:"none"}}><Header></Header></div>
                <div style={{position:"absolute",top:"20%",left:"40%"}}>
                    {this.signedAuth()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {isSignedIn:state.auth.isSignedIn,profile:state.auth,profileName:state.profile.profileName};
}



export default connect(mapStateToProps)(Users);