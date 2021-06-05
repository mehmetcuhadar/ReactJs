import React from "react";
import LanguageContext from '../contexts/LanguageContext';


class LanguageSelector extends React.Component{
    static contextType= LanguageContext;
    render() {
        return (
            <div>
                Select a language:
            <i
                className="flag us"
                onClick={() => this.context.onlanguagechange('english')}
            />
            <i
                className="flag nl"
                onClick={() => this.context.onlanguagechange('dutch')}
            />
            </div>
        );
    }
}

export default LanguageSelector;