import type { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export interface ICustomInput {
	error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
	label?: string;
	inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}
