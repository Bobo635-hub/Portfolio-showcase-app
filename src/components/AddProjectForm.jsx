import { useState } from 'react'

function AddProjectForm({ onAddProject }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!title.trim() || !description.trim()) {
      return
    }

    const newProject = {
      id: Date.now(),
      title: title,
      description: description
    }

    onAddProject(newProject)

    setTitle('')
    setDescription('')
  }

  return (
    <section className="add-project">
      <h2>Add Project</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />

        <button type="submit">Add</button>
      </form>
    </section>
  )
}

export default AddProjectForm
