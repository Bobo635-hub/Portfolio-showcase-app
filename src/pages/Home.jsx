import { useState } from 'react'
import Header from '../components/Header'
import AddProjectForm from '../components/AddProjectForm'
import SearchBar from '../components/SearchBar'
import ProjectList from '../components/ProjectList'

const projectsData = [
  {
    id: 1,
    title: 'Madagascar- Cinema booking website',
    description: 'A web application that displays a list of movies currently showing, complete with posters, genres, showtimes, and ticket prices. Users can book tickets or watch trailers directly from the interface. The site also features a dynamic background slideshow for a cinematic feel.'
  },
  {
    id: 2,
    title: 'Wordly Dictionary',
    description: `Wordly Dictionary is a single-page web application (SPA) that allows users to search for English words and view their definitions, parts of speech, examples, and pronunciation.

  The application uses the Wiktionary REST API to retrieve word definitions and JavaScript to display the results dynamically without reloading the page.`
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'This is my personal portfolio website, created to showcase my skills, projects, and learning journey as a junior software developer. The portfolio is designed using HTML, CSS, and JavaScript and includes responsive layouts for desktop, tablet, and mobile devices.'
  }
]

function Home() {
  const [projects, setProjects] = useState(projectsData)
  const [searchTerm, setSearchTerm] = useState('')

  // function handleAddProject(newProject) {
  //   setProjects([...projects, newProject])
  // }
  function handleAddProject(newProject) {
  setProjects((previousProjects) => [
    ...previousProjects,
    newProject
  ])
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