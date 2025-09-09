import SideBar from "@/components/server/SideBar";
import NavBar from "@/components/server/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="md:flex flex-row-reverse ml-[248px]">
      <NavBar />
      {children}

      <SideBar />
    </div>
  );
}
