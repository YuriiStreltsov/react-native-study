import { createContext, useEffect, useReducer } from 'react';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 40.32,
        date: new Date('2022-02-24'),
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 12.99,
        date: new Date('2022-09-01'),
    },
    {
        id: 'e3',
        description: 'Some bananas',
        amount: 0.99,
        date: new Date('2023-03-05'),
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 99.95,
        date: new Date('2023-04-12'),
    },
    {
        id: 'e5',
        description: 'A car',
        amount: 10000.0,
        date: new Date('2023-05-25'),
    },
];

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => {},
    updateExpense: (id, { description, amount, date }) => {},
    deleteExpense: (id) => {},
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id }, ...state];
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
            );
            const updatableExpense = state[updatableExpenseIndex];
            const updateItem = { ...updatableExpense, ...action.payload.data };
            const updatedExpense = [...state];
            updatedExpense[updatableExpenseIndex] = updateItem;
            return updatedExpense;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        default:
            state;
    }
}

function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(
        expensesReducer,
        DUMMY_EXPENSES
    );

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData });
    }

    function updateExpense(expenseId, expenseData) {
        dispatch({
            type: 'UPDATE',
            payload: { id: expenseId, data: expenseData },
        });
    }

    function deleteExpense(expenseId) {
        dispatch({ type: 'DELETE', payload: expenseId });
    }

    const value = {
        expenses: expensesState,
        addExpense,
        updateExpense,
        deleteExpense,
    };
    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    );
}

export default ExpensesContextProvider;
