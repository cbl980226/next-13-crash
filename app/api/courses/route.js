import { NextResponse } from 'next/server'
import courses from './data.json'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q') || searchParams.get('query')
  if (query) {
    const filteredCourses = courses.filter(course => {
      return course.title.toLowerCase().includes(query.toLowerCase())
    })
    return NextResponse.json(filteredCourses)
  }

  return NextResponse.json(courses)
}

export async function POST(request) {
  const { title, level, description, link } = await request.json()

  const course = {
    id: courses.length + 1,
    title,
    level,
    description,
    link
  }

  courses.push(course)

  return NextResponse.json({
    message: 'Course created successfully'
  })
}
