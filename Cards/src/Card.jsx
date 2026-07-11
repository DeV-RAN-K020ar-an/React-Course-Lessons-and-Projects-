const Card = ({ detail }) => {
  return (
    <div className="card" style={{
        backgroundColor: detail.color,
        boxShadow: '0px 0px 10px 2px ' + detail.color,
    }}>
        <img src={detail.image}/>
        <h2>{detail.label}</h2>
    </div>
  )
}

export default Card