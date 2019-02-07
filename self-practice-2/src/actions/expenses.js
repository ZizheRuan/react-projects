import uuid from 'uuid';

// ADD_EXPENSE
export const addExpense = (
    {
        description = '',
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
    }
});