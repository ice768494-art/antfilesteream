import Link from "next/link";

export default function Header() {
  return (
    <header className="nav">
      <Link href="/" className="brand">
        Anime<span>NetworkTamil</span>
      </Link>

      <nav className="navlinks">
        <Link href="/">Home</Link>
        <Link href="/search">Search</Link>
      </nav>
    </header>
  );
}
