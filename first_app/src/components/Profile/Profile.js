import React from "react";
import {connect} from 'react-redux';
import Header from '../Header/Header';

class Profile extends React.Component {
    onAuthHeaderChange =() => {
        if(this.props.isSignedIn){
            return(
                
                <React.Fragment>
                    
                </React.Fragment>
                
            );
        }
            return(
                <React.Fragment>
                    
                </React.Fragment>
            );
        
    };
    render(){
        return(
            <div>
                <Header></Header>
                { this.onAuthHeaderChange()}
           </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {isSignedIn:state.auth.isSignedIn};
}

export default connect(mapStateToProps)(Profile);