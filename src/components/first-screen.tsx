import MainTitle from '@/components/main-title'
import { getFirstScreen } from '@/lib/fields'
import Image from 'next/image'
import ByCourseBtn from './by-course-btn'

export default async function FirstScreen() {
	const nodes = await getFirstScreen() // Получение данных
	const content = nodes.map((node: any) => node.firstScreen)
	const { prise, title } = content[0]


	return (
		<section className='lg:relative container pt-[50px] lg:py-[60px] px-[20px] xl:py-[80px] bg-cover bg-no-repeat bg-center flex-col lg:flex-row flex text-white items-center h-[1200px]'>
			<div className='lg:w-[600px] order-2 lg:order-none'>
				<Image
					src='/first-screen.png'
					className='lg:!absolute lg:bottom-0 max-w-[300px] xl:max-w-[400px]'
					alt='main'
					width={400}
					height={400}
				/>
			</div>

			<div className='lg:w-[650px] xl:w-[800px] justify-end text-white order-1 lg:order-none '>
				<div className='text-[22px] sm:text-[28px] xl:text-[35px] mb-[40px] font-bold '>
					Старт 1 серпня
				</div>
				<MainTitle text='Експрес курс:' className='text-[#E1A421] mb-[10px]' />
				<h2 className='2xl:leading-[52px] leading-[35px] xl:leading-[50px] text-[23px] sm:text-[32px] xl:text-[40px] 2xl:text-[46px] uppercase font-bold'>
					{title}
					{/* ЯК БАГАТОПРОФІЛЬНОМУ ЕКСПЕРТУ ЗНАЙТИ СВІЙ НАПРЯМОК ТА ПОЧАТИ НА ЦЬОМУ
					ЗАРОБЛЯТИ? */}
				</h2>
				<div className='sm:text-[23px] text-[18px] xl:text-[30px] my-[20px] max-w-[500px] xl:max-w-[600px]'>
					Знайди свої сильні сторони та почни заробляти на них
				</div>
				<div className='mt-[30px] xl:mt-[60px] lg:text-[70px] text-[38px] text-[#e1a421] font-bold'>
					{prise}
					{/* 280 грн */}
				</div>
				<ByCourseBtn
					text='Взяти Участь'
					className='bg-[#E1A421] text-white mt-[10px] xl:mt-[20px] xl:w-[340px] w-[280px] py-[15px] xl:py-[20px] !pointer-events-nonepx-[10px] xl:px-[30px] text-center text-[30px] lg:text-[34px] xl:text-[40px]'
				/>

				<div className='lg:text-[20px] text-[18px] xl:text-[25px] lg:w-[500px] mt-[40px] mb-[40px] lg:mb-0'>
					Зареєструйся на курс та отримай
					<span className='uppercase text-[#e1a421] font-bold ml-[8px]'>
						Подарунок!
					</span>
					<br />
					Як упаковати блог в Інстаграм з нуля — покроковий гайд
				</div>
			</div>
		</section>
	)
}
