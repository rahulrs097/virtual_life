import React from "react";
import './_styles.scss';

class Conversation extends React.Component {
    render = () => {
        return <div className="conversation">
            {"> " + this.props.message} 
        </div>
    }
}

export default Conversation;
