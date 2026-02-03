import RightBar from "@/components/RightBar";
import "./globals.css";
import LeftBar from "@/components/LeftBar";
import { ImageKitProvider } from '@imagekit/next';

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ImageKitProvider urlEndpoint={process.env.PUBLIC_IMAGEKIT_URL_ENDPOINT!}>
          {/* MODAL POST CREATING  */}
          <div>
            {modal}
          </div>
          

          <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto flex relative">
            
            {/* Left Bar - Fixed */}
            <div className="w-[69px] sm:w-[89px] lg:w-[69px] xl:w-[89px]  xxl:w-[277px] shrink-0">
              <LeftBar />
            </div>
            
            {/* Main Content */}
            <div className="flex-1 lg:max-w-[600px]  border-borderGray">
              {children}
            </div>
            
            {/* Right Bar - Fixed */}
            <div className="hidden lg:block  w-[290px] xl:w-[350px] shrink-0">
              <RightBar />
            </div>
          </div>
        </ImageKitProvider>
      </body>
    </html>
  );
}