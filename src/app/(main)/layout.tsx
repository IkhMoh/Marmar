import MessagesIcon from "@/components/client/layout/MessagesIcon";
import SideBar from "@/components/client/layout/SideBar";
import NavBar from "@/components/server/layout/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row-reverse w-screen h-screen overflow-hidden">
      <SideBar />

      <div className="flex-1 overflow-y-auto">
        <NavBar />
        {children}
      </div>
      <MessagesIcon />
    </div>
  );
}
