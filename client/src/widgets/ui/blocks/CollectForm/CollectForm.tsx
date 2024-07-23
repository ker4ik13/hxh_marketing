'use client';

import darkMan from '@/data/user/images/dark-man.png';
import primaryBg from '@/data/user/images/primary-gradient.jpg';
import { TelegramService } from '@/services/user/messages';
import { getAnimationStyle, setupParallax } from '@/shared/helpers/lib';
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
	const content = data.data.data.attributes;

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
				blockName: content.uniqueBlockName,
			});
			clearErrors();
			content.inputs.forEach((input) => {
				setValue(input.inputProps?.name!, '');
			});
		} catch (error) {
			content.inputs.forEach((input) => {
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
			onMouseMove={(e) =>
				setupParallax(styles.man, e, {
					intensity: 30,
				})
			}
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
				className={`${styles.container} ${getFormPositionStyles(content.contentPosition)}`}
			>
				<div className={styles.content}>
					<h2 className={styles.title}>{content.title}</h2>
					{content.description && (
						<p className={styles.description}>{content.description}</p>
					)}
					<form onSubmit={handleSubmit(submitForm)} className={styles.inputs}>
						{content.inputs.map((input, index) => (
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
							type={content.button.type}
							size={content.button.size}
							icon={content.button.icon}
							color={content.button.color}
							disabled={isSubmitSuccessful}
						>
							{isSubmitSuccessful
								? 'Спасибо за заявку!'
								: content.button.children}
						</CustomButton.Button>
					</form>
				</div>
			</Container>
		</div>
	);
};
