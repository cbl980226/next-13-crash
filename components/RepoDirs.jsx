import Link from 'next/link'

async function fetchContents(name) {
  const response = await fetch(
    `https://api.github.com/repos/cbl980226/${name}/contents`,
    {
      next: {
        revalidate: 60 // In minutes
      }
    }
  )
  const contents = await response.json()
  return contents
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchContents(name)
  const dirs = contents.filter(content => content.type === 'dir')

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map(dir => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default RepoDirs
