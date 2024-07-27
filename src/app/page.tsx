
import CourseFor from '@/components/course-for'
import Course from '@/components/course'
import ExpertsReviews from '@/components/experts-reviews'

import Footer from '@/components/footer'
import MyActivities from '@/components/my-activities'
import FirstScreen from '@/components/first-screen'
import Benefits from '@/components/benefits'
import AboutMe from '@/components/about-me'
import Program from '@/components/program'
import Reviews from '@/components/reviews'
import Faq from '@/components/faq'
import BuyCourse from '@/components/buy-course'
import Popup from '@/components/popup'
import HowCourseGoes from '@/components/how-course-goes'


export default function Home() {
	return (
		<main className=''>
			<FirstScreen />
			<Benefits />
			<AboutMe />
			<MyActivities />
			<Course />
			<Program />
			<ExpertsReviews />
			{/* <Reviews /> */}
			<HowCourseGoes/>
			<Faq />
			<CourseFor />
			<BuyCourse/>
			<Footer/>
			{/* <Popup/> */}
		</main>
	)
}
