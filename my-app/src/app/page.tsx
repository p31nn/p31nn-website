import { Section, Container, Article } from "@/components/craft";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <AuroraBackground>
      <Section>
        <Container>
          <h1 className="text-primary">Hi, I&apos;m Peam 👋🏻</h1>
          <h3>💊Pharmacy Student | Web Development Enthusiast | AI & Financial Literacy Explorer</h3>
          <p className="text-muted-foreground">Welcome to my personal space! I’m Peam, a dedicated pharmacy student with a passion for web development, large language models (LLMs), and financial literacy. Dive into my journey as I blend the world of healthcare with the ever-evolving fields of technology and finance.</p>
        </Container>
      </Section>
    </AuroraBackground>
  );
}
