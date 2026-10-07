import type { Metadata } from "next";
import { ClassSyncLanding } from "@/components/dom/ClassSyncLanding";

const siteUrl = "https://klyven.qzz.io";

export const metadata: Metadata = {
  title: "ClassSync — Never lose a lesson again",
  description:
    "ClassSync captures a teacher's explanation, turns it into a visual lesson, and gives every student a clear next step.",
  alternates: { canonical: `${siteUrl}/classsync/` },
  openGraph: {
    title: "ClassSync — Never lose a lesson again",
    description: "Turn a teacher's explanation into a visual lesson students can return to.",
    url: `${siteUrl}/classsync/`,
    type: "website",
  },
};

export default function ClassSyncPage() {
  return <ClassSyncLanding />;
}
