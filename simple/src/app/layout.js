import "./globals.css";

export const metadata = {
  title: "Simple tools",
  description: "A webpage with some simple tools, purely for my enjoyment and improvement.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
