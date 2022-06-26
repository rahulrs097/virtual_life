import React from "react";
import { CONVERSATIION_CONSTANTS } from "../../constants/ConversationConstants";
import './_styles.scss';

class Colourblock extends React.Component {
    state = {
        colour: this.props.colour,
        randomizer: true
    }

    colours = [
        "blue",
        "red",
        "yellow",
        "green",
        "white",
        "black"
    ]

    componentDidMount = () => {
        this.updateColour();
    }

    updateColour = () => {
        if(!this.state.randomizer) { return; }
        this.setState({
            colour: this.colours[Math.floor(Math.random()*this.colours.length)]
        }, () => {setTimeout(this.updateColour, 500)})
    }

    onClick = () => {
        this.setState({randomizer: false});
        this.props.onClick(this.state.colour, CONVERSATIION_CONSTANTS.CHOOSE_COLOUR);
    }

    render = () => {
        return <div className={"colour-block " + this.state.colour} onClick={this.onClick} />
    }
}

export default Colourblock;
