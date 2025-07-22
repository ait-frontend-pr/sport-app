import Link from "next/link";

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="p-8 flex justify-start gap-8">
        <Link href={"/settings/user"}>User Settings</Link>
        <Link href={"/settings/organization"}>Organization Settings</Link>
      </nav>
      {children}
    </>
  );
}