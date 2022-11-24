import { useEffect, useState } from 'react'
import Projects, { ProjectType } from '../../Assets/Projects'
import Tags from './Tags'
import Cards from './Cards'

export const getTags = (projects: ProjectType[]) =>
    [...new Set(projects.map(project => project.tags).flat())].sort()

export const findProject = (slug: string) => Projects.find(project =>
    project.slug === slug)

export const tags = getTags(Projects)

export type ExploreProjectsState = {
    tagsAvailable: string[],
    tagsSelected: string[],
    projectsThatFit: ProjectType[]
}

export const useExploreProjects = () => {
    const [filter, setFilter] = useState<ExploreProjectsState>({
        tagsAvailable: tags,
        tagsSelected: [],
        projectsThatFit: Projects
    })

    const onTagChange = (selected: boolean, tag: string) => setFilter(filter => {
        if (selected)
            return {
                ...filter,
                tagsSelected: [...filter.tagsSelected, tag]
            }

        return {
            ...filter,
            tagsSelected: filter.tagsSelected
                .filter(tagSelected => tagSelected !== tag)
        }
    })

    useEffect(() => {
        setFilter(filter => {
            if (filter.tagsSelected.length === 0)
                return {
                    ...filter,
                    tagsAvailable: tags,
                    projectsThatFit: Projects
                }            

            const projectsThatFit = Projects.filter(project =>
                filter.tagsSelected.every(tag =>
                    project.tags.includes(tag)
                )
            )

            const tagsAvailable = getTags(projectsThatFit)

            return {
                ...filter,
                tagsAvailable: tagsAvailable,
                projectsThatFit: projectsThatFit
            }
        })
    }, [filter.tagsSelected])

    return {
        onTagChange:onTagChange,
        tags:filter.tagsAvailable,
        projects:filter.projectsThatFit
    }
}

export {
    Tags,
    Cards
}