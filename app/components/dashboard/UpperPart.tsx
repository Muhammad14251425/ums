'use client'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import examdepart from "@/public/dashboard/exam_department/Isolation_Mode.png"
import Image from 'next/image'
import React from 'react'
import { Progress } from '@/components/ui/progress'
import { Calendar } from '@/components/ui/calendar'

const UpperPart = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const semester = 3
    const totalSemesters = 8
    const progress = (semester / totalSemesters) * 100
    return (
        <section className='grid grid-cols-12' >
            <div className='col-span-9 pl-7 py-7 w-full'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-[24px] leading-[36px] font-normal'>👋 Welcome, Muhammad Fawwad Ahmed!</h2>
                    <p className='text-xs' >Todays Date</p>
                </div>

                <div className='flex mt-5 pl-7'>
                    <div className='py-5 space-y-5'>
                        <h3 className='text-[24px] leading-[36px] font-semibold'>Get Involved - Join a Club Today!</h3>

                        <p className='font-normal' >Explore your interests and meet like-minded students by joining one of our many clubs. Whether you're into
                            sports, arts, or academics, there's a club for you. Find your community!</p>

                        <Button className='text-white bg-[#0C1E33]'>
                            Learn More
                            <ArrowRight />
                        </Button>
                    </div>
                    <Image src={examdepart} alt='exam department' className=' scale-110 mt-6' />
                </div>
            </div>

            <div className='col-span-3 px-8 py-4 h-96 space-y-4 flex flex-col items-center'>
                <div className="flex items-start flex-col gap-2 text-sm text-gray-600 w-full">
                    <span>Semester <span className='font-semibold text-lg'>{semester}</span> of {totalSemesters}</span>
                    <div className="w-full">
                        <Progress value={progress} className="h-2" />
                    </div>
                </div>

                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md"
                />
            </div>
        </section>
    )
}

export default UpperPart