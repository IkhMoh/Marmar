import ChatUserItem from "../../../features/users/components/ChatUserItem";

export default function ChatSidebar() {
  const directUsers = [
    {
      username: "PC_THINK_PRO",
      name: "Think Pro Apple Store",
      profile_image: "pcthink.jpg",
      href: "/direct/t/pcthinkpro",
      lastMessageTime: "10m",
      lastMessageText: "Bonjour, où est ma commande ?",
      isRead: false,
    },
    {
      username: "vav_store",
      name: "Vav Tech Store",
      profile_image: "vav.jpg",
      href: "/direct/t/vavstore",
      lastMessageTime: "45m",
      lastMessageText: "Everything ready, call me when you come.",
      isRead: true,
    },
    {
      username: "apple_zone",
      name: "Apple Zone DZ",
      profile_image: "applez.jpg",
      href: "/direct/t/applezone",
      lastMessageTime: "1h",
      lastMessageText: "Garantie 1 an, pas de problème.",
      isRead: false,
    },
    {
      username: "fix_it",
      name: "Fix It Repair",
      profile_image: "fixit.png",
      href: "/direct/t/fixit",
      lastMessageTime: "2h",
      lastMessageText: "Screen replaced, ready.",
      isRead: true,
    },
    {
      username: "koffee_shop",
      name: "Koffee Shop",
      profile_image: "coffee.jpg",
      href: "/direct/t/koffeeshop",
      lastMessageTime: "3h",
      lastMessageText: "Promo du jour disponible.",
      isRead: false,
    },
    {
      username: "tech_house",
      name: "Tech House DZ",
      profile_image: "techhouse.png",
      href: "/direct/t/techhouse",
      lastMessageTime: "5h",
      lastMessageText: "Contact me when you're free.",
      isRead: true,
    },
    {
      username: "buy_sell",
      name: "Buy & Sell Market",
      profile_image: "buysell.png",
      href: "/direct/t/buysell",
      lastMessageTime: "7h",
      lastMessageText: "Nouveau produit disponible.",
      isRead: false,
    },
    {
      username: "mobile_shop",
      name: "Mobile Shop DZ",
      profile_image: "mobilestore.jpg",
      href: "/direct/t/mobileshop",
      lastMessageTime: "10h",
      lastMessageText: "Your case is here, bro.",
      isRead: false,
    },
    {
      username: "pro_laptop",
      name: "Pro Laptop Store",
      profile_image: "laptop.jpg",
      href: "/direct/t/prolaptop",
      lastMessageTime: "1d",
      lastMessageText: "Shipping today.",
      isRead: true,
    },
    {
      username: "dz_pc",
      name: "DZ PC Parts",
      profile_image: "dzpc.jpg",
      href: "/direct/t/dzpc",
      lastMessageTime: "2d",
      lastMessageText: "85.000, best price.",
      isRead: false,
    },
    {
      username: "gaming_world",
      name: "Gaming World",
      profile_image: "gaming.jpg",
      href: "/direct/t/gamingworld",
      lastMessageTime: "3d",
      lastMessageText: "New stock just arrived.",
      isRead: true,
    },
    {
      username: "tech_dz",
      name: "Tech DZ Market",
      profile_image: "techdz.png",
      href: "/direct/t/techdz",
      lastMessageTime: "4d",
      lastMessageText: "Ces articles sont top.",
      isRead: false,
    },
    {
      username: "phone_repair",
      name: "Phone Repair DZ",
      profile_image: "phonerepair.jpg",
      href: "/direct/t/phonerepair",
      lastMessageTime: "5d",
      lastMessageText: "Battery replaced.",
      isRead: true,
    },
    {
      username: "devices_dz",
      name: "Devices DZ",
      profile_image: "devices.jpg",
      href: "/direct/t/devicesdz",
      lastMessageTime: "1w",
      lastMessageText: "Black Friday sale, encore dispo.",
      isRead: false,
    },
    {
      username: "mac_parts",
      name: "Mac Parts DZ",
      profile_image: "macparts.jpg",
      href: "/direct/t/macparts",
      lastMessageTime: "1y",
      lastMessageText: "Je te ramène demain.",
      isRead: false,
    },
  ];

  return (
    <div className="w-full h-screen border-r custom-scroll overflow-y-auto scroll-smooth scrollbar scrollbar-thumb-gray-500 scrollbar-track-transparent hover:scrollbar-thumb-gray-500">
      {directUsers.map((item) => (
        <ChatUserItem key={item.username} {...item} />
      ))}
    </div>
  );
}
