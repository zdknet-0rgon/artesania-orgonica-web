"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { GlobeAltIcon, UserIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function TopBar() {
  return (
    <div className="bg-secondary/5 dark:bg-secondary-dark/10 border-b border-border/50 theme-transition">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-10 text-xs">
          {/* Left Section - Shipping Info */}
          <div className="hidden md:flex items-center space-x-4 text-muted-foreground">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              Envío gratis en pedidos +50€
            </span>
          </div>

          {/* Right Section - Contact, Language, Account */}
          <div className="flex items-center space-x-4 ml-auto">
            <Link 
              href="/contacto" 
              className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Contacto</span>
            </Link>
            
            {/* Language Selector - Placeholder for next-intl */}
            <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
              <GlobeAltIcon className="w-4 h-4" />
              <span>ES</span>
            </button>
            
            {/* Account/Login */}
            <Link 
              href="/auth/login" 
              className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
            >
              <UserIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Mi cuenta</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
