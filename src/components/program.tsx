import MainTitle from '@/components/main-title'
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from './ui/card'
import { Raleway } from 'next/font/google'
import Image from 'next/image'

const raleway = Raleway({ subsets: ['latin'] })

const cardsItem = [
	{
		title: '1 ',
		descr:
			'Як виявити та розпакувати супер силу (те що подобається найбільше та вдається легше за все)',
		img: '/power.png',
		alt: 'power',
	},
	{
		title: '2 ',
		descr: 'Як виявити ваші професійні сильні сторони та таланти  ',
		img: '/task.png',
		alt: 'task',
	},
	{
		title: '3 ',
		descr:
			'Як знайти нішу в якій є високий попит і найбільш швидка монетизація вашого досвіду та супер сили',
		img: '/niche.png',
		alt: 'niche',
	},
	{
		title: '4 ',
		descr: 'Як упакувати/переупакувати ваш досвід в новий продукт або послугу',
		img: '/experience.png',
		alt: 'experience',
	},
	{
		title: '5 ',
		descr:
			'Як скласти покроковий план для монетизації вашого досвіду та реаліазацїї',
		img: '/ppc.png',
		alt: 'ppc',
	},
	{
		title: '',
		descr: 'Персональний розбір вашого кейсу на груповій Zoom ceccії ',
		img: '/win.png',
		alt: 'win',
	},
]

export default function Program() {
	return (
		<section className='py-[50px] lg:py-[80px] 2xl:py-[100px] px-[20px] lg:px-[60px] '>
			<div className='container p-0'>
				<MainTitle text='Програма' className='text-center mb-[50px] lg:mb-[100px]' />
				<div className='flex justify-evenly flex-wrap '>
					{cardsItem.map((item, index) => {
						return (
							<Card
								key={item.title}
								className={`m-auto h-[295px] w-[300px] md:h-[350px] md:w-[350px] xl:h-[390px] xl:w-[400px] rounded-[40px] bg-[#e1a421] px-[15px] py-[30px] text-center mx-[5px] my-[10px] justify-between`}
							>
								<CardHeader className='p-0 flex flex-row m-auto justify-center items-baseline xl:mb-[20px]'>
									<CardTitle
										className={`mb-[15px] md:mb-[25px] text-center text-[70px] md:text-[80px] xl:text-[115px] font-bold leading-[50px] text-[#ffff] ${raleway.className}`}
									>
										{item.title}
									</CardTitle>
									<Image
										src={item.img}
										alt={item.alt}
										width={80}
										height={100}
										className='mb-[10px] w-[50px] h-[50px] md:w-[65px] md:h-[65px] xl:w-[75px] xl:h-[75px]'
									/>
								</CardHeader>
								<div className='text-[#ffff] text-[26px] md:text-[34px] xl:text-[40px] font-bold'>
									{' '}
									{index === 5 ? 'Mastermind' : 'Урок'}{' '}
								</div>
								<CardDescription className='p-0 text-center text-[18px] md:text-[20px] xl:text-[23px] font-medium leading-[23px] md:leading-[30px] text-[#ffff] mt-[14px] md:mt-[20px]'>
									{item.descr}
								</CardDescription>
							</Card>
						)
					})}
				</div>
			</div>
		</section>
	)
}
