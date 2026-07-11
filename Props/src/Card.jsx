const Card = ({title, description, image, color}) => {
    return (
        <div className="card" style={{
            backgroundColor: color
        }}>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={image}/>
        </div>
    )
}

export default Card