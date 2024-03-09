import MainHeaderBackground from "@/components/main-header/main-header-background";
import "./globals.css";
import MainHeaderComponent from "@/components/main-header/main-header";



export const metadata = {
  title: "Meals App",
  description: "community to share meals with",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeaderComponent />
        {children}
      </body>
    </html>
  );
}
