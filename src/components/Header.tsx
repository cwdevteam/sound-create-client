"use server";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import WalletDropdownButton from "./ConnectButton/WalletDropdownButton";

const Header = () => (
  <header className="flex border-b border-foreground/20">
    <div className="flex container mx-auto py-4">
      <Link className="flex items-center gap-2" href="/dashboard">
        <Logo className="h-6 w-auto" />
      </Link>
      <div className="flex gap-4 ml-auto">
        <WalletDropdownButton />
      </div>
    </div>
  </header>
);

export default Header;
