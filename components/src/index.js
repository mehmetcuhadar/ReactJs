import React from 'react';
import ReactDOM from "react-dom";
import CommentDetail from './CommentDetail';
import ApprovalCard from "./ApprovalCard";
import faker from "faker";
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning !!!</h4>
                     Are you sure to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Mete" timeAgo="Today at 4:45pm" comment="Nice job" profImage={faker.image.image()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 2:45pm" comment="Good job" profImage={faker.image.image()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Musa" timeAgo="Today at 1:45pm" comment="Fucked job" profImage={faker.image.image()}/>   
            </ApprovalCard>
           
            
              
        </div>
    );

};

ReactDOM.render(<App/>,document.querySelector('#root'));
