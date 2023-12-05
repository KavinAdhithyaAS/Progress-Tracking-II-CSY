import React, { Component } from 'react'
export default class classComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }
    handleDecrement = () => {
        this.setState(prevState => {
            if (prevState.count > 0) {
            return {
                count: prevState.count - 1
            }
        } else {
            return{
            count: 0
        }
        }
        });
    }

    handleIncrement = () => {
        this.setState(prevState => ({count: prevState.count + 1}));
    }
}