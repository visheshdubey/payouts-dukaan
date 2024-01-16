import { Icons } from "@/components/theme/icons";

const ComboBox = () => {
  return (
    <div
      className="relative bg-white"
      role="combobox"
      aria-label="Select time period"
    >
      <select
        className="py-1.5 pl-3.5 pr-9 appearance-none hover:cursor-pointer bg-white border border-border rounded-md"
        aria-label="Select time period"
      >
        <option>This Month</option>
        <option>Last Month</option>
      </select>
      <Icons.chevronDownGray aria-hidden="true" />
    </div>
  );
};

export default ComboBox;
