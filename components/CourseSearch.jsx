'use client'

import { useState } from 'react'

const CourseSearch = ({ getSearchResults }) => {
  const [query, setQuery] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    const res = await fetch(`/api/courses?q=${query}`)
    const courses = await res.json()
    getSearchResults(courses)
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        className="search-input"
        placeholder="Search Courses..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <button className="search-button" type="submit">
        Submit
      </button>
    </form>
  )
}

export default CourseSearch
