import PostHeader from "./PostHeader"
import PostBody from "./PostBody"
import PostButtons from "./PostButtons"
import PostCaption from "./PostCaption"

const Post = ({user, location, profile, image, caption}) => {
    return (
        <div className="post">
            <PostHeader user={user} profile={profile} location={location} />
            <PostBody image={image} />
            <PostButtons />
            <PostCaption caption={caption} />
        </div>
    )
}   
export default Post