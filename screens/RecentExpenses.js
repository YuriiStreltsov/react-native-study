import { useContext, useEffect, useState } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../API/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import ErrorOverlay from '../components/UI/ErrorOverlay';

function RecentExpenses() {
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();
    const { expenses, setExpenses } = useContext(ExpensesContext);

    useEffect(() => {
        async function getExpenses() {
            setIsFetching(true);
            try {
                const expenses = await fetchExpenses();
                setExpenses(expenses);
                setIsFetching(false);
            } catch (error) {
                setError('Could not fetch expenses!');
                setIsFetching(false);
            }
        }
        getExpenses();
    }, []);

    const recentExpenses = expenses.filter((expense) => {
        const today = new Date();
        const date7daysAgo = getDateMinusDays(today, 7);

        return expense.date > date7daysAgo;
    });

    function errorHandler() {
        setError(null);
    }

    return (
        <>
            <ExpensesOutput
                expenses={recentExpenses}
                expensesPeriod="Last 7 days"
                fallbackText="No expenses registered for the last 7 days!"
            />
            {isFetching && <LoadingOverlay />}
            {error && !isFetching && (
                <ErrorOverlay message={error} onConfirm={errorHandler} />
            )}
        </>
    );
}

export default RecentExpenses;
