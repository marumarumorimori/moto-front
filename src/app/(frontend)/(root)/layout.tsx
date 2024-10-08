import Header from "@/components/Header";

import "@/styles/global.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-dvh">
        <Header></Header>
        {/* <div className="flex "> */}
        <main className="p-4"> {children}</main>
        {/* </div> */}
      </body>
    </html>
  );
}
