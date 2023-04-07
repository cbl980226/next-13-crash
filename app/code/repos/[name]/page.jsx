import { Suspense } from 'react'
import Link from 'next/link'
import Repo from '@/components/Repo'
import RepoDirs from '@/components/RepoDirs'

const RepoPage = ({ params }) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back To Repositories
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={params.name} />
      </Suspense>

      {/* <RepoDirs name={params.name} /> */}
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={params.name} />
      </Suspense>
    </div>
  )
}

export default RepoPage
