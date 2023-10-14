import { useState, useEffect } from "react";
import Lists from "./Lists";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    console.log("Called");
    fetch("http://localhost:7000/blogsS")
      .then((res) => {
        if (!res.ok) {
          throw Error("No data found!!");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, []);

  return (
    <div className="home">
      {error && <p>{error}</p>}
      {isLoading && <p>Loding....</p>}
      {blogs && <Lists blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
