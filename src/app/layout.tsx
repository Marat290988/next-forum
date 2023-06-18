import "./ReactToastify.scss";
import "./globals.scss";
import { AuthProvider } from "@/providers/AuthProvider";
import { Providers } from "@/store/providers";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export const metadata = {
  title: "Next Forum",
  description: "A place for an exchange of views.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="body-forum">
        <AuthProvider>
          <Providers>{children}</Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
