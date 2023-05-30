import * as yup from 'yup';

export const expensesFormSchema = yup.object().shape({
    amount: yup
        .number()
        .positive('"Amount" must be more than 0')
        .required("It's required field"),
    date: yup
        .date()
        .typeError(
            'Expected a value of type "${type}" but got: "incorrect data"'
        ),
    description: yup
        .string()
        .max(100, '"Description" should not contain more than 100 characters')
        .required('"Description" can\'t be empty'),
});
