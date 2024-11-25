import Assignments from '@/app/components/dashboard/Assignments'
import EnrolledCourses from '@/app/components/dashboard/EnrolledCourses'
import ExamBoard from '@/app/components/dashboard/ExamBoard'
import UpperPart from '@/app/components/dashboard/UpperPart'

const Dashboard = () => {
  return (
    <main className='' >
      <UpperPart />

      <section className='grid grid-cols-12'>
        <section className='col-span-9 space-y-6 pl-7'>
          <section className='h-72 -mt-6'>
            <EnrolledCourses />
          </section>
          <section>
            <ExamBoard />
          </section>
        </section>
        <section className='col-span-3'>
          <Assignments />
        </section>
      </section>

    </main>
  )
}

export default Dashboard