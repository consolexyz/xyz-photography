import Link from "next/link";

export default function Navbar () {
    return (
        <div className="navbar">
            <h1>Xyz</h1>
            <div className="nav-links-container">
            <Link href={"/gallery"} className="nav-links" >Gallery</Link>
            <Link href={"/form"} className="nav-links">Book a Section</Link>
            </div>
        </div>
    );
}