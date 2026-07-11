const OtherEvents = () => {

    const handleClick = () => {
        alert('Button has been Clicked')
    }

    const handleHover = () => {
        alert('Button has been Hoverd')
    }

    const handleDoubleClick = () => {
        alert('Button has been Double Clicked')
    }
    return (
        <nav>
            <button onClick={handleClick}>Click</button>
            <button onMouseOver={handleHover}>Hover</button>
            <button onDoubleClick={handleDoubleClick}>Double Click</button>
        </nav>
    )
}

export default OtherEvents