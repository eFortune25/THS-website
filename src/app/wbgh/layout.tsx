import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing Bridge in Global Health (WBGH) - From Idea to Publication",
  description:
    "A global mentorship and publication support platform helping researchers transform ideas, theses, dissertations, and manuscripts into peer-reviewed publications.",
  keywords:
    "scientific writing, global health research, publication mentorship, statistical consulting, manuscript editing, LMIC research, PhD support, thesis writing",
};

export default function WBGHLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
