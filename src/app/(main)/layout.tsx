import ClientShell from "@/components/client/layout/ClientShell";

import NavBar from "@/components/server/layout/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBar />
      <ClientShell>{children}</ClientShell>
    </div>
  );
}
