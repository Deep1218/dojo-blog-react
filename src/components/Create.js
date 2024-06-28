import { useState } from "react";
import { apiEndPoint } from "../shared/useFetch";
import { useHistory } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Jay");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsLoading(true);
    fetch(apiEndPoint + "/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then(() => {
        console.log("New blog published");
        setIsLoading(false);
        history.push("/");
      })
      .catch((err) => {
        console.log("Err in publishing blog", err);
        setIsLoading(false);
      });
  };
  return (
    <div className="create">
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Content:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>Author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        >
          <option value="Jay">Jay</option>
          <option value="Parth">Parth</option>
        </select>
        {!isLoading && <button>Publish</button>}
        {isLoading && <button>Publishing...</button>}
      </form>
    </div>
  );
};

export default Create;
