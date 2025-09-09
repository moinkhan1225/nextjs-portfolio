import Link from "next/link";

const NavLink = ({ href, title, className=""}) => {
  return (
    <Link
      href={href}
       className={`text-white font-medium ${className}`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
