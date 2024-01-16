import DashboardContent from "@/components/Dashboard/main-content/DashboardContent";
import DashboardMain from "@/components/Dashboard/main-content/DashboardMain";
import DashboardSection, {
  DashboardSectionTitle,
} from "@/components/Dashboard/main-content/DashboardSection";
import DashboardTopNav from "@/components/Dashboard/main-content/DashboardTopNav";
import ComboBox from "@/components/Dashboard/widgets/ComboBox";
import DataTable from "@/components/Dashboard/widgets/DataTable";
import KPICard from "@/components/Dashboard/widgets/KpiCards";
import Tabs from "@/components/Dashboard/widgets/Tabs";
import { kpiData } from "@/data/metrics";
import { tabData } from "@/data/tabData";
import { tableColumns, tableData } from "@/data/tableData";

const Payouts = () => {
  return (
    <DashboardContent>
      <DashboardTopNav title="Payouts" />
      <DashboardMain>
        <DashboardSection className="flex items-center justify-between w-full">
          <DashboardSectionTitle>Overview</DashboardSectionTitle>
          <ComboBox />
        </DashboardSection>
        <DashboardSection className="flex space-x-5 h-[154px] ">
          {kpiData.map((kpi, index) => (
            <KPICard
              key={`kpi-index-${index}`}
              title={kpi.title}
              amount={kpi.amount}
              description={kpi.description}
              isWhite={kpi.isWhite}
            />
          ))}
        </DashboardSection>
        <DashboardSection
          className="flex flex-col w-full gap-6"
          aria-label="Transactions Overview"
        >
          <DashboardSectionTitle>
            Transactions | This Month
          </DashboardSectionTitle>
          <Tabs data={tabData}></Tabs>
          <DataTable tableData={tableData} columns={tableColumns}></DataTable>
        </DashboardSection>
      </DashboardMain>
    </DashboardContent>
  );
};

export default Payouts;
