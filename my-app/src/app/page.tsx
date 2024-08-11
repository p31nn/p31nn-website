import { Section, Container, Article } from "@/components/craft";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Section>
      <Container>
        <h1 className="text-slate-800 font-black">Hi, I&apos;m Peam 👋🏻</h1>
        <h3 className="text-slate-500">💊Pharmacy Student | Web Development Enthusiast | AI & Financial Literacy Explorer</h3>
        <p className="text-slate-600">Welcome to my personal space! I’m Peam, a dedicated pharmacy student with a passion for web development, large language models (LLMs), and financial literacy. Dive into my journey as I blend the world of healthcare with the ever-evolving fields of technology and finance.</p>
      </Container>
      <Container>
        <Button>Get to know me</Button>
      </Container>
    </Section>
  );
}
