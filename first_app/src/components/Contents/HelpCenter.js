import React from "react";
import Header from '../Header/Header';
import Accordion from "./Accordion";
const items = [
    {
        title: 'Why do you need help ?',
        content: 'I think you do not'
    },
    {
        title: 'Why use this website',
        content: 'Because it is all-in-one'
    },
    {
        title: 'How do you pay for Cinema?',
        content: 'You can use GOOGLE PAY'
    },

]

class HelpCenter extends React.Component {


    render() {
        return(
            <div>
                <Header></Header>
                <div>
                    <Accordion items={items}></Accordion>   
                </div>
            </div>
        );
    }
}



export default HelpCenter;