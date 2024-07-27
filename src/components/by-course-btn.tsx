'use client'
import { cn } from '@/lib/utils'
import { FormEvent, useState } from 'react'
import { Button } from './ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from './ui/dialog'
import { Input } from './ui/input'

const PAYMENTLINK =
	'https://secure.wayforpay.com/page?vkh=6692af2d-9988-4372-857a-02cc22d1dba8'

type ByCourseBtn = {
	text: string
	className?: string
}
const ByCourseBtn = ({ text, className }: ByCourseBtn) => {
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [telegram, setTelegram] = useState('')
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault()
		setIsSubmitting(true)

		try {
			const response = await fetch('/api/send-to-telegram', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ phone, email, telegram }),
			})

			if (response.ok) {
				const data = await response.json()
				console.log('Data sent to Telegram successfully:', data.message)
				// Очистка формы после успешной отправки
				setPhone('')
				setEmail('')
				// Перенаправление на страницу оплаты
				window.location.href = PAYMENTLINK
			} else {
				const errorData = await response.json()
				console.error('Failed to send data:', errorData.message)
			}
		} catch (error) {
			console.error('An error occurred:', error)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<Dialog>
			<DialogTrigger className={cn(`rounded-xl  cursor-pointer `, className)}>
				{text}
			</DialogTrigger>
			<DialogContent className='md:w-[600px] w-[300px]'>
				<DialogHeader>
					<DialogTitle className='text-center'>
						Заповніть форму та отримайте подарунок
					</DialogTitle>
				</DialogHeader>
				<form
					className='w-[250px] md:w-[400px] flex flex-col items-center m-auto'
					onSubmit={handleSubmit}
				>
					<div>
						<Input
							id='phone'
							className='mb-[15px] md:w-[300px] w-[200px]'
							placeholder='Ваш телефон'
							value={phone}
							onChange={e => setPhone(e.target.value)}
							disabled={isSubmitting}
						/>
					</div>
					<div>
						<Input
							id='email'
							placeholder='Ваш E-mail'
							className='mb-[15px]  md:w-[300px] w-[200px]'
							value={email}
							onChange={e => setEmail(e.target.value)}
							disabled={isSubmitting}
						/>
					</div>
					<div>
						<Input
							id='telegram'
							placeholder='Ваш telegram'
							className='mb-[15px]  md:w-[300px] w-[200px]'
							value={telegram}
							onChange={e => setTelegram(e.target.value)}
							disabled={isSubmitting}
						/>
					</div>
					<Button
						type='submit'
						className='bg-[#e1a421] text-white m-auto'
						disabled={isSubmitting}
					>
						{isSubmitting ? 'Sending...' : 'Save changes'}
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	)
}

export default ByCourseBtn
