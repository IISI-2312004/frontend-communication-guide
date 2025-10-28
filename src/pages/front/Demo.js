import AppTabs, { CustomTabPanel } from "@/components/AppTabs";
import BakendSection from "./components/BakendSection";
import SASection from "./components/SASection";
function Demo() {
  return (
    <>
      <div className="p-4 bg-blue-01">
        <div className="h-[100vh] flex flex-col justify-center">
          <h2 className="text-h2 text-blue-06 mb-4 text-center w0">
            🖥️ 新專案開始時，前端的溝通準備
          </h2>
        </div>
        <AppTabs tabs={["與後端溝通", "與SA溝通"]}>
          <CustomTabPanel>
            <div>
              <BakendSection />
            </div>
          </CustomTabPanel>
          <CustomTabPanel>
            <div>
              <SASection />
            </div>
          </CustomTabPanel>
        </AppTabs>
      </div>
    </>
  );
}

export default Demo;
