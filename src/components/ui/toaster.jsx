// src/components/ui/toaster.js
"use client";

import React from "react";
import { Toaster as SonnerToaster } from "sonner";

/**
 * AppToaster - wrapper around Sonner's Toaster.
 * Exported as a named export and as default for flexibility.
 */
export function AppToaster() {
  return (
    <SonnerToaster
      position="top-right"
      richColors
      closeButton
      duration={7000} // 5s auto-hide
    />
  );
}

export default AppToaster;
