import { Alert, StyleSheet, Text, View } from 'react-native';
import Input from './Input';
import { useLayoutEffect, useState } from 'react';
import Button from '../UI/Button';
import { getFormattedDate } from '../../util/date';
import { getTransformValues } from '../../util/expenseForm';
import { expensesFormSchema } from '../../validation/expensesFormSchema';

const initialInputs = {
    amount: { value: '', isValid: true },
    date: { value: '', isValid: true },
    description: { value: '', isValid: true },
};

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit, editingValues }) {
    const transformedInitialInputs = editingValues
        ? getTransformValues(editingValues)
        : initialInputs;

    const [inputs, setInputs] = useState(transformedInitialInputs);

    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputs((currentInputs) => {
            return {
                ...currentInputs,
                [inputIdentifier]: { value: enteredValue, isValid: true },
            };
        });
    }

    async function submitHandler() {
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value.trim(),
        };
        try {
            await expensesFormSchema.validate(expenseData, {
                abortEarly: false,
            });
            onSubmit(expenseData);
        } catch (err) {
            const invalidInputs = err.inner.map((error) => error.path);
            setInputs((currentInputs) => {
                return {
                    amount: {
                        value: currentInputs.amount.value,
                        isValid: !invalidInputs.includes('amount'),
                    },
                    date: {
                        value: currentInputs.date.value,
                        isValid: !invalidInputs.includes('date'),
                    },
                    description: {
                        value: currentInputs.description.value,
                        isValid: !invalidInputs.includes('description'),
                    },
                };
            });
        }
    }

    const formIsInvalid =
        !inputs.amount.isValid ||
        !inputs.date.isValid ||
        !inputs.description.isValid;

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input
                    style={styles.rowInput}
                    label="Amount"
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: (value) =>
                            inputChangedHandler('amount', value),
                        value: inputs.amount.value,
                    }}
                />
                <Input
                    style={styles.rowInput}
                    label="Date"
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: (value) =>
                            inputChangedHandler('date', value),
                        value: inputs.date.value,
                    }}
                />
            </View>

            <Input
                label="Description"
                textInputConfig={{
                    multiline: true,
                    autoCorrect: false,
                    onChangeText: (value) =>
                        inputChangedHandler('description', value),
                    value: inputs.description.value,
                }}
            />
            {formIsInvalid && (
                <Text>
                    Invalid input values - please check your entered data
                </Text>
            )}
            <View style={styles.buttonsContainer}>
                <Button
                    style={styles.buttonCustom}
                    mode="flat"
                    onPress={onCancel}
                >
                    Cancel
                </Button>
                <Button style={styles.buttonCustom} onPress={submitHandler}>
                    {submitButtonLabel}
                </Button>
            </View>
        </View>
    );
}

export default ExpenseForm;

const styles = StyleSheet.create({
    form: {
        marginTop: 80,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center',
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowInput: {
        flex: 1,
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
});
