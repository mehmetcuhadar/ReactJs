import React from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../../actions';

class GoogleAuth extends React.Component{
    
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'50887068067-n6psbrtbljn18pkpangh2s6i2de6g9j1.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) =>{
       if(isSignedIn){
           var profile = this.auth.currentUser.get().getBasicProfile();
           this.props.signIn(profile.getId(),profile.getGivenName(),profile.getImageUrl());
       }else{
           this.props.signOut();
       }
    }

    onSignInClick = () =>{
        this.auth.signIn();
    };

    onSignOutClick = () =>{
        this.auth.signOut();
    }

    renderAuthButton() {
        if(this.props.isSignedIn===null){
            return null;
        }else if(this.props.isSignedIn){
            return (
                <button onClick={this.onSignOutClick} className="ui black google button">
                    <i className="google icon"></i>
                    Sign Out
                </button>
            );
        }else{
            return (
                <button onClick={this.onSignInClick} className="ui black google button">
                    <i className="google icon"></i>
                    Sign In
                </button>
            );
        }

    }

    render(){
        return(
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {isSignedIn:state.auth.isSignedIn};
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);