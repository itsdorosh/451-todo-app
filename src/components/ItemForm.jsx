function ItemForm({ onAdd }) {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="New task" />
      <button type="submit">Add</button>
    </form>
  )
}

export default ItemForm
