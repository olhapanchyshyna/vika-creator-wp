import { MediaLinks } from '@/components/media-links'
import Link from 'next/link'

export default function Footer() {
	return (
		<section className='bg-white py-[40px] lg:py-[60px] 2xl:py-[80px] lg:px-[60px] px-[20px] -mt-[1px]'>
			<div className='container flex flex-col lg:flex-row justify-between items-center p-0'>
				<div>
					<MediaLinks />
					<div className='mt-[40px]'>© 2024. Усі права захищені </div>
				</div>

				<div className='flex flex-col'>
					<Link className='text-[20px] text-center mt-[10px] lg:mt-0' href='/privacy-policy' target='_blank'>
						Політика конфіденційності
					</Link>
					<Link className='text-[20px] text-center lg:text-start' href='/public-offer' target='_blank'>
						Публічна оферта
					</Link>
				</div>
			</div>
		</section>
	)
}
