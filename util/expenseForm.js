import { getFormattedDate } from './date';

export function getTransformValues(values) {
    return {
        amount: values.amount.toString(),
        date: getFormattedDate(values.date),
        description: values.description,
    };
}
