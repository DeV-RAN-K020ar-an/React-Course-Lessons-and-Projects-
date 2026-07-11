const Button = () => {
    const handleFacebookClick = () => {
        alert('Facebook button has been Clicked...')
    }
    // --- Seperation of Concern ---

    const handleClick = (text) => {
        alert(text)
    }
    return (
        <nav>
            {/* <button onClick={handleFacebookClick}>Facebook</button>
            <button onClick={() => {
                alert('Instagram Button Has Been Clicked !')
            }}>Instagram</button>
            <button onClick={() => alert('Telegram Button Has Been Clicked !')}>Telegram</button> */}

            <button onClick={() => handleClick('Facebook clicked...')}>Facebook</button>
            <button onClick={() => handleClick('Instagram clicked...')}>Instagram</button>
            <button onClick={() => handleClick('Telegram clicked...')}>Telegram</button>
        </nav>
    )
}

export default Button