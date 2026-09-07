import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="/" onClick={() => setMobileToggle(false)}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" onClick={() => setMobileToggle(false)}>
          About
        </Link>
      </li>
      <li className="menu-item-has-children">
        <Link href="#" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul>
           
            <li>
              <Link href="/hrms" onClick={() => setMobileToggle(false)}>
                HR Management Software for SMEs 
              </Link>
            </li>
            <li>
              <Link href="/iscs" onClick={() => setMobileToggle(false)}>
               International Standards Consultation & Support 
              </Link>
            </li>
            <li>
              <Link href="/etd" onClick={() => setMobileToggle(false)}>
               Employee Training & Development
              </Link>
            </li>
            <li>
              <Link href="/psis" onClick={() => setMobileToggle(false)}>
              Private Security Industry Support 
              </Link>
            </li>
          </ul>
        </DropDown> 
      </li>
     
      <li>
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
      </li>
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
      <li>
        <Link href="/casestudies" onClick={() => setMobileToggle(false)}>
          Case Study
        </Link>
      </li>
    </ul>
  );
}
