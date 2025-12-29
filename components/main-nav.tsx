
import DesktopNav from './desktop-nav';
import MobileNav from './mobile-nav';


export default function MainNav() {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="hidden md:block">
         <DesktopNav />
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
}