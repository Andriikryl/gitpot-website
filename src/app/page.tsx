import Hero from "@/components/hero/Hero";
import PreviBlock from "@/components/previBlock/PreviBlock";
import Enviroments from "@/components/enviroments/Enviroments";
import Developers from "@/components/developers/Developers";
import Design from "@/components/design/Design";
import Started from "@/components/started/Started";

export default function Home() {
  return (
    <>
      <Hero />
      <PreviBlock />
      <Enviroments />
      <Design />
      <Developers />
      <Started />
    </>
  );
}
