import Image from 'next/image'
import MainTitle from './main-title'

export default function HowCourseGoes() {
	return (
		<section className='py-[20px] lg:py-[80px] 2xl:py-[100px] px-[20px] lg:px-[60px] bg-[#e1a421]'>
			<div className='container p-0 '>
				<MainTitle
					text='ЯК БУДЕ ПРОХОДИТИ НАВЧАННЯ?'
					className='mb-[40px] xl:mb-[100px] lg:mb-[60px] !leading-normal text-center '
				/>
				<div className='flex lg:justify-between justify-evenly flex-wrap'>
					<div className='w-[300px] lg:w-[400px] xl:h-[660px] lg:h-[520px] h-[420px] bg-slate-100 py-[30px] px-[20px] rounded-2xl xl:text-[28px] lg:text-[24px] text-[18px] lg:my-[20px] my-[10px] mx-[5px]'>
						<Image
							src='/telegram-black.png'
							className='m-auto mb-[20px] w-[50px] h-[50px] lg:w-[75px] lg:h-[75px]'
							alt='main'
							width={74}
							height={74}
						/>
						<div>
							Після оплати ти попадеш в
							<span className='text-[#e1a421] font-bold mx-[5px]'>
								закритий Telegram канал
							</span>
							предзапису курсу і на тебе буде чекати подарунок. 1 серпня на
							каналі будуть викладені уроки курсу і ти зможеш пройти їх в
							зручний час. Також, в закритому каналі буде анонс про mastermind.
						</div>
					</div>
					<div className='w-[320px] lg:w-[400px] xl:h-[660px] lg:h-[520px] h-[420px] bg-slate-100 py-[30px] px-[20px] rounded-2xl xl:text-[28px] lg:text-[24px] text-[18px] lg:my-[20px] my-[10px] mx-[5px]'>
						<Image
							src='/results.png'
							className='m-auto mb-[20px] w-[50px] h-[50px] lg:w-[75px] lg:h-[75px]'
							alt='main'
							width={74}
							height={74}
						/>
						<div>
							Уроки стислі й без зайвої інформації, щоб ти якнайшвидше отримала
							результат. Всі запитання
							<span className='text-[#e1a421] font-bold mx-[5px]'>
								можна задати мені в особисті повідомлення.
							</span>
						</div>
					</div>
					<div className='w-[320px] lg:w-[400px] xl:h-[660px] lg:h-[520px] h-[420px] bg-slate-100 py-[30px] px-[20px] rounded-2xl xl:text-[28px] lg:text-[24px] text-[18px] lg:my-[20px] my-[10px] mx-[5px]'>
						<Image
							src='/unlimited.png'
							className='m-auto mb-[20px] w-[50px] h-[50px] lg:w-[75px] lg:h-[75px]'
							alt='main'
							width={74}
							height={74}
						/>
						<div>
							Доступ до уроків зберігається
							<span className='text-[#e1a421] font-bold mx-[5px]'>
								назавжди
							</span>
						</div>
					</div>
					<div className='w-[320px] lg:w-[400px] xl:h-[660px] lg:h-[520px] h-[420px] bg-slate-100 py-[30px] px-[20px] rounded-2xl xl:text-[28px] lg:text-[24px] text-[18px] lg:my-[20px] my-[10px] mx-[5px]'>
						<Image
							src='/talk.png'
							className='m-auto mb-[20px] w-[50px] h-[50px] lg:w-[75px] lg:h-[75px]'
							alt='main'
							width={74}
							height={74}
						/>
						<div>
							Наприкінці курсу я запрошу тебе на
							<span className='text-[#e1a421] font-bold mx-[5px]'>
								онлайн зустріч зі мною,
							</span>
							 де розповім ще багато цікавого про те, як експертам реалізовувати
							свій потенціал на запусках нових продукті і послуг
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
