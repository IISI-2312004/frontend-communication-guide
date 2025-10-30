import WrapLayout from "@/components/WrapLayout";
import AppFormTable from "@/components/AppFormTable";
function BakendSection() {
  return (
    <>
      <div className="flex flex-col gap-y-5">
        <WrapLayout>
          <h3 className="text-h4 mb-4 ">1. 為什麼要先對齊 文件 格式</h3>
          <h4 className="text-h5 mb-4 pl-2 border-blue-04 border-l-[4px] leading-[1]">
            前端和SA最大的溝通成本在「理解不同」。
          </h4>
          <h5 className="text-h6 mb-1">常見問題</h5>
          <ul className="pl-5 list-disc">
            <li>必填欄位標示</li>
            <li>下拉選單API</li>
            <li>欄位名稱</li>
            <li>參數名稱</li>
            <li>API NAME</li>
            <li>回傳JSON(前端可先偷跑)</li>
          </ul>
        </WrapLayout>
        <WrapLayout>
          <h3 className="text-h3 mb-4">2. 參數定義（Input/Output）</h3>
          <div>
            <AppFormTable className="mb-10">
              <tr>
                <th className="w-[140px]">參數名稱</th>
                <td>與後端欄位一致（避免前後端名稱不同）</td>
              </tr>
              <tr>
                <th>資料型別</th>
                <td>string / number / array / boolean / date…</td>
              </tr>
              <tr>
                <th>是否必填</th>
                <td>✅ 必填 / ❌ 選填</td>
              </tr>
              <tr>
                <th>顯示格式</th>
                <td>例如日期：YYYY/MM/DD、千分位、代碼轉文字</td>
              </tr>
              <tr>
                <th>欄位長度限制</th>
                <td>文字框長度、輸入規則</td>
              </tr>
            </AppFormTable>
          </div>
        </WrapLayout>
        <WrapLayout>
          <h3 className="text-h3 mb-4">3. API 介接文件內容</h3>
          <div>
            <AppFormTable className="mb-10">
              <tr>
                <th className="w-[140px]">API 名稱 + 用途</th>
                <td>使用情境/對應畫面</td>
              </tr>
              <tr>
                <th>Method</th>
                <td>GET / POST</td>
              </tr>
            </AppFormTable>
          </div>
        </WrapLayout>
      </div>
    </>
  );
}

export default BakendSection;
