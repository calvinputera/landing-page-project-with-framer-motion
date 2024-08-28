import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Stream your workflow and boost your productivity</p>
        <div className="inline-flex gap-1 items-center">
          <p>Get Started For Free</p>
          <Image src="/assets/arrow-right.svg" alt="arrow-right" width={20} height={20} className="text-white bg-white" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image
              src="/assets/logosaas.png"
              alt="logo"
              width={40}
              height={40}
            />
            <Image src="/assets/menu.svg" alt="menu" width={20} height={20} className="md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customer</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="btn">Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;
