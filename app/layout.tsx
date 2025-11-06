import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Artesanía Orgónica - Productos Artesanales Naturales",
  description: "Descubre nuestra selección única de productos artesanales orgánicos hechos con amor y dedicación. Calidad premium para tu hogar.",
  keywords: ["artesanía", "orgánico", "productos naturales", "hecho a mano", "artesanal"],
  authors: [{ name: "Artesanía Orgónica" }],
  openGraph: {
    title: "Artesanía Orgónica - Productos Artesanales Naturales",
    description: "Productos artesanales orgánicos de calidad premium",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="theme-transition">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
