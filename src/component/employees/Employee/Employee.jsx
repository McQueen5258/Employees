import React, { Component } from 'react';
import './Employee.css';


export default class Employee extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="employee">
                <img src={this.props.item.profile_image} alt="" />
                <div>{this.props.item.id}</div>
                <div>{this.props.item.employee_name}</div>
                <div>{this.props.item.employee_age}</div>
                <div>{this.props.item.employee_salary}</div>
            </div>
        );
    }
}
