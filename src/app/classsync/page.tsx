import type { Metadata } from "next";
import { ClassSyncLanding } from "@/components/dom/ClassSyncLanding";

const siteUrl = "https://klyven.qzz.io";

export const metadata: Metadata = {
  title: "ClassSync — Never a Wasted Class",
  description:
    "ClassSync turns a teacher's recording into a complete, animated, substitute-ready lesson. A KLYVEN project for schools and teachers.",
  alternates: { canonical: `${siteUrl}/classsync/` },
  openGraph: {
    title: "ClassSync — Never a Wasted Class",
    description: "Turn a recorded class into an animated, substitute-ready lesson.",
    url: `${siteUrl}/classsync/`,
    type: "website",
  },
};

export default function ClassSyncPage() {
  return <ClassSyncLanding />;
}
