import React from "react";
import IntroForm from "../IntroForm";
import Conversation from "../Conversation";
import "./_styles.scss"

class Application extends React.Component {
    state = {
        name: "",
        message: "Your name please"
    }

    updateName = (name, message) => {
        this.setState({name: name, message: message});
    }

    updateConversation = (message) => {
        this.setState({message: message})
    }

    render = () => {
        return <div className="application">
            <Conversation message={this.state.message}/>
            {this.state.name ? null : <IntroForm updateName={this.updateName} updateConversation={this.updateConversation}/>}
        </div>
    }
}

export default Application;
