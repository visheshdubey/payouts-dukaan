import { Icons } from "../../theme/icons";

const DashboardTopNav = ({ title }: { title: string }) => {
  return (
    <header
      className="sticky top-0 z-50 flex w-full gap-4 px-8 py-3 bg-white border-b border-black/15"
      role="banner"
    >
      <div className="flex items-center flex-1 gap-4 ">
        <h1 className="text-[20px] font-medium text-[#1A181E]">{title}</h1>
        <div className="flex items-center gap-2 text-black/70">
          <Icons.help.sm />
          <span
            className="text-xs hover:underline hover:cursor-pointer"
            aria-label="Learn how it works"
          >
            How it works
          </span>
        </div>
      </div>
      <div
        className="flex items-center flex-1 gap-2 px-4 py-[9px] rounded-[6px] bg-black/5"
        role="search"
      >
        <Icons.search aria-hidden="true" />
        <input
          type="text"
          name="search"
          placeholder="Search features, tutorials, etc."
          className="w-full bg-transparent active:border-0 text-[15px] outline-none leading-[22px] placeholder-black/50"
          aria-label="Search"
        />
      </div>
      <div className="flex justify-end flex-1 gap-3">
        <div
          className="p-2.5 bg-black/10 rounded-full hover:cursor-pointer"
          role="button"
          aria-label="View announcements"
        >
          <Icons.announcements />
        </div>
        <Icons.filledDown aria-hidden="true" />
      </div>
    </header>
  );
};

export default DashboardTopNav;
