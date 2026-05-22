import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "山本涼太 | Product Creator",
  description:
    "推しとファンをつなぐプロダクトを作る、若手プロダクトクリエイター。WowMe開発中。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
