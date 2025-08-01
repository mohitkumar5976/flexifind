import { useContext } from "react";
import Banner from "../components/Home/Banner/Banner";
import { AppContext } from "../contexts/AppContext";
import SearchContainer from "../components/Home/Search/SearchContainer";
import MainContent from "../components/Home/Content/MainContent";

const Home = () => {
  const { search, loading } = useContext(AppContext);

  return (
    <>
      <section className="pt-8">
        <Banner />
      </section>
      <main>
        {(search?.length ?? 0) > 0 ? (
          <SearchContainer search={search} loading={loading} />
        ) : (
          <MainContent />
        )}
      </main>
    </>
  );
};

export default Home;
