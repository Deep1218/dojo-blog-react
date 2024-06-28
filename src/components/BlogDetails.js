import { useParams, useHistory } from "react-router-dom";
import useFetch, { apiEndPoint } from "../shared/useFetch";
const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isLoading, error } = useFetch("/blogs/" + id);
  const history = useHistory();
  const hanldeDelete = () => {
    fetch(apiEndPoint + `/blogs/${blog.id}`, { method: "DELETE" }).then(() =>
      history.push("/")
    );
  };
  return (
    <div className="blog-details">
      {error && <p>{error}</p>}
      {isLoading && <p>Loding....</p>}
      {blog && (
        <div>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={hanldeDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
