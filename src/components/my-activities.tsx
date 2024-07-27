import MainTitle from '@/components/main-title'
import { Raleway } from 'next/font/google'
const raleway = Raleway({ subsets: ['latin'] })

export default function MyActivities() {
	return (
		<section className='pt-[50px] pb-[20px] lg:py-[80px] 2xl:py-[100px] px-[20px] lg:px-[60px]'>
			<div className='container p-0'>
				<MainTitle text='Моя діяльність в цифрах' className='text-center' />

				<div className='flex justify-around items-end xl:items-center flex-wrap mt-[50px] md:mt-[100px]'>
					{/* 1 */}
					<div className='lg:max-w-[400px] max-w-[345px] w-[100%] mb-[40px]'>
						<div
							className={`text-center 2xl:text-[100px] xl:text-[70px] text-[50px] font-bold leading-[normal] text-[#e1a421]  ${raleway.className}`}
						>
							700 000
						</div>
						<div className='text-center xl:text-[28px] lg:text-[23px] text-[20px] text-white leading-[normal]'>
							грн оберту на місяць кращої воронки
						</div>
					</div>
					{/* 2 */}
					<div className='lg:max-w-[400px] max-w-[345px]  w-[100%] mb-[40px]'>
						<div
							className={`text-center 2xl:text-[100px] xl:text-[70px] text-[50px] font-bold leading-[normal] text-[#e1a421]  ${raleway.className}`}
						>
							8
						</div>
						<div className='text-center xl:text-[28px] lg:text-[23px] text-[20px] text-white leading-[normal]'>
							років в сфері маркетингу
						</div>
					</div>

					{/* 3 */}
					<div className='lg:max-w-[400px] max-w-[345px]  w-[100%] mb-[40px]'>
						<div
							className={`text-center 2xl:text-[100px] xl:text-[70px] text-[50px] font-bold leading-[normal] text-[#e1a421]  ${raleway.className}`}
						>
							7
						</div>
						<div className='text-center xl:text-[28px] lg:text-[23px] text-[20px] text-white leading-[normal]'>
							років <br /> навчаю і консультую
						</div>
					</div>
					{/* 4 */}
					<div className='lg:max-w-[400px] max-w-[345px] w-[100%] mb-[40px]'>
						<div
							className={`text-center 2xl:text-[100px] xl:text-[70px] text-[50px] font-bold leading-[normal] text-[#e1a421]  ${raleway.className}`}
						>
							665 000
						</div>
						<div className='text-center xl:text-[28px] lg:text-[23px] text-[20px] text-white leading-[normal]'>
							грн приніс останній запуск
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
