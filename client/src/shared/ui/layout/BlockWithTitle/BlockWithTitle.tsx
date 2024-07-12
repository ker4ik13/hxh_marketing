import styles from './BlockWithTitle.module.scss';

interface Props {
	children: React.ReactNode;
	id?: string;
	className?: string;
}

export const BlockWithTitle = ({ children, id, className }: Props) => {
	return (
		<div className={`${styles.block} ${className ? className : ''}`} id={id}>
			{children}
		</div>
	);
};
