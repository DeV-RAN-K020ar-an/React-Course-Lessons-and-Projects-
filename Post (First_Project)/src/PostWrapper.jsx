import Post from "./Post/Post";
import posts from "./data";

const PostWrapper = () => {
  return (
    <section className="post-wrapper">
      {posts.map((post) => {
        return (
          <Post
            user={post.user}
            location={post.location}
            profile={post.profile}
            image={post.image}
            caption={post.caption}
          />
        );
      })}
    </section>
  );
};

export default PostWrapper;
