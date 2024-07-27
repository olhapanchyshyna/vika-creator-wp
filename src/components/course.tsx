import MainTitle from '@/components/main-title'
import { Raleway } from 'next/font/google'
import Image from 'next/image'

const raleway = Raleway({ subsets: ['latin'] })

export default function Course() {
	return (
		<section className='bg-white py-[50px] lg:py-[80px] 2xl:py-[100px] px-[20px] lg:px-[60px] '>
			<div className='container p-0'>
				<MainTitle
					text='Цей курс – допоміг багатьом експертам'
					className='text-black text-center mb-[30px]'
				/>

				<div className='flex flex-col justify-center mt-[60px] 2xl:mt-[100px] items-center '>
					<div className='flex'>
						<Image
							src='/check-mark.png'
							width={40}
							height={40}
							alt='check-mark'
							className='lg:h-[40px] lg:w-[40px] h-[30px] w-[30px] mr-[10px] mt-[7px]'
						/>
						<div className='2xl:text-[30px] lg:text-[26px] text-[20px] lg:max-w-[680px] max-w-[520px] w-[100%] lg:pb-[52px] pb-[35px] pl-[10px]'>
							{' '}
							Виявити свої сильні особисті і професійні сторони та знайти свій
							напрямок
						</div>
					</div>
					<div className='flex'>
						<Image
							src='/check-mark.png'
							width={40}
							height={40}
							alt='check-mark'
							className='lg:h-[40px] lg:w-[40px] h-[30px] w-[30px] mr-[10px] mt-[7px]'
						/>
						<div className='2xl:text-[30px] lg:text-[26px] text-[20px] lg:max-w-[680px] max-w-[520px] w-[100%] lg:pb-[52px] pb-[35px] pl-[10px]'>
							{' '}
							Почати цінувати себе та збільшити прайс на послуги і продукти
						</div>
					</div>
					<div className='flex'>
						<Image
							src='/check-mark.png'
							width={40}
							height={40}
							alt='check-mark'
							className='lg:h-[40px] lg:w-[40px] h-[30px] w-[30px] mr-[10px] mt-[7px]'
						/>
						<div className='2xl:text-[30px] lg:text-[26px] text-[20px] lg:max-w-[680px] max-w-[520px] w-[100%] pl-[10px]'>
							{' '}
							Запустити курс або менторство і збільшити свій дохід в 2-3 рази
							більше
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
