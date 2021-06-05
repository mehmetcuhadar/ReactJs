import React from 'react';
import Home from './components/Home/Home';
import {Router,Route,Switch} from 'react-router-dom';
import history from "./history";
import Users from "./components/Users";
import Profile from "./components/Profile/Profile";
import Movie from './components/Contents/Movie';
import Cinema from './components/Contents/Cinema';
import Series from './components/Contents/Series';
import HelpCenter from './components/Contents/HelpCenter';
import Watch from "./components/Player/Watch";

class App extends React.Component{

    

    render(){
        return (
           
            
            <Router history={history}>
                
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/users" exact component={Users}></Route>
                        <Route path="/profile" exact component={Profile}></Route>
                        <Route path="/series" exact component={Series}></Route>
                        <Route path="/movie" exact component={Movie}></Route>
                        <Route path="/cinema" exact component={Cinema}></Route>
                        <Route path="/help" exact component={HelpCenter}></Route>
                        <Route path="/:type/watch/:id" exact component={Watch}></Route>                        
                    </Switch>
                
            
            </Router>
      
        )
    }

}


export default App;



