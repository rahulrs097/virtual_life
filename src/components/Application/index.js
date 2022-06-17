import React from "react";
import IntroForm from "../IntroForm";

class Application extends React.Component {
    state = {
        name: ""
    }

    updateName = (name) => {
        this.setState({name: name});
    }

    render = () => {
        return <div className="Application">
            I am here
            <IntroForm updateName={this.updateName} />
        </div>
    }
}

function ABC() {
    return <Application/>
}

export default ABC;
