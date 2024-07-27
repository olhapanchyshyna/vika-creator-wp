import MainTitle from '@/components/main-title'
import Image from 'next/image'
import Link from 'next/link'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from './ui/carousel'

const styleDescr = `mt-[20px] leading-[26px] mb:leading-[31px] text-[16px] md:text-[18px] lg:text-[23px]`
const styleName = `text-[23px] md:text-[28px] lg:text-[28px] font-medium`
const styleProf = `leading-[21px] md:leading-[30px] text-[18px] md:text-[23px] lg:text-[25px] `

export default function Reviews() {
	return (
		<section className='py-[50px] lg:py-[80px] 2xl:py-[100px] px-[20px] lg:px-[60px] '>
			<div className='container flex flex-col items-center p-0'>
				<MainTitle
					text='Результати клієнтів'
					className='text-center mb-[50px] lg:mb-[100px]'
				/>
				<div>
					<div className='flex justify-between'>
						<div className=' mb-[60px] flex '>
							<Carousel
								className='m-auto rounded-[40px] h-[600px] w-[330px] md:h-[500px] md:w-[580px] lg:h-[560px] lg:w-[760px] py-[20px] md:px-[30px] px-[10px] bg-[#e1a421]'
								opts={{
									align: 'start',
								}}
							>
								<CarouselContent className='w-[420] md:w-[550px] lg:w-[730px] '>
									<CarouselItem className='rounded-2xl '>
										<div className='text-white text-[25px] my-[10px]'>
											<Link
												href='https://www.instagram.com/iryna_farbota/'
												target='_blank'
												className='flex items-center mb-[10px]'
											>
												<Image
													src='/woman.png'
													className='md:mr-[20px] mr-[10px] lg:w-[100px] lg:h-[100px] md:w-[60px] md:h-[60px] w-[50px] h-[50px]'
													alt='profile'
													width={100}
													height={100}
												/>
												<div>
													<div className={`${styleName}`}>Ірина</div>
													<div className={`${styleProf}`}>
														смм спеціалістка, модель
													</div>
												</div>
											</Link>

											<div className={`${styleDescr}`}>
												Хотіла подякувати за експертний розбір особистості. Вже
												давно хотіла зрозуміти в яких напрямках рухатись, та що
												найкраще використовувати в позиціонуванні себе, як
												експерта. Я подивилась на свої цілі та загалом на себе
												новими очима, це мене надихнуло на нові звершення та
												трішки зміну фокусу в роботі. Окрім того консультація з
												тобою дала зрозуміти, що ж варто все-таки відставити, а
												що варто залишити. Дякую за допомогу з вибором напрямку
												та прощупування професійної особистості в мені. Наразі я
												набагато краще розумію в якому напрямку рухатимусь 🤍
											</div>
										</div>
									</CarouselItem>
									<CarouselItem className=' '>
										<div className='text-white text-[25px] my-[10px]'>
											<Link
												href='https://www.instagram.com/gaya.arushanian.art/ '
												target='_blank'
												className='flex items-center mb-[10px]'
											>
												<Image
													src='/woman.png'
													className='md:mr-[20px] mr-[10px] lg:w-[100px] lg:h-[100px] md:w-[60px] md:h-[60px] w-[50px] h-[50px]'
													alt='profile'
													width={100}
													height={100}
												/>
												<div>
													<div className={`${styleName}`}>Гаяне</div>
													<div className={`${styleProf}`}>
														Підприємиця, арт менторка, авторка освітніх курсів
														для митців
													</div>
												</div>
											</Link>
											<div className='text-white text-[25px] my-[10px]'>
												<div className={`${styleDescr}`}>
													Робили разом запуск. Вікторія дуже чітко розкрила мою
													експертність, підготувала план запуску. Підтримувала
													запуск та давала чіткі рекомендації щодо роботи.{' '}
												</div>
											</div>
										</div>
									</CarouselItem>
									<CarouselItem className=' '>
										<div className='text-white text-[25px] my-[10px]'>
											<Link
												href='https://www.instagram.com/korovytskyi/ '
												target='_blank'
												className='flex items-center mb-[10px]'
											>
												<Image
													src='/man.png'
													className='md:mr-[20px] mr-[10px] lg:w-[100px] lg:h-[100px] md:w-[60px] md:h-[60px] w-[50px] h-[50px]'
													alt='profile'
													width={100}
													height={100}
												/>
												<div>
													<div className={`${styleName}`}>Сергій</div>
													<div className={`${styleProf}`}>
														експерт зі схуднення, тренер
													</div>
												</div>
											</Link>
											<div className='text-white text-[25px] my-[10px]'>
												<div className={`${styleDescr}`}>
													Дякую за консультацію! Багато чого для себе взвяв
													корисного в напрямку розкриття експертності! Дуже
													продуктивно та результативно
												</div>
											</div>
										</div>
									</CarouselItem>
									<CarouselItem className=' '>
										<div className='text-white text-[25px] my-[10px]'>
											<Link
												href='https://www.instagram.com/olyasitkovskaya/ '
												target='_blank'
												className='flex items-center mb-[10px]'
											>
												<Image
													src='/woman.png'
													className='md:mr-[20px] mr-[10px] lg:w-[100px] lg:h-[100px] md:w-[60px] md:h-[60px] w-[50px] h-[50px]'
													alt='profile'
													width={100}
													height={100}
												/>
												<div>
													<div className={`${styleName}`}>Ольга</div>
													<div className={`${styleProf}`}>
														експертка з голосу
													</div>
												</div>
											</Link>
											<div className='text-white text-[25px] my-[10px]'>
												<div className={`${styleDescr}`}>
													Нарешті я запустила передзапуск! Просто повідомляю
													тобі, щоб ти знала, що твої зусилля не пройшли
													даремно! Потік закрився менше ніж за годину (10 осіб)
												</div>
											</div>
										</div>
									</CarouselItem>
									<CarouselItem className=' '>
										<div className='text-white text-[25px] my-[10px]'>
											<Link
												href=''
												target='_blank'
												className='flex items-center mb-[10px]'
											>
												<Image
													src='/woman.png'
													className='md:mr-[20px] mr-[10px] lg:w-[100px] lg:h-[100px] md:w-[60px] md:h-[60px] w-[50px] h-[50px]'
													alt='profile'
													width={100}
													height={100}
												/>
												<div>
													<div className={`${styleName}`}>Світлана</div>
													<div className={`${styleProf}`}>
														нумізмат, історик
													</div>
												</div>
											</Link>
											<div className='text-white text-[25px] my-[10px]'>
												<div className={`${styleDescr}`}>
													Завдяки розпаковці відчула як складне презентувати
													просто. Віка є вираженням того як жити сьогодні:
													будувати проект з найменшими витратами, пояснювати
													легко і що потрібно оточуючим.
												</div>
											</div>
										</div>
									</CarouselItem>
									<CarouselItem className=' '>
										<Link
											href='https://www.instagram.com/margaritasichkar/'
											target='_blank'
											className='flex items-center mb-[10px]'
										>
											<Image
												src='/woman.png'
												className='md:mr-[20px] mr-[10px] lg:w-[100px] lg:h-[100px] md:w-[60px] md:h-[60px] w-[50px] h-[50px]'
												alt='profile'
												width={100}
												height={100}
											/>
											<div className='text-white text-[23px] my-[10px]'>
												<div className={`${styleName}`}>Маргарита Січкарь</div>
												<div className={`${styleProf}`}>
													блогерка, книжкова продюсерка, авторка освітніх курсів
													для авторів
												</div>
											</div>
										</Link>
										<iframe
											src='https://www.youtube.com/embed/mwwCLSFSZC0'
											className='w-[100%] h-[300px]'
											allowFullScreen
										></iframe>
									</CarouselItem>

									<CarouselItem className=' '>
										<Link
											href='https://www.instagram.com/natalia_finelife/'
											target='_blank'
											className='flex items-center mb-[10px]'
										>
											<Image
												src='/woman.png'
												className='md:mr-[20px] mr-[10px] lg:w-[100px] lg:h-[100px] md:w-[60px] md:h-[60px] w-[50px] h-[50px]'
												alt='profile'
												width={100}
												height={100}
											/>
											<div className='text-white text-[23px] my-[10px]'>
											<div className={`${styleName}`}>
													
													Наталія
												</div>
												<div className={`${styleProf}`}>
													духовний наставник, авторка освітніх продуктів
												</div>
											</div>
										</Link>
										<iframe
											src='https://www.youtube.com/embed/cReZt0TERyc'
											className='w-[100%] h-[300px]'
											allowFullScreen
										></iframe>
									</CarouselItem>
								</CarouselContent>
								<CarouselPrevious />
								<CarouselNext />
							</Carousel>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
