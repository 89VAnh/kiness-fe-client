import CTAs from "./components/CTAs";
import NavClear from "./components/NavClear";

export default function CallToAction(): JSX.Element {
  return (
    <div style={{ width: "100%", position: "relative", zIndex: 3 }}>
      <NavClear />

      <CTAs />
    </div>
  );
}
