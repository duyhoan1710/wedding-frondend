import { Providers } from "./providers";
import Sidebar from "./common/Sidebar";
import NavBar from "./common/NavBar";
import Breadcrumb from "./common/Breadcrumb";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-row font-inter lg:flex">
      <Sidebar />

      <div className="flex-grow">
        <Providers>
          <NavBar />
          <div className="min-h-[calc(100vh-69px)] px-12 pt-10 pb-6">
            {/* <Breadcrumb /> */}
            {children}
          </div>
        </Providers>
      </div>
    </div>
  );
}
