import React from "react";

class IntroForm extends React.Component {
    state = {
        name: "",
        errorMessage: this.MESSAGES.retardedHuman
    }

    MESSAGES = {
        retardedHuman: "You are so retarded you can't enter a proper name",
    }

    onSubmit = () => {
        this.props.updateName(this.state.name);
    }

    nameBox = () => {
        return <input name="name"/>
    }

    submitButton = () => {
        return <div className="submitButton">Submit</div>
    }

    errorMessage = () => {
        return <div className="errorMessage">{this.state.errorMessage}</div>
    }

    render = () => {
        return <div className="introForm">
            <this.nameBox />
            <this.submitButton />
            <this.errorMessage />
        </div>
    }
}

export default IntroForm;
