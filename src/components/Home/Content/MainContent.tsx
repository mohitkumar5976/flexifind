import FreeToWatch from "../../organisms/FreeToWatch";
import PopularCarousel from "../../organisms/PopularCarousel";
import TrendingCarousel from "../../organisms/TrendingCarousel";

const MainContent = () => {
  return (
    <>
      <main className="space-y-10">
        <section aria-label="Trending">
          <TrendingCarousel />
        </section>

        <section aria-label="Free To Watch">
          <FreeToWatch />
        </section>

        <section aria-label="Popular">
          <PopularCarousel />
        </section>
      </main>
    </>
  );
};

export default MainContent;
