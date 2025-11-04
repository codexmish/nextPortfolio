import Link from "next/link";

export const menuitem = [
  {
    menuName: "Home",
    navLink: "/",
  },
  {
    menuName: "Services",
    navLink: "/",
  },
  {
    menuName: "About Me",
    navLink: "/",
  },
  {
    menuName: "Portfolio",
    navLink: "/",
  },
  {
    menuName: "contact Us",
    navLink: "/",
  },
];
const Navbar = () => {
  return (
    <>
      <nav className="py-5 absolute top-0 bg-black-bg left-0 w-full z-50 hidden lg:block">
        <div className="main container flex items-center justify-between">
          {/* --------logo------- */}
          <div className="logo w-10">
            <h1 className="text-3xl text-theme font-lato font-bold">LOGO</h1>
          </div>

          {/* -------menu---------- */}
          <div className="flex items-center gap-15">
            {menuitem.map((item, id) => (
              <Link
                className="text-sm text-secoundary-text hover:text-theme font-medium font-playfair"
                key={id}
                href={item.navLink}
              >
                {item.menuName}
              </Link>
            ))}
          </div>

          {/* --------reg and login button---- */}
          <div className="buttons flex items-center gap-9">
            <div className="sin-button cursor-pointer w-[141px] h-[45px] flex items-center justify-center bg-theme hover:bg-transparent text-sm text-text hover:text-white font-medium font-lato rounded-2xl">
              Hire Me
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
