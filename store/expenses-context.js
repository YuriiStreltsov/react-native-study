import { createContext, useEffect, useReducer } from 'react';

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => {},
    setExpenses: (expenses) => {},
    updateExpense: (id, { description, amount, date }) => {},
    deleteExpense: (id) => {},
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [action.payload, ...state];
        case 'SET':
            const inverted = action.payload.reverse();
            return inverted;
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
    const [expensesState, dispatch] = useReducer(expensesReducer, []);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData });
    }

    function setExpenses(expenses) {
        dispatch({ type: 'SET', payload: expenses });
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
        setExpenses,
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
