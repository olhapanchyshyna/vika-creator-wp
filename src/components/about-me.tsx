import MainTitle from '@/components/main-title'
import Image from 'next/image'

export default function AboutMe() {
	return (
		<section className='bg-white py-[50px] lg:py-[80px] 2xl:py-[100px] px-[20px] lg:px-[60px]  '>
			<div className='container p-0'>
				<div className='flex justify-between flex-col lg:flex-row items-center'>
					<div className='2xl:max-w-[760px] lg:max-w-[450px] xl:max-w-[580px] flex flex-col lg:order-none order-3'>
						<div className='lg:flex hidden flex-col'>
							<MainTitle
								text='Мене звати Віка Мірча,'
								className='text-[#E1A421] mb-[30px]'
							/>
							<div className='2xl:text-[42px] text-[28px] xl:text-[32px] font-bold uppercase leading-[35px] xl:leading-[45px]'>
								Я продюсерка та менторка експертів{' '}
							</div>
						</div>
						<div className='lg:mt-[40px] text-[18px] lg:text-[23px] 2xl:text-[28px]'>
							<span className='text-[#E1A421]'>
								Я завжди підкреслювала сильні сторони оточуючих
							</span>{' '}
							і показувала, як реалізувати їх таланти та заробляти на цьому.
						</div>
						<div className='mt-[30px] xl:mt-[60px] text-[18px] lg:text-[23px] 2xl:text-[28px] italic'>
							Я вирішила допомагати експертам знаходити свій напрямок,
							реалізовувати таланти та заробляти на цьому.
							<span className='text-[#E1A421] ml-[6px]'>
								До кінця року планую допомогти 1000+ експертам, тому ти можеш
								розраховувати на свій результат.
							</span>
						</div>
					</div>
					<div className='lg:hidden lg:order-none order-1'>
						<MainTitle
							text='Мене звати Віка Мірча,'
							className='text-[#E1A421] mb-[10px]'
						/>
						<div className='text-[24px] font-bold uppercase leading-[35px]'>
							Я продюсерка та менторка експертів{' '}
						</div>
					</div>
					<Image
						src='/about-me.jpg'
						width={500}
						height={600}
						alt='me'
						className='2xl:w-[550px] w-[320px] lg:w-[400px] xl:w-[450px] h-auto  my-[30px] lg:ml-[30px] xl:my-0 lg:order-none order-2'
					/>
				</div>
			</div>
		</section>
	)
}
