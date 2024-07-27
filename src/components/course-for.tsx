import MainTitle from '@/components/main-title'

export default function CourseFor() {
	return (
		<section className='py-[20px] lg:py-[80px] 2xl:py-[100px] px-[20px] lg:px-[60px] bg-white -mt-[1px]'>
			<div className='container p-0'>
				<MainTitle
					text='ДАНИЙ КУРС ДЛЯ:'
					className='text-center mb-[50px] lg:mb-[80px] text-black'
				/>

				<div className='flex justify-center m-auto flex-wrap'>
					<div className='flex flex-col mx-[7px] md:mt-[20px] mt-[15px]'>
						<div className='xl:w-[550px] md:w-[450px] w-[320px] bg-[#e1a421] px-[20px] py-[10px] rounded-2xl xl:text-[28px] md:text-[24px] text-[20px] mb-[15px] h-[260px]'>
							- експертів-початківців, які хочуть знайти своє місце в інфобізі:
							знайти свій напрямок, мати прості і дієві інструменти для
							заробітку на своїй експертності
						</div>
						<div className='xl:w-[550px] md:w-[450px] w-[320px] bg-[#e1a421]  px-[20px] py-[10px] rounded-2xl xl:text-[28px] md:text-[24px] text-[20px] h-[260px]'>
							- експертів які мають багато дипломів, різнопланового досвіду і
							навичок, але не знають що з чим робити і як заробляти на своїй
							експретизі
						</div>
					</div>
					<div className='flex flex-col md:mt-[20px] mt-[15px] mx-[7px]'>
						<div className='xl:w-[550px] md:w-[450px] w-[320px] bg-[#e1a421]  px-[20px] py-[10px] rounded-2xl xl:text-[28px] md:text-[24px] text-[20px] mb-[15px] h-[260px]'>
							- для багатопрофільних експертів, які мають гарні результати в
							різних нішах, але хочуть заробляти на своїх талантах - те що
							найбільше подобається
						</div>
						<div className='xl:w-[550px] md:w-[450px] w-[320px] bg-[#e1a421]  px-[20px] py-[10px] rounded-2xl xl:text-[28px] md:text-[24px] text-[20px] mb-[15px] h-[260px]'>
							- для власників консалтингових компаній, які хочуть перейти в
							онлайн і не знать з чого почати
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
