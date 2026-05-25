import { Metadata } from "next";

export const metadata: Metadata = {
  title: "THS Blog | Global Health, Implementation Science & Research Insights",
  description:
    "Read insights from Transatlantic Health Solutions on global health, implementation science, monitoring and evaluation, health systems strengthening, digital health, AI, and research publication.",
  keywords: [
    "global health blog",
    "implementation science",
    "health systems strengthening",
    "monitoring and evaluation",
    "digital health",
    "artificial intelligence in health",
    "research publication",
    "WBGH",
    "public health research",
    "THS insights",
  ],
  openGraph: {
    title: "THS Blog | Global Health, Implementation Science & Research Insights",
    description:
      "Thought leadership on global health, implementation science, public health research, monitoring and evaluation, digital health, and scientific publication.",
    url: "https://t-healthsolutions.com/blog",
    siteName: "Transatlantic Health Solutions",
    type: "website",
    images: [
      {
        url: "https://t-healthsolutions.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Transatlantic Health Solutions Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "THS Blog | Global Health, Implementation Science & Research Insights",
    description:
      "Thought leadership on global health, implementation science, public health research, monitoring and evaluation, digital health, and scientific publication.",
    images: ["https://t-healthsolutions.com/images/logo.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
