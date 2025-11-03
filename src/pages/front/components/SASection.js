import WrapLayout from "@/components/WrapLayout";
import AppFormTable from "@/components/AppFormTable";
function SASection() {
  return (
    <>
      <div className="flex flex-col gap-y-5">
        <WrapLayout>
          <h3 className="text-h3 mb-4 ">1. 文件常遺漏內容</h3>
          <ul className="pl-5 list-disc">
            <li>下拉選單API</li>
            <li>必填欄位</li>
            <li>多選型別寫錯</li>
            <li>要求前端傳送value+label</li>
          </ul>
        </WrapLayout>
        <WrapLayout>
          <h3 className="text-h3 mb-4">2. 文件內容</h3>
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
              <tr>
                <th className="w-[140px]">欄位</th>
                <td>
                  <ul className="pl-5 list-disc">
                    <li>對應參數名稱</li>
                    <li>資料型別 string / number / array / boolean</li>
                    <li>是否必填</li>
                    <li>長度限制 / 其他限制</li>
                    <li>顯示格式 例如日期：YYY/MM/DD、千分位、代碼轉文字</li>
                  </ul>
                </td>
              </tr>
            </AppFormTable>
          </div>
        </WrapLayout>
        <WrapLayout>
          <h3 className="text-h3 mb-4">3. 行為模式</h3>
          <div>
            <AppFormTable className="mb-10">
              <tr>
                <th className="w-[140px]">資料載入時機</th>
                <td>
                  <ul className="pl-5 list-disc">
                    <li>畫面載入時</li>
                    <li>點擊按鈕時</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>表單驗證</th>
                <td>
                  <ul className="pl-5 list-disc">
                    <li>即時驗證（onChange/onBlur）</li>
                    <li>送出驗證（onSubmit）</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>返回上一頁時</th>
                <td>
                  <ul className="pl-5 list-disc">
                    <li>保留查詢狀態</li>
                    <li>重置查詢狀態</li>
                  </ul>
                </td>
              </tr>
            </AppFormTable>
          </div>
        </WrapLayout>
        <WrapLayout>
          <h3 className="text-h3 mb-4">4. 表格</h3>
          <ul className="pl-5 list-disc mb-4">
            <li>置中</li>
            <li>置左</li>
            <li>置右</li>
          </ul>
        </WrapLayout>
      </div>
    </>
  );
}

export default SASection;
