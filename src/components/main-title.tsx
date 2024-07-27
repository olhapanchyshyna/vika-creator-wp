
import { cn } from '@/lib/utils'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

type MainTitleProps = {
	text: string
	className?: string
}

export default function MainTitle({ text, className }: MainTitleProps) {
	return (
		<h2
			className={cn(
				`text-[30px] sm:text-[36px] xl:text-[46px] 2xl:text-[65px] text-white leading-[42px] font-bold 2xl:leading-[64px] uppercase ${raleway.className}`,
				className
			)}
		>
			{text}
		</h2>
	)
}
