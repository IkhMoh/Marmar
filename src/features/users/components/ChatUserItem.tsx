import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";

type ChatUserItemProps = {
  username: string;
  profile_image: string;
  href: string;
  lastMessageTime: string;
  lastMessageText: string;
  isRead: boolean;
};

export default function ChatUserItem({
  username,
  profile_image,
  href,
  lastMessageTime,
  lastMessageText,
  isRead,
}: ChatUserItemProps) {
  return (
    <Link
      href={href}
      className="flex justify-between items-center h-[72px] gap-3 px-6 py-2 hover:bg-neutral-100 transition"
    >
      {/* LEFT SIDE */}
      <div className="flex items-center gap-3 min-w-0">
        <Avatar className="w-14 h-14">
          <AvatarImage
            src={"/images/avatars/" + profile_image}
            alt={username}
            className="object-cover object-center rounded-full"
          />
          <AvatarFallback>
            {username?.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        {/* USERNAME + MESSAGE + TIME */}
        <div className="flex flex-col min-w-0 ">
          <h2 className="font-bold text-md truncate">{username}</h2>

          <div className="flex items-center gap-1 truncate">
            <p
              className={`text-xs truncate ${
                isRead ? "text-gray-500" : "text-black font-semibold"
              }`}
            >
              {lastMessageText}
            </p>

            <span className="flex-shrink-0 w-0.5 h-0.5 bg-gray-500 rounded-full"></span>

            <span className="text-xs text-gray-400 flex-shrink-0">
              {lastMessageTime}
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: dot for unread */}
      {!isRead && <span className="w-2 h-2 rounded-full bg-blue-500"></span>}
    </Link>
  );
}
