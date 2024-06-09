import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <main className="flex min-h-screen w-full justify-between font-inter">
          {children}  
        </main>
      </html>
    );
  }
  