'use client';

import darkMan from '@/data/user/images/dark-man.png';
import primaryBg from '@/data/user/images/primary-gradient.jpg';
import { TelegramService } from '@/services/user/messages';
import { getAnimationStyle } from '@/shared/helpers/lib';
import type { ICollectDataFormBlockProps } from '@/shared/types/ui/blocks';
import { CustomButton, CustomInput } from '@/shared/ui';
import { Container } from '@/shared/ui/layout';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import styles from './CollectForm.module.scss';

interface Props {
	data: ICollectDataFormBlockProps;
}

const getFormPositionStyles = (position: 'left' | 'right'): string => {
	return position === 'right' ? styles.right : '';
};

export const CollectForm = ({ data }: Props) => {
	const {
		handleSubmit,
		setValue,
		setError,
		clearErrors,
		formState: { errors, isSubmitSuccessful },
	} = useForm<any>();

	const submitForm = async (formData: { [key: string]: string }) => {
		try {
			await TelegramService.sendNewClient(formData, {
				blockName: data.data.data.attributes.uniqueBlockName,
			});
			clearErrors();
			data.data.data.attributes.inputs.forEach((input) => {
				setValue(input.inputProps?.name!, '');
			});
		} catch (error) {
			data.data.data.attributes.inputs.forEach((input) => {
				setError(input.inputProps!.name!, {
					message: 'Ошибка сервера, попробуйте позже',
					type: 'serverError',
				});
			});
		}
	};

	return (
		<div
			className={`${styles.collectBlock} ${getAnimationStyle(data.animation)}`}
			id={data.blockId}
		>
			{/* Bg image */}
			<Image
				src={primaryBg}
				width={1920}
				height={1080}
				alt='Background'
				draggable={false}
				className={styles.bgImage}
				quality={100}
				priority
			/>
			{/* Man */}
			<Image
				src={darkMan}
				width={709}
				height={795}
				alt={'Man'}
				draggable={false}
				className={styles.man}
				quality={100}
				priority
			/>
			{/* Content */}
			<Container
				size='medium'
				className={`${styles.container} ${getFormPositionStyles(data.data.data.attributes.contentPosition)}`}
			>
				<div className={styles.content}>
					<h2 className={styles.title}>{data.data.data.attributes.title}</h2>
					{data.data.data.attributes.description && (
						<p className={styles.description}>
							{data.data.data.attributes.description}
						</p>
					)}
					<form onSubmit={handleSubmit(submitForm)} className={styles.inputs}>
						{data.data.data.attributes.inputs.map((input, index) => (
							<CustomInput
								error={errors[input.inputProps!.name!]}
								key={index}
								label={input.label}
								inputProps={{
									required: input.inputProps?.required,
									autoComplete: input.inputProps?.autoComplete,
									type: input.inputProps?.type,
									placeholder: input.inputProps?.placeholder,
									name: input.inputProps!.name,
									onChange: (e) =>
										setValue(input.inputProps!.name!, e.target.value),
									onBlur: (e) =>
										setValue(input.inputProps!.name!, e.target.value),
								}}
							/>
						))}
						<CustomButton.Button
							type={data.data.data.attributes.button.type}
							size={data.data.data.attributes.button.size}
							icon={data.data.data.attributes.button.icon}
							color={data.data.data.attributes.button.color}
							disabled={isSubmitSuccessful}
						>
							{isSubmitSuccessful
								? 'Спасибо за заявку!'
								: data.data.data.attributes.button.children}
						</CustomButton.Button>
					</form>
				</div>
			</Container>
		</div>
	);
};
