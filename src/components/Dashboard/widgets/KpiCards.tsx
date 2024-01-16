import { cn } from "@/lib/utils";

import { Icons } from "../../theme/icons";

interface InfoCardProps {
  title: string;
  amount: string;
  description?: string;
  isWhite?: boolean;
}

const KPICard: React.FC<InfoCardProps> = ({
  title,
  amount,
  description,
  isWhite = true,
}) => {
  const cardColor = isWhite
    ? "bg-white text-[#1A181E]"
    : "bg-[#146EB4] text-white";

  return (
    <div
      style={{ boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)" }}
      className={cn(
        `relative flex flex-col w-1/3 gap-4 p-5 rounded-lg overflow-hidden ${cardColor}`,
        isWhite && "h-fit"
      )}
    >
      <span className="flex items-center gap-2 text-base">
        {title}
        {isWhite ? <Icons.help.md /> : <Icons.whiteHelp />}
      </span>
      <div className="flex items-center">
        <span className="text-[32px] leading-[38px] grow font-medium">
          {amount}
        </span>
        {description && (
          <>
            <span
              className={cn(
                "font-medium underline cursor-pointer",
                isWhite && "text-[#146EB4]"
              )}
            >
              {description}
            </span>

            {isWhite ? <Icons.chevronRightBlue /> : <Icons.chevronRight />}
          </>
        )}
        {!isWhite && (
          <div className="text-sm absolute bottom-0 flex w-full rounded-lg bg-[#0E4F82] left-0 px-6 py-2 ">
            <span className="grow"> Next payout date:</span>
            <span className="font-medium">Today, 04:00PM</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default KPICard;
