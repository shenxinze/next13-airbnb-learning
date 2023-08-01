'use client'

import React, { useState } from 'react'
import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import useLoginModalStore from '@/hooks/useLoginModal'
import Modal from './Modal'
import Heading from '../Heading'
import Input from '../inputs/Input'
import { toast } from 'react-hot-toast'
import Button from '../Button'

const LoginModal = () => {
	const loginModalStore = useLoginModalStore()
	const [isLoading, setIsLoading] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FieldValues>({
		defaultValues: {
			email: '',
			password: ''
		}
	})
	const onSubmit: SubmitHandler<FieldValues> = async data => {
		setIsLoading(true)
		try {
			await axios.post('/api/register', data)
			loginModalStore.onClose()
		} catch (error) {
			toast.error('Something went wrong.')
		} finally {
			setIsLoading(false)
		}
	}
	const bodyContent = (
		<div className='flex flex-col gap-4'>
			<Heading title='Welcome back' subtitle='Login to your account!' />
			<Input
				id='emial'
				label='Email'
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<Input
				id='password'
				type='password'
				label='Password'
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
		</div>
	)
	const footerContent = (
		<div className='flex flex-col gap-4 mt-3'>
			<hr />
			<Button
				outline
				label='Continue with Google'
				icon={FcGoogle}
				onClick={() => {}}
			/>
			<Button
				outline
				label='Continue with Github'
				icon={AiFillGithub}
				onClick={() => {}}
			/>
			<div className='text-neutral-500 text-center mt-4 font-light'>
				<div className='flex flex-row items-center justify-center gap-2'>
					<div>Already have an account?</div>
					<div
						className='text-neutral-800 cursor-pointer hover:underline'
						onClick={loginModalStore.onClose}>
						Log in
					</div>
				</div>
			</div>
		</div>
	)
	return (
		<Modal
			disabled={isLoading}
			isOpen={loginModalStore.isOpen}
			title='Login'
			actionLabel='Continue'
			onClose={loginModalStore.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	)
}

export default LoginModal
