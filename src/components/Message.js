import {Component} from "react";

/* The Message class extends the Component class, and it renders a h1 tag. */
class Message extends Component{
    /**
     * The render() function returns a React element that describes how a component should appear on
     * the screen
     * @returns The return statement is returning a JSX expression.
     */
    render(){
        return <h1>Message: {this.props.content}</h1>
    }
}

export default Message;