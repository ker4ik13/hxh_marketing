import styles from './BlockWithTitle.module.scss';

interface Props {
	children: React.ReactNode;
	id?: string;
}

export const BlockWithTitle = ({ children, id }: Props) => {
	return (
		<div className={styles.block} id={id}>
			{children}
		</div>
	);
};
