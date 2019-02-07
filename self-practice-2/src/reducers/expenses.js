const expenseReducerDefaultState = [];

export default (state=expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        default:
            return state;
    }
}