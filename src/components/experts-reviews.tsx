import { Raleway } from 'next/font/google'
import Image from 'next/image'

const raleway = Raleway({ subsets: ['latin'] })

export default function ExpertsReviews() {
	return (
		<section className='bg-white py-[50px] lg:py-[80px] 2xl:py-[100px] px-[20px] lg:px-[60px] '>
			<div className='container p-0'>
				<h2
					className={`text-[28px] max-w-[900px] 2xl:max-w-[1400px] sm:text-[36px] xl:text-[46px] 2xl:text-[65px] text-black text-center leading-[46px] font-bold 2xl:leading-[80px] uppercase m-auto mb-[50px] lg:mb-[100px] ${raleway.className}`}
				>
					Приклади експертів, які
					<span className='text-[#e1a421] ml-[10px]'>знайшли напрям та</span>
					
					<span className='text-[#e1a421] ml-[10px]'>монетизували </span>
					власний досвід та таланти
				</h2>

				<div>
					<div className='flex justify-center text-center'>
						<div className='flex flex-col items-center md:w-[750px]'>
							<div className='text-[30px]'>
								<h2 className='text-[28px] md:text-[40px] 2xl:text-[50px] text-[#e1a421] font-black mb-[10px] lg:mb-[20px]'>
									Айті школа
								</h2>
								<div className='text-[20px] md:text-[22px] lg:text-[26px] 2xl:text-[30px]'>
									Масштабування з 350 000 грн на 665 000 грн
									<br />
									Ми зробили переупаковку курсів і прогрів побудовний на історії
									та автентичності експерта
								</div>
							</div>
							<Image
								src='/expert-rev-1.jpeg'
								width={500}
								height={10}
								alt='expert-rev'
								className='md:mt-[40px] mt-[10px] w-[320px] md:w-[500px] '
							/>
						</div>
					</div>
				</div>
				<div className='text-[21px] md:text-[24px] lg:text-[30px] mt-[50px] font-bold  text-[#f65f0b] text-center'>
					МИ ОТРИМАЛИ КРУТІ РЕЗУЛЬТАТИ ЗАВДЯКИ ТОМУ ЩО УПАКУВАЛИ СУПЕР СИЛУ,
					ІСТОРІЮ І ДОСВІД ЕКСПЕРТА В ЗАТРЕБУВАНИЙ ПРОДУКТ
				</div>
			</div>
		</section>
	)
}
