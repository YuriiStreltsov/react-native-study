import { useContext, useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/UI/Button';
import { ExpensesContext } from '../store/expenses-context';
import { getRandomLast6DaysData } from '../util/date';

function ManageExpense({ route, navigation }) {
    const { addExpense, deleteExpense, updateExpense } =
        useContext(ExpensesContext);
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense',
        });
    }, [navigation, isEditing]);

    function deleteExpenseHandler(id) {
        deleteExpense(editedExpenseId);
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler() {
        if (isEditing) {
            updateExpense(editedExpenseId, {
                description: 'Old updated',
                amount: Number((Math.random() * 100).toFixed(2)),
                date: getRandomLast6DaysData(),
            });
        } else {
            addExpense({
                description: 'New added',
                amount: Number((Math.random() * 100).toFixed(2)),
                date: new Date(Date.now()),
            });
        }
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Button
                    style={styles.buttonCustom}
                    mode="flat"
                    onPress={cancelHandler}
                >
                    Cancel
                </Button>
                <Button style={styles.buttonCustom} onPress={confirmHandler}>
                    {isEditing ? 'Update' : 'Add'}
                </Button>
            </View>
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton
                        icon="trash"
                        color={GlobalStyles.colors.error500}
                        size={32}
                        onPress={deleteExpenseHandler}
                    />
                </View>
            )}
        </View>
    );
}

export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    buttonCustom: {
        minWidth: 120,
        marginHorizontal: 8,
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center',
    },
});
