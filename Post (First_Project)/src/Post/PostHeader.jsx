const PostHeader = ({user, profile, location}) => {
    return (
        <div className="post-header">
            <div className="post-header-image">
                <img src={profile}/>
            </div>
            <div className="post-header-text">
                <h3>{user}</h3>
                <p>{location}</p>
            </div>
        </div>
    )
}
export default PostHeader