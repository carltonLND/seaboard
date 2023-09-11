export function Button() {
  const handleClick = () => {
    alert("CLICKED")
  }

  return <button onClick={handleClick}>hello</button>
}
