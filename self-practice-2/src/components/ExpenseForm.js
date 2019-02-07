import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : ''
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            description: this.state.description
        })
    };

    render(){
        return(
            <div>
                <form onSubmit = {this.onSubmit}>
                    <input
                        type = "text"
                        placeholder = "Description"
                        value={this.state.description}
                        onChange = {this.onDescriptionChange}
                    />
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}