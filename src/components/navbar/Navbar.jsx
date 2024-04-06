"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const user = true; // Assuming user is logged in for demonstration purposes
  const session = true;
  const isAdmin = true;

  const handleLogOut = () => {
    // Function to handle logout
    console.log("hell");
  };

  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  return (
    <div>
      <div className="navbar text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-white bg-opacity-20 rounded-box w-52 text-black"
            >
              {links.map(({ title, path }) => (
                <li key={title}>
                  <Link
                    href={path}
                    className={`${
                      pathName === path
                        ? "bg-white rounded-full text-black px-3 py-1"
                        : ""
                    }`}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <img
            src="https://i.ibb.co/BVnfpnY/logo-no-background.png"
            alt=""
            className="max-h-10 m-2"
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            {links.map(({ title, path }) => (
              <li key={title}>
                <Link href={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          {session ? (
            <>
              {isAdmin && <Link href="/admin">Admin</Link>}
              <button className="px-2 py-1 rounded cursor-pointer font-bold text-black bg-white">
                Logout
              </button>
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
