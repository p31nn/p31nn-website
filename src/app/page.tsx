import Image from "next/image";
import { Layout,Main,Section,Container,Article, } from "@/components/craft";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <AuroraBackground>
    <Main>
    <Section>
      <Container>
        <Hero />
      </Container>
    </Section>
  </Main>
    </AuroraBackground>
  );
}
