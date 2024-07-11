'use client';

import type { IInput } from '@/shared/types/ui/shared';
import { useId } from 'react';
import styles from './CustomInput.module.scss';

// 12.07.2024
// Custom Input component / v.1.0.0
export const CustomInput = ({ inputProps, label }: IInput) => {
	const id = useId();
	return (
		<label htmlFor={id} className={styles.inputWrapper}>
			{label && (
				<label htmlFor={id} className={styles.label}>
					{label}
				</label>
			)}
			<input {...inputProps} className={styles.input} id={id} />
		</label>
	);
};
