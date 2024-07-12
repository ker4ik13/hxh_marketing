'use client';

import type { ICustomInput } from '@/shared/types/ui/shared';
import { useId } from 'react';
import styles from './CustomInput.module.scss';

// 12.07.2024
// Custom Input component / v.1.0.0
export const CustomInput = ({ inputProps, label, error }: ICustomInput) => {
	const id = useId();
	return (
		<label
			htmlFor={id}
			className={`${styles.inputWrapper} ${error ? styles.error : ''}`}
		>
			{label && (
				<label htmlFor={id} className={styles.label}>
					{label}
					{error && (
						<span className={styles.error}>{error.message?.toString()}</span>
					)}
				</label>
			)}
			<input {...inputProps} className={styles.input} id={id} />
		</label>
	);
};
