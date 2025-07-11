import Link from 'next/link';
import Image from 'next/image';

type Props = {
  title? : String
}

export default function Navbar({title} : Props){
    return <nav className="navbar">
    <div className="container">
      <Link href="/" className="fw-bold">
        <span>@speckwitz{title == null ? "" : title}</span>
      </Link>
      <ul className="nav flex-grow-1 justify-content-end">
      <li className="nav-item ms-2">
          <Link href='https://github.com/speckwitz' aria-disabled className="btn btn-sm">
            GitHub
          </Link>
      </li>
      <li className="nav-item ms-2">
          <Link href='/notes' aria-disabled className="btn btn-sm">
            Notes
          </Link>
      </li>
      </ul>
    </div>
  </nav>
}