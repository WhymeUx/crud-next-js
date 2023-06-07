import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "My Website",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <section className="container mx-auto border rounded-lg bg-white">
                    <div className="p-4">{children}</div>
                </section>
            </body>
        </html>
    );
}
