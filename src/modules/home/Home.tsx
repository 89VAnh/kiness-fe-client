import CalculateHeight from "./components/calculate-height/CalculateHeight";
import Carousel from "./components/carousel/Carousel";
import Checklist from "./components/checklist/CheckList";
import LoopText from "./components/loop-text/LoopText";
import MainContent from "./components/main-content/MainContent";
import Movie from "./components/movie/Movie";
import Place from "./components/place/Place";
import QuickList from "./components/quick-list/QuickList";

export default function Home(): JSX.Element {
  return (
    <>
      <Carousel />
      <LoopText />

      <CalculateHeight />

      <QuickList />

      <Checklist />

      <MainContent />

      <Movie />

      <Place />
    </>
  );
}
