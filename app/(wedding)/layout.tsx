import FadeInSection from "@/components/shared/FadeInSection";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FadeInSection>{children}</FadeInSection>;
}
