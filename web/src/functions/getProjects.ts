import { readFileSystem, writeFileSystem } from './fileSystem'

import type { Project } from '$types/payload-types'

export const getProjects = async () => {
  const cachedProjects = await readFileSystem<Project[]>(['payload', 'projects'])

  if (cachedProjects !== null) return cachedProjects.data

  const { docs: projects } = await fetch(
    'https://payload.creatorsgarten.org/api/projects'
  ).then(async o => {
    if (o.ok) return o.json() as Promise<{ docs: Project[] }>
    else throw new Error(await o.text())
  })

  await writeFileSystem(['payload', 'projects'], projects)

  return projects
}
