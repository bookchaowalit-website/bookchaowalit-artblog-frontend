import Link from 'next/link'

export default function Header() { return <header className="art-header"><div className="art-header-inner"><Link href="/" className="art-mark">Creative Arts <span>/</span> Knowledge</Link><nav className="art-nav" aria-label="Primary navigation"><Link href="/">Index</Link><Link href="/categories">Subjects</Link><Link href="/posts">Reading room</Link><Link href="/about">About</Link></nav></div></header> }
