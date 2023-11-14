import Banner from "./components/banner/Banner";
import CallToAction from "./components/call-to-actions/CallToAction";
import Hero from "./components/hero/Hero";
import Mission from "./components/mission/Mission";

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />

      <CallToAction />

      <Banner />

      <Mission />
    </>
  );
}
