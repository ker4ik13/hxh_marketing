'use client';

import type { IAccordion } from '@/shared/types/ui/elements';
import { ArrowIcon } from '@/shared/ui/icons';
import { useRef, useState } from 'react';
import styles from './Accordion.module.scss';

type AccordionProps = {
	accordion: IAccordion;
};

const getIsOpen = (isOpen: boolean) => (isOpen ? styles.open : '');

export const Accordion = ({ accordion }: AccordionProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const content = useRef<HTMLDivElement>(null);

	const toggleOpen = () => {
		if (isOpen) {
			setIsOpen(false);

			if (content.current) {
				content.current.style.maxHeight = '0px';
			}
			return;
		}

		setIsOpen(true);
		if (content.current) {
			content.current.style.maxHeight = `${content.current.scrollHeight + 14}px`;
		}
		return;
	};

	return (
		<div
			className={`${styles.accordion} ${getIsOpen(isOpen)}`}
			onClick={toggleOpen}
		>
			<div className={styles.upper}>
				<p className={styles.title}>{accordion.ask}</p>
				<ArrowIcon className={styles.icon} />
			</div>
			<div className={styles.hiddenContent} ref={content}>
				<div className={styles.divider}></div>
				<p className={styles.content}>{accordion.answer}</p>
			</div>
		</div>
	);
};
