import SideBar from "@/components/server/SideBar";
import NavBar from "@/components/server/NavBar";
import { MessageCircleMore } from "lucide-react";
import MessagesIcon from "@/components/client/MessagesIcon";

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
      <MessagesIcon />
    </div>
  );
}
