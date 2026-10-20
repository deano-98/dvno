'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { siteConfig, whatsappUrl } from '@/lib/site';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Lock the page behind the mobile overlay and restore the prior state on close/unmount.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <Link href="/" className="brand" aria-label={`${siteConfig.name}, home`}>
            <span className="brand-mark">d<span>.</span></span>
            <span className="brand-name">dean chap<span> / digital solutions</span></span>
          </Link>
          <div className="desktop-links">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={`nav-link ${pathname === link.href || (link.href === '/projects' && pathname.startsWith('/projects/')) ? 'is-active' : ''}`}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="nav-cta">Let&apos;s talk <ArrowUpRight size={15} /></Link>
          </div>
          <button className="mobile-menu-toggle" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>
      </header>
      <div id="mobile-navigation" className={`mobile-overlay ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="mobile-overlay-top">
          <Link href="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">d<span>.</span></span><span className="brand-name">dean chap</span></Link>
          <button className="mobile-close" aria-label="Close navigation menu" onClick={() => setOpen(false)}><X size={22} /></button>
        </div>
        <div className="mobile-overlay-links">
          <Link href="/" onClick={() => setOpen(false)}><span>00</span> Home <ArrowUpRight /></Link>
          {links.map((link, index) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{link.label}<ArrowUpRight /></Link>)}
        </div>
        <a className="mobile-whatsapp" href={whatsappUrl('Hi Dean, I would like to discuss a project.')} target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={18} /></a>
        <p className="mobile-note">Thoughtful technology. Practical business outcomes.</p>
      </div>
    </>
  );
}
