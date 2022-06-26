import React from "react";
import IntroForm from "../IntroForm";
import Conversation from "../Conversation";
import Colourblock from "../Colourblock";
import { STATE_CONSTANTS } from "../../constants/StateConstants";
import { CONVERSATIION_CONSTANTS } from "../../constants/ConversationConstants";
import "./_styles.scss"

class Application extends React.Component {
    state = {
        name: "",
        colour: "",
        message: CONVERSATIION_CONSTANTS.ENTER_NAME    }

    updateName = (name, message) => {
        this.setState({name: name, message: message});
    }

    updateColour = (colour, message) => {
        this.setState({colour: colour, message: message});
    }

    updateConversation = (message) => {
        this.setState({message: message})
    }

    getState = () => {
        if(!this.state.name || this.state.name === "") {
            return STATE_CONSTANTS.GET_NAME;
        }
        if(!this.state.colour || this.state.colour === "") {
            return STATE_CONSTANTS.GET_COLOUR;
        }
        return STATE_CONSTANTS.CONFUSION;
    }

    getIntroForm = () => {
        return <IntroForm updateName={this.updateName} updateConversation={this.updateConversation}/>
    }

    getColourBlocks = () => {
        return <Colourblock colour={"blue"} onClick={this.updateColour}/>
    }

    getConversation = () => {
        const message = this.getState() === STATE_CONSTANTS.CONFUSION ? CONVERSATIION_CONSTANTS.CONFUSION : this.state.message;
        return <Conversation message={message}/>
    }

    getStateComponent = () => {
        switch(this.getState()) {
            case STATE_CONSTANTS.GET_NAME:
                return this.getIntroForm();
            case STATE_CONSTANTS.GET_COLOUR:
                return <this.getColourBlocks />;
            default:
                return null;
        }

    }

    render = () => {
        return <div className="application">
            <this.getConversation />
            <this.getStateComponent />
        </div>
    }
}

export default Application;
