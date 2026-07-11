const InputEvents = () => {
    const handleChange = () => {
        alert('Something Typed into Input')
    }
    const handleKeyDown = (event) => {
        alert(event.key)
    }
    const handleKeyUp = () => {
        alert('Some Key has been Clicked and then up')
    }
  return (
    <nav>
        <input onChange={handleChange}/>

        <input onKeyDown={handleKeyDown} placeholder="onkeyDown" />

        <input onKeyUp={handleKeyUp} placeholder="onKeyUp"/>
    </nav>
  )
}

export default InputEvents