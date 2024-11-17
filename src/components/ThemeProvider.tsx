'use client'

// react/nextjs components
import { useEffect, useState } from 'react';

// next-themes components
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = useState(false);

  // This will ensure that the component only renders on the client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>; // Render nothing until the component is mounted
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
