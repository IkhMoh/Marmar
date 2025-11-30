import SideBar from "@/components/client/SideBar";
import NavBar from "@/components/server/NavBar";
import MessagesIcon from "@/components/client/MessagesIcon";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <div className=" ">
        {" "}
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
