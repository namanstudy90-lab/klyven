"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col relative overflow-x-hidden"
      style={{ background: "#060914", color: "#eef4ff" }}
    >
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(900px 500px at 50% -10%, rgba(0,212,255,0.12), transparent 60%), radial-gradient(700px 400px at 85% 30%, rgba(123,47,247,0.1), transparent 60%)",
        }}
      />

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

          <nav className="hidden md:flex items-center gap-6">
            {NAV.map((item) => {
              const active = item.href.startsWith("/") && pathname === item.href.split("#")[0];
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

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className="block h-px w-6 transition-all duration-300"
              style={{ background: menuOpen ? "#00d4ff" : "rgba(255,255,255,0.7)", transform: menuOpen ? "translateY(3px) rotate(45deg)" : "none" }}
            />
            <span
              className="block h-px w-6 transition-all duration-300"
              style={{ background: menuOpen ? "#00d4ff" : "rgba(255,255,255,0.7)", opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-px w-6 transition-all duration-300"
              style={{ background: menuOpen ? "#00d4ff" : "rgba(255,255,255,0.7)", transform: menuOpen ? "translateY(-3px) rotate(-45deg)" : "none" }}
            />
          </button>
        </div>

        {menuOpen && (
          <div
            className="md:hidden px-6 py-4 flex flex-col gap-4"
            style={{
              background: "rgba(6, 9, 20, 0.95)",
              borderBottom: "1px solid rgba(0, 212, 255, 0.1)",
            }}
          >
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-xs tracking-[0.2em] uppercase transition-all duration-300"
                style={{ color: "rgba(200, 220, 255, 0.8)" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="relative z-10 flex-1 w-full">{children}</main>

      <footer
        className="w-full relative z-10"
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
