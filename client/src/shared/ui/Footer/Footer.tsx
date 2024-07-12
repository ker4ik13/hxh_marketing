import { getIconFromName } from '@/shared/helpers/lib';
import type { IFooter } from '@/shared/types/ui/elements';
import Link from 'next/link';
import { CustomButton } from '../CustomButton/CustomButton';
import { Container } from '../layout';
import { Logo } from '../Logo/Logo';
import styles from './Footer.module.scss';

interface FooterProps {
	data: IFooter;
}

export const Footer = ({ data }: FooterProps) => {
	return (
		<footer className={`${styles.footer}`}>
			<div className={styles.upper}>
				<Container size='medium' className={styles.upperContainer}>
					<div className={styles.logo}>
						<Logo
							logo={data.attributes.logo.name}
							color={data.attributes.logo.color}
						/>
						{data.attributes.logo.description && (
							<p className={styles.description}>
								{data.attributes.logo.description}
							</p>
						)}
					</div>
					<div className={styles.pages}>
						{data.attributes.pages.map((page) => (
							<Link
								href={page.href}
								className={styles.pageLink}
								key={page.id}
								target={page.target}
							>
								{page.label}
							</Link>
						))}
					</div>
					{data.attributes.text && (
						<div className={styles.text}>
							<p className={styles.textTitle}>{data.attributes.text.label}</p>
							<CustomButton.Link
								href={data.attributes.text.link.href}
								color={data.attributes.text.link.color}
								size={data.attributes.text.link.size}
								target={data.attributes.text.link.target}
							>
								{data.attributes.text.link.children}
							</CustomButton.Link>
						</div>
					)}
				</Container>
			</div>
			<div className={styles.lower}>
				<Container size='medium' className={styles.lowerContainer}>
					<p className={styles.copyright}>{data.attributes.copyrightText}</p>
					<div className={styles.contacts}>
						{data.attributes.contacts.map((contact) => (
							<Link
								href={contact.href}
								className={styles.icon}
								key={contact.id}
							>
								{getIconFromName(contact.socialNetwork)}
							</Link>
						))}
					</div>
				</Container>
			</div>
		</footer>
	);
};
