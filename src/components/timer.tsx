'use client'

import { useEffect, useState } from 'react'

type TimeRemainingType = {
	days: number
	hours: number
	minutes: number
	seconds: number
}

const Timer = () => {
	const countdownDate = new Date('August 1, 2024 00:00:00 GMT+00:00').getTime()
	const [timeRemaining, setTimeRemaining] = useState<TimeRemainingType>()

	useEffect(() => {
		setTimeRemaining(getTimeRemaining())
		const interval = setInterval(() => {
			setTimeRemaining(getTimeRemaining())
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	function getTimeRemaining() {
		const now = new Date().getTime()
		const difference = countdownDate - now

		const days = Math.floor(difference / (1000 * 60 * 60 * 24))
		const hours = Math.floor(
			(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		)
		const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
		const seconds = Math.floor((difference % (1000 * 60)) / 1000)

		return {
			days,
			hours,
			minutes,
			seconds,
		}
	}

	if (!timeRemaining) return null

	return (
		<div className='flex'>
			<div className='mr-[10px]'>
				<div className='xl:w-[100px] lg:w-[80px] w-[60px] bg-white text-center xl:h-[100px] lg:h-[80px] h-[60px] rounded-xl xl:text-[50px] lg:text-[40px] text-[30px] items-center flex justify-center '>
					{timeRemaining.days}
				</div>
				<div className='text-center text-[#e1a421] lg:mt-[10px] mt-[5px] font-bold'>Днів</div>
			</div>
			<div className='mr-[10px]'>
				<div className='xl:w-[100px] lg:w-[80px] w-[60px] bg-white text-center xl:h-[100px] lg:h-[80px] h-[60px] rounded-xl xl:text-[50px] lg:text-[40px] text-[30px] items-center flex justify-center '>
					{timeRemaining.hours}
				</div>
				<div className='text-center text-[#e1a421]  lg:mt-[10px] mt-[5px] font-bold'>Годин</div>
			</div>
			<div className='mr-[10px]'>
				<div className='xl:w-[100px] lg:w-[80px] w-[60px] bg-white text-center xl:h-[100px] lg:h-[80px] h-[60px] rounded-xl xl:text-[50px] lg:text-[40px] text-[30px] items-center flex justify-center '>
					{timeRemaining.minutes}
				</div>
				<div className='text-center text-[#e1a421]  lg:mt-[10px] mt-[5px] font-bold'>Хвилин</div>
			</div>
			<div className='mr-[10px]'>
				<div className='xl:w-[100px] lg:w-[80px] w-[60px] bg-white text-center xl:h-[100px] lg:h-[80px] h-[60px] rounded-xl xl:text-[50px] lg:text-[40px] text-[30px] items-center flex justify-center '>
					{timeRemaining.seconds}
				</div>
				<div className='text-center text-[#e1a421]  lg:mt-[10px] mt-[5px] font-bold'>Секунд</div>
			</div>
		</div>
	)
}

export default Timer
