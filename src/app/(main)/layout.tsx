import MessagesIcon from "@/components/client/MessagesIcon";
import SideBar from "@/components/client/SideBar";
import NavBar from "@/components/server/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row-reverse w-screen h-screen overflow-hidden">
      <div className="">
        <SideBar />
      </div>

      <div className="flex-1 overflow-y-auto">
        <NavBar />
        {children}
      </div>
      <MessagesIcon />
    </div>
  );
}
