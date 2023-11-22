import Carousel from "./components/carousel/Carousel";
import Checklist from "./components/checklist/CheckList";
import LoopText from "./components/loop-text/LoopText";
import MainContent from "./components/main-content/MainContent";
import QuickList from "./components/quick-list/QuickList";

export default function Home(): JSX.Element {
  return (
    <>
      <Carousel />
      <LoopText />

      <QuickList />

      <Checklist />

      <MainContent />
    </>
  );
}
