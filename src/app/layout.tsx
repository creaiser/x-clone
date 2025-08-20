import RightBar from "@/components/RightBar";
import "./globals.css";
import LeftBar from "@/components/LeftBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-between items-center h-screen">
          <div className=""><LeftBar /></div>
          <div className="">{children}</div>
          <div className=""><RightBar /></div>
        </div>
      </body>
    </html>
  );
}