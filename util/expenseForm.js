import { getFormattedDate } from './date';

export function getTransformValues(values) {
    return {
        amount: { value: values.amount.toString(), isValid: true },
        date: { value: getFormattedDate(values.date), isValid: true },
        description: { value: values.description, isValid: true },
    };
}
