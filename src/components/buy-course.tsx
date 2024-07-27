import MainTitle from '@/components/main-title'
import Timer from '@/components/timer'
import Image from 'next/image'
import ByCourseBtn from './by-course-btn'

export default function BuyCourse() {
	return (
		<section className='py-[20px] lg:py-[80px] 2xl:py-[100px] px-[20px] lg:px-[60px]'>
			<div className='container flex flex-col lg:flex-row justify-between p-0 items-center lg:items-start'>
				<div className='max-w-[600px] mr-[20px] items-center lg:items-start flex flex-col'>
					<MainTitle
						text='Доєднатись до експрес курсу за'
						className='xl:mb-[100px] lg:mb-[60px] !leading-normal text-center lg:text-start'
					/>
					<div className='mt-[10px] lg:text-[70px] text-[50px] xl:text-[100px] text-[#e1a421] font-bold'>
						280 грн
					</div>
					<ByCourseBtn text='Записатись на курс' className='py-[20px] px-[15px] lg:px-[30px] mt-[20px] lg:mt-[50px] text-[22px] text-black lg:text-[30px] bg-white hover:bg-[#e1a421]'/>
				</div>
				<div className='flex flex-col items-center max-w-[600px]'>
					<div className='text-center mb-[10px] text-[22px] lg:text-[30px] xl:text-[45px] text-white lg:mt-0 mt-[40px]'>
						ДО ЗАКІНЧЕННЯ АКЦІЇ ЗАЛИШИЛОСЬ:
					</div>

					<Timer />
					<Image
						src='/by-course-me.jpg'
						width={300}
						height={400}
						alt='me'
						className='2xl:w-[600px] w-[280px] xl:w-[440px] h-auto mt-[30px]'
					/>
				</div>
			</div>
		</section>
	)
}
