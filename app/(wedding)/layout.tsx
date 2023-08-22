import FadeInSection from "@/components/common/FadeInSection";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FadeInSection>{children}</FadeInSection>;
}
