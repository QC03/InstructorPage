import { useEffect, useRef, useState, type ReactNode } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { siteContent } from '../content/site'

const links = [
  { to: '/', label: '홈' },
  { to: '/pricing', label: '수업 안내' },
  { to: '/contact', label: '문의하기' },
]

export function AppShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLElement>(null)
  const location = useLocation()

  useEffect(() => setMenuOpen(false), [location.pathname])

  useEffect(() => {
    const targetId = decodeURIComponent(location.hash.replace(/^#/, ''))

    if (!targetId) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    const timer = window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: 'auto',
        block: 'start',
      })
    }, 50)

    return () => window.clearTimeout(timer)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        if (menuOpen) triggerRef.current?.focus()
      }
      if (menuOpen && event.key === 'Tab' && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>('a, button')
        if (!focusable.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  return (
    <div className="site-shell">
      <header className={`site-header ${location.pathname === '/' && !isScrolled ? 'header-light' : 'header-dark'} ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="desktop-menu-wrap">
          <Link className="brand" to="/" aria-label={`${siteContent.brand} 홈`}>
            <span className="brand-mark">S</span>
            <span>{siteContent.brand}</span>
          </Link>
          <aside className="desktop-menu" aria-label="주 메뉴">
            {links.map((link) => <NavItem key={link.to} {...link} />)}
            {siteContent.kakaoUrl ? <a className="nav-link side-contact" href={siteContent.kakaoUrl} target="_blank" rel="noreferrer">카카오톡으로 문의 <ArrowUpRight size={16} /></a> : <span className="nav-link side-contact is-disabled">카카오톡 링크 준비 중</span>}
          </aside>
        </div>
        <button ref={triggerRef} className="menu-trigger" type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
          <span className="sr-only">메뉴 {menuOpen ? '닫기' : '열기'}</span>
        </button>
      </header>
      {menuOpen && <button className="menu-backdrop" type="button" aria-label="메뉴 닫기" onClick={() => { setMenuOpen(false); triggerRef.current?.focus() }} />}
      <aside ref={menuRef} id="mobile-menu" className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <p className="eyebrow">산이 기다리고 있습니다</p>
        {links.map((link) => <NavItem key={link.to} {...link} mobile />)}
        {siteContent.kakaoUrl ? <a className="nav-link mobile-nav-link side-contact" href={siteContent.kakaoUrl} target="_blank" rel="noreferrer">카카오톡으로 문의 <ArrowUpRight size={16} /></a> : <span className="nav-link mobile-nav-link side-contact is-disabled">카카오톡 링크 준비 중</span>}
      </aside>
      <main>{children}</main>
      <footer className="site-footer">
        <span>{siteContent.brand} / {siteContent.season}</span>
        {siteContent.email ? <a href={`mailto:${siteContent.email}`}>{siteContent.email}</a> : <span>연락처 입력 예정</span>}
        <span>{siteContent.location}</span>
      </footer>
    </div>
  )
}

function NavItem({ to, label, mobile = false }: { to: string; label: string; mobile?: boolean }) {
  return <NavLink className={`nav-link ${mobile ? 'mobile-nav-link' : ''}`} to={to} end={to === '/'}>{label}<span>↗</span></NavLink>
}