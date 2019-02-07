import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({id,description}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>place for amount&createdAt</p>
    </div>
);

export default ExpenseListItem;