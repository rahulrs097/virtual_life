import React from "react";
import {LOGIN_CONSTANTS} from '../../constants/LoginConstants';
import "./_styles.scss"

class IntroForm extends React.Component {
    state = {
        name: ""
    }

    onSubmit = () => {
        this.isNameValid() && this.props.updateName(this.state.name, LOGIN_CONSTANTS.LOGGED_IN_MESSAGE);
    }

    updateName = (event) => {
        this.setState({
            name: event.target.value,
            errorMessage: null
        })
    }

    nameBox = () => {
        return <input className="name-box" name="name" onChange={this.updateName}/>
    }

    isNameValid = () => {
        if(this.state.name === null || this.state.name === "") {
            this.props.updateConversation(LOGIN_CONSTANTS.NO_NAME_MESSAGE);
        } else if(/\s/.test(this.state.name)) {
            this.props.updateConversation(LOGIN_CONSTANTS.NO_SPACES_MESSAGE);
        } else if(/\W/.test(this.state.name)) {
            this.props.updateConversation(LOGIN_CONSTANTS.SPECIAL_CHARACTERS_MESSAGE);
        } else if(/^\d+$/.test(this.state.name)) {
            parseInt(this.state.name) > 50 ? this.props.updateConversation(LOGIN_CONSTANTS.YO_SLUT_MESSAGE) : this.props.updateConversation(LOGIN_CONSTANTS.LOW_IQ_MESSAGE);
        } else {
            return true;
        }
        return false;
    }

    submitButton = () => {
        return <div className="submit-button" onClick={this.onSubmit}>Submit</div>
    }

    render = () => {
        return <div className="intro-form">
            <this.nameBox />
            <this.submitButton />
        </div>
    }
}

export default IntroForm;
