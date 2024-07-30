// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { FlipWords } from "../ui/flip-words";


const Hero = () => {
  return (
    <Section>
      <Container>
        <div>
          <h1>
            <Balancer>
              Hi👋🏻, I&apos;m <FlipWords words={["Peam", "P31NN"]}/>
            </Balancer>
          </h1>

          <h3 className="text-muted-foreground">
            <Balancer>
              💊Pharmacy Student | Web Development Enthusiast | AI & Financial Literacy Explorer
            </Balancer>
          </h3>

          <p>
          <Balancer>
            Welcome to my personal space! I’m Peam, a dedicated pharmacy student with a passion for web development, large language models (LLMs), and financial literacy. Dive into my journey as I blend the world of healthcare with the ever-evolving fields of technology and finance.
          </Balancer>
          </p>
        </div>
      </Container>
    </Section>
  );
};



export default Hero;
