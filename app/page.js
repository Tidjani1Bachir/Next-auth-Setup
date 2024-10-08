"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { ArrowRight } from "lucide-react"

    const handleSignOut = async () => {
      await signOut({ redirect: true, callbackUrl: "/" });
    };

export default function Home() {
  const { data: session } = useSession();

  return !session ? (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with logos */}
      

      {/* Hero content */}
      <div className="relative z-10 text-center">
        <h1 className="text-2xl md:text-6xl font-bold text-primary mb-4">
          Welcome to this basic Authentification project using Next Auth 
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-7">
          Powered by React, Next.js, MongoDB, and Node.js and  Next Js
        </p>
        <Link className="bg-[#61dafb] hover:bg-[#4fa8c7] text-black font-semibold py-2 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#61dafb] focus:ring-opacity-50 mt-4" href="/login">Click here To Login</Link>
      
      </div>
    </div>
  ) : (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Next.js-inspired background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwMCAwQzQ0Ljc3MTUgMCAwIDQ0Ljc3MTUgMCAxMDBDMCAxNTUuMjI4IDQ0Ljc3MTUgMjAwIDEwMCAyMDBDMTU1LjIyOCAyMDAgMjAwIDE1NS4yMjggMjAwIDEwMEMyMDAgNDQuNzcxNSAxNTUuMjI4IDAgMTAwIDBaTTEwMCAxODVDNTMuMDU1IDE4NSAxNSAxNDYuOTQ1IDE1IDEwMEMxNSA1My4wNTUgNTMuMDU1IDE1IDEwMCAxNUMxNDYuOTQ1IDE1IDE4NSA1My4wNTUgMTg1IDEwMEMxODUgMTQ2Ljk0NSAxNDYuOTQ1IDE4NSAxMDAgMTg1WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIwIiB5MT0iMCIgeDI9IjIwMCIgeTI9IjIwMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDBEQkU5Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGMDBGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+')] bg-repeat opacity-10" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4">
      <button
      onClick={handleSignOut}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      Sign Out
    </button>
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
          Welcome
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          to the Next.js-powered future of web development
        </p>
        <p className=" text-white  transition-colors duration-300 w-">
          Welcome 
        </p>
      </div>
    </div>


  );
}