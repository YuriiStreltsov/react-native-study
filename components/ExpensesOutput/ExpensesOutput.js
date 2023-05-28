import { StyleSheet, View } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

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
        date: new Date('2023-05-05'),
    },

    {
        id: 'e6',
        description: 'A pair of shoes',
        amount: 40.32,
        date: new Date('2022-02-24'),
    },
    {
        id: 'e8',
        description: 'A pair of trousers',
        amount: 12.99,
        date: new Date('2022-09-01'),
    },
    {
        id: 'e9',
        description: 'Some bananas',
        amount: 0.99,
        date: new Date('2023-03-05'),
    },
    {
        id: 'e10',
        description: 'A book',
        amount: 99.95,
        date: new Date('2023-04-12'),
    },
    {
        id: 'e11',
        description: 'A car',
        amount: 10000.0,
        date: new Date('2023-05-05'),
    },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary
                expenses={DUMMY_EXPENSES}
                periodName={expensesPeriod}
            />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,
    },
});
