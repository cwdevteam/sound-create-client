import ThemeProvider from "@/context/ThemeProvider";
import WagmiProvider from "./WagmiProvider";
import MediaProvider from "./MediaContext";

export default async function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <MediaProvider>
        <WagmiProvider>{children}</WagmiProvider>
      </MediaProvider>
    </ThemeProvider>
  );
}
