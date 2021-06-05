import React from 'react';
import {connect} from 'react-redux';
import GoogleAuth from './GoogleAuth';
import {Link} from "react-router-dom";
import FontAwesome from 'react-fontawesome';
import { createBrowserHistory } from "history";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import SearchBar from "./SearchBar";
import movieData from "../../apis/movieData";
import {dataLoad} from "../../actions/index";
const KEY = '53200af1fabb723edbed6a89600e1449';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            contents:null
        }
    };
    activeCheck = (path,link) =>{
        if(path===link){
            return "active";
        }
        return null;
    }

    
    onAuthHeaderChange =(path) => {
        if(this.props.isSignedIn){
            return(
                <React.Fragment>
                        <Link to="/" className={`${this.activeCheck(path,"/")} item`}>
                            <FontAwesome
                                name="home"
                                size="1x"
                            />
                            Home
                        </Link>
                        <Link to="/series" className={`${this.activeCheck(path,"/series")} item`}>
                            <FontAwesome
                                name="film"
                                size="1x"
                            />
                            Series
                        </Link>
                        <Link to="/movie" className={`${this.activeCheck(path,"/movie")} item`}>
                            <FontAwesome
                                name="film"
                                size="1x"
                            />
                            Movie
                        </Link>
                        <Link to="/cinema" className={`${this.activeCheck(path,"/cinema")} item`}>
                            <FontAwesome
                                name="youtube"
                                size="1x"
                            />
                            Cinema 
                        </Link>
                        <SearchBar className="item"></SearchBar>
                        <div className="right menu">
                            <DropdownButton
                                key="success"
                                id={`dropdown-split-variants-success`}
                                variant="success"
                                title="Account"
                            
                            >
                                <Dropdown.Item eventKey="1">
                                   
                                    <Link to="/profile">
                                        <FontAwesome
                                            name="user-circle"
                                            size="1x"
                                        />
                                        Profile
                                    </Link>
                                    
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="2">
                                    <Link to="/help">
                                        <FontAwesome
                                            name="info-circle"
                                            size="1x"
                                        />
                                        Help Center
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="3">
                                    <Link to="/users">
                                        <FontAwesome
                                            name="users"
                                            size="1x"
                                        />
                                        Users
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4">
                                    <Link to="/">
                                        <GoogleAuth></GoogleAuth>
                                    </Link>
                                </Dropdown.Item>
                            </DropdownButton>
                        </div>
                        
                    </React.Fragment>
            );
        }
            return(
                <React.Fragment>
                        <Link to="/" className={`${this.activeCheck(path,"/")} item`}>
                            <FontAwesome
                                name="home"
                                size="1x"
                            />
                            Home
                        </Link>
                        <div className="right menu">
                            <Link to="/users">
                                <GoogleAuth></GoogleAuth>
                            </Link>
                        </div>
                </React.Fragment>
            );
        
    };
    render(){
        const history = createBrowserHistory();
        
        return(       
            <div style={{backgroundColor: "black"}}>
                <div className="ui inverted segment">
                    <div class="ui inverted secondary pointing menu">   
                    {this.onAuthHeaderChange(history.location.pathname)}
                    </div>
                </div>
            </div>
            
        );
    }
};

const mapStateToProps = (state) =>{
    return {isSignedIn:state.auth.isSignedIn};
}


export default connect(mapStateToProps,{dataLoad})(Header);