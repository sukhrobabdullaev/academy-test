import { LoginButton } from "./login-button";
import { ModeToggle } from "./theme";
import { Contact } from "./contact";
import MobileSidebar from "./mobile-sidebar";
import Logo from "./site-logo";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 w-full backdrop-blur border-b p-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="md:hidden block">
              <MobileSidebar />
            </div>
            <Logo />
          </div>
          <div className="flex items-center gap-2">
            <Contact />
            <ModeToggle />
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
