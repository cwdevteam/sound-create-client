import LocaleProvider from "@/context/LocaleContext";
import ThemeProvider from "@/context/ThemeProvider";
import { Locale } from "@/../i18n.config";
import WagmiProvider from "./WagmiProvider";
import MediaProvider from "./MediaContext";

export default async function Providers({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: Locale;
}) {
  return (
    <LocaleProvider locale={lang}>
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
    </LocaleProvider>
  );
}
