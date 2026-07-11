const Greeting = ({ children , title}) => {
    return (
        <div className="box">
            <h1>{title}</h1>
            {children}
        </div>
    )
}
export default Greeting