import { useState } from 'react'
import Header from '../components/Header'
import AddProjectForm from '../components/AddProjectForm'
import SearchBar from '../components/SearchBar'
import ProjectList from '../components/ProjectList'

const projectsData = [
  {
    id: 1,
    title: 'tea 1',
    description: 'Description for Project 1'
  },
  {
    id: 2,
    title: 'tea 2',
    description: 'Description for Project 2'
  }
]

function Home() {
  const [projects, setProjects] = useState(projectsData)
  const [searchTerm, setSearchTerm] = useState('')

  function handleAddProject(newProject) {
    setProjects([...projects, newProject])
  }

  function handleSearchChange(value) {
    setSearchTerm(value)
  }

  // Filter projects based on the search term
  const filteredProjects = projects.filter((project) => {
    return (
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  return (
    <>
      <Header />

      <main>
        <AddProjectForm onAddProject={handleAddProject} />

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />

        <ProjectList projects={filteredProjects} />
      </main>
    </>
  )
}

export default Home