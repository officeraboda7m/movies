import React, { Component } from 'react';



class Actor extends Component {
    render() {
        return (
            <div>
                <p>Name: {this.prob.actor.name}</p>
                <p>Role: {this.prob.actor.role}</p>
            </div>
        );
    }
}


export default Actor;