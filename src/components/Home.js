import Lists from "./Lists";
import useFetch from "../shared/useFetch";

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch("/blogs");

  return (
    <div className="home">
      {error && <p>{error}</p>}
      {isLoading && <p>Loding....</p>}
      {blogs && <Lists blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
