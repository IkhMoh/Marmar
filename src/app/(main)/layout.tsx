import SideBar from "@/components/client/SideBar";
import NavBar from "@/components/server/NavBar";
import MessagesIcon from "@/components/client/MessagesIcon";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="md:flex flex-row-reverse ml-[248px] ">
      <NavBar />
      {children}

      <SideBar />
      <MessagesIcon />
    </div>
  );
}
