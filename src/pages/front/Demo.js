import AppTabs, { CustomTabPanel } from "@/components/AppTabs";
import BakendSection from "./components/BakendSection";
import SASection from "./components/SASection";
function Demo() {
  return (
    <>
      <div className="p-4 bg-blue-01">
        {/* <div className=" flex flex-col justify-center"> */}
        <h2 className="text-h2 text-blue-06  text-center my-20">🖥️ 新專案開始時，前端的溝通準備</h2>
        {/* </div> */}
        <AppTabs tabs={["後端", "SA及設計師"]}>
          <CustomTabPanel>
            <div>
              <BakendSection />
            </div>
          </CustomTabPanel>
          <CustomTabPanel>
            <div>{/* <SASection /> */}</div>
          </CustomTabPanel>
        </AppTabs>
      </div>
    </>
  );
}

export default Demo;
