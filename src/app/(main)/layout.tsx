import SideBar from "@/components/server/SideBar";
import NavBar from "@/components/server/NavBar";
import Providers from "@/components/client/Provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="md:flex flex-row-reverse ml-[248px]">
      <NavBar />
      <Providers>{children}</Providers>

      <SideBar />
    </div>
  );
}
