"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import MainMessagePanel from "./MainMessagePanel";
import NewMessagePanel from "./NewMessagePanel";
import { Send } from "lucide-react";

export default function MessagesIcon() {
  const [openPanel, setOpenPanel] = useState<"main" | "new" | null>(null);

  const pathname = usePathname();

  const isDirect = pathname.startsWith("/direct");

  if (isDirect) return null;

  return (
    // todo : real data user

    <>
      <div
        onClick={() => setOpenPanel("main")}
        className="fixed bottom-8 right-9 flex items-center space-x-2 px-5 py-5 rounded-full bg-white shadow-md hover:opacity-90 transition z-50 cursor-pointer"
      >
        <Send size={25} className="cursor-pointer" />

        <span className="font-bold text-lg leading-none ml-2">Messages</span>
        <div className="flex -space-x-2 flex-row">
          <div className="w-6 h-6 rounded-full bg-gray-600 border-2 border-white z-50  " />
          <div className="w-6 h-6 rounded-full bg-gray-500 border-2 border-white z-40" />
          <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white z-30" />
          <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white flex justify-center text-center text-white text-xs font-bold z-10">
            …
          </div>
        </div>
      </div>

      {openPanel === "main" && (
        <MainMessagePanel
          onClose={() => setOpenPanel(null)}
          onNewMessage={() => setOpenPanel("new")}
        />
      )}
      {openPanel === "new" && (
        <NewMessagePanel
          onClose={() => setOpenPanel(null)}
          onBack={() => setOpenPanel("main")}
        />
      )}
    </>
  );
}
//  {isMainOpen && (
//         <Card className="p-0 w-[360px] h-[521px] fixed bottom-6 right-8 z-50 shadow-lg rounded-xl border bg-white overflow-hidden">
//           <CardContent className="p-0 relative h-full">
//             {/* HEADER */}
//             <div className="flex justify-between items-center px-4 py-3 border-b">
//               <div className="flex items-center gap-2">
//                 <h2 className="font-bold text-md">Messages</h2>
//                 <span
//                   className="inline-flex items-center justify-center  bg-red-500  text-white text-xs font-bold rounded-full px-2 h-5 min-w-[1.25rem]
// "
//                 >
//                   6
//                 </span>
//               </div>
//               {/* icons */}
//               <div className="flex items-center space-x-1.5">
//                 <Link href="/direct" className="flex">
//                   <Expand
//                     strokeWidth={1}
//                     size={24}
//                     className="transition-transform duration-200 hover:scale-110"
//                   />
//                 </Link>

//                 <button
//                   onClick={() => setOpen(false)}
//                   className="flex cursor-pointer"
//                 >
//                   <X
//                     strokeWidth={1}
//                     size={32}
//                     className="transition-transform duration-200 hover:scale-110"
//                   />
//                 </button>
//               </div>
//             </div>

//             {/* LIST */}
//             <div className="overflow-y-auto h-full w-full px-3  space-y-2">
//               {users.map((u) => (
//                 <div
//                   key={u.id}
//                   className="flex items-center justify-between cursor-pointer hover:bg-gray-50 rounded-lg px-2 py-2"
//                 >
//                   {/*_avatar + name + subtext */}
//                   <div className="flex items-center gap-3">
//                     {/* Avatar فارغ */}
//                     <div className="w-12 h-12 rounded-full bg-gray-200" />

//                     <div>
//                       <div className="font-semibold text-sm">
//                         {/* هنا تحط اسم المستخدم */}
//                       </div>
//                       <div className="text-xs text-gray-500 truncate max-w-[180px]">
//                         {/* هنا تحط آخر رسالة */}
//                       </div>
//                     </div>
//                   </div>

//                   {/* time */}
//                   <div className="text-xs text-gray-500">{/* هنا الوقت */}</div>
//                 </div>
//               ))}
//             </div>

//             {/* Floating Create Button */}
//             <button
//               onClick={() => {
//                 setNewMessageOpen(true);
//                 setMainOpen(false);
//               }}
//               className="absolute bottom-3 right-3 rounded-full p-3.5 shadow-2xl shadow-black bg-white transition-transform duration-200 hover:bg-neutral-100"
//             >
//               <SquarePen strokeWidth={2} size={25} />
//             </button>
//           </CardContent>
//         </Card>
//       )}
