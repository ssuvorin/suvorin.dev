'use client';

import { useRouter, usePathname } from 'next/navigation';

export function NavHashLink({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  [key: string]: any;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    if (pathname === '/' && href.startsWith('#')) {
      e.preventDefault();
      const el = document.getElementById(href.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('#')) {
      e.preventDefault();
      router.push(`/${href}`);
    }
  };

  return (
    <a href={pathname === '/' ? href : `/${href}`} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
