'use client'

import { useEffect, useState } from 'react'
import Courses from '@/components/Courses'
import Loading from './loading'
import Link from 'next/link'
import CourseSearch from '@/components/CourseSearch'

const HomePage = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses')
      const data = await res.json()

      setCourses(data)
      setLoading(false)
    }

    fetchCourses()
  }, [])

  if (loading) {
    return <Loading />
  }

  function getSearchResults(courses) {
    setCourses(courses)
  }

  return (
    <>
      <h1>Welcome To Traversy Meida</h1>
      <CourseSearch getSearchResults={getSearchResults} />
      <Courses courses={courses} />
    </>
  )
}

export default HomePage
