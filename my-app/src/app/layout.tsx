import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/Styles/globals.css";

//import craft
import { Layout, Main } from "@/components/craft";

//import aceternity ui
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "P31NN",
  description: "Generated for P31NN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <body className={inter.className}>
        <Main>{children}</Main>
      </body>
    </Layout>
  );
}
