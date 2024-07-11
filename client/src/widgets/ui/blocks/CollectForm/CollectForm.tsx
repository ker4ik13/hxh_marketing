'use client';

import darkMan from '@/data/user/images/dark-man.png';
import primaryBg from '@/data/user/images/primary-gradient.jpg';
import { TelegramService } from '@/services/user/messages';
import { ICollectDataForm } from '@/shared/types/forms';
import { CustomButton, CustomInput } from '@/shared/ui';
import { Container } from '@/shared/ui/layout';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import styles from './CollectForm.module.scss';

export const CollectForm = () => {
	const { handleSubmit, resetField, setValue } = useForm<ICollectDataForm>();

	const submitForm = async (data: ICollectDataForm) => {
		await TelegramService.sendNewClient(data);
		resetField('name');
		resetField('phone');
		return;
	};

	return (
		<div className={styles.collectBlock}>
			{/* Bg image */}
			<Image
				src={primaryBg}
				width={1920}
				height={1080}
				alt='Background'
				draggable={false}
				className={styles.bgImage}
			/>
			{/* Man */}
			<Image
				src={darkMan}
				width={709}
				height={795}
				quality={100}
				alt={'Man'}
				draggable={false}
				className={styles.man}
			/>
			{/* Content */}
			<Container size='medium' className={styles.container}>
				<div className={styles.content}>
					<h2 className={styles.title}>Создадим вместе классный проект?</h2>
					<p className={styles.description}>
						Оставьте заявку на бесплатную консультацию прямо сейчас и мы соберем
						бесплатные маркетинговые решения для вашего бизнеса.
					</p>
					<form onSubmit={handleSubmit(submitForm)} className={styles.inputs}>
						<CustomInput
							label='Ваше имя'
							inputProps={{
								required: true,
								autoComplete: 'name',
								type: 'text',
								placeholder: 'Иван',
								name: 'name',
								onChange: (e) => setValue('name', e.target.value),
								onBlur: (e) => setValue('name', e.target.value),
							}}
						/>
						<CustomInput
							label='Номер телефона'
							inputProps={{
								autoComplete: 'tel',
								required: true,
								type: 'tel',
								name: 'phone',
								placeholder: '+7 (___)-___-__-__',
								onChange: (e) => setValue('phone', e.target.value),
								onBlur: (e) => setValue('phone', e.target.value),
							}}
						/>
						<CustomButton.Button type='submit' size='large' icon='Send'>
							Получить бесплатную консультацию
						</CustomButton.Button>
					</form>
				</div>
			</Container>
		</div>
	);
};
