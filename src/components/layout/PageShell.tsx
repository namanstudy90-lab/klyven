"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStore } from "@/lib/store";

const NAV = [
  { label: "Services", href: "/#services" },
  { label: "Products", href: "/#products" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export function PageShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "#060914", color: "#eef4ff" }}
    >
      <header className="w-full sticky top-0 z-40">
        <div
          className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between"
          style={{
            background: "rgba(6, 9, 20, 0.85)",
            borderBottom: "1px solid rgba(0, 212, 255, 0.1)",
            backdropFilter: "blur(16px)",
          }}
        >
          <Link
            href="/"
            className="text-lg font-extralight tracking-[0.3em] text-white"
            onMouseEnter={() => useStore.getState().setCursorVariant("hover")}
            onMouseLeave={() => useStore.getState().setCursorVariant("default")}
          >
            KLYVEN
          </Link>
          <nav className="flex items-center gap-6">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[11px] tracking-[0.2em] uppercase transition-all duration-300"
                  style={{
                    color: active ? "#00d4ff" : "rgba(200, 220, 255, 0.6)",
                  }}
                  onMouseEnter={() => useStore.getState().setCursorVariant("hover")}
                  onMouseLeave={() => useStore.getState().setCursorVariant("default")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full">{children}</main>

      <footer
        className="w-full"
        style={{ borderTop: "1px solid rgba(0, 212, 255, 0.08)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            href="/"
            className="text-sm font-extralight tracking-[0.3em] text-white"
            onMouseEnter={() => useStore.getState().setCursorVariant("hover")}
            onMouseLeave={() => useStore.getState().setCursorVariant("default")}
          >
            KLYVEN
          </Link>
          <div className="flex flex-wrap justify-center gap-6">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[10px] tracking-[0.2em] uppercase transition-all duration-300"
                style={{ color: "rgba(200, 220, 255, 0.5)" }}
                onMouseEnter={() => useStore.getState().setCursorVariant("hover")}
                onMouseLeave={() => useStore.getState().setCursorVariant("default")}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <p className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "rgba(200, 220, 255, 0.3)" }}>
            &copy; {new Date().getFullYear()} KLYVEN
          </p>
        </div>
      </footer>
    </div>
  );
}
