import WrapLayout from "@/components/WrapLayout";
import AppFormTable from "@/components/AppFormTable";
import { failure_sw, success_sw, warning_sw } from "@/utils/swal";
import AppButton from "@/components/AppButton";
import rsdtoImage from "@/assets/image/msgRsDto.png";
import formData1 from "@/assets/image/formData1.png";
import formData2 from "@/assets/image/formData2.png";
import CheckboxGroupExample from "@/components/CheckboxGroupExample";
import AppCodePanel from "@/components/AppCodePanel";
import AppTitle from "@/components/AppTitle";
function BakendSection() {
  return (
    <>
      <div className="flex flex-col gap-y-5">
        <WrapLayout>
          <h3 className="text-h3 mb-4 ">1. 為什麼要先對齊 API 格式</h3>
          <AppTitle>前端和後端最大的溝通成本，不在技術，而在「理解不同」。</AppTitle>
          <h5 className="text-h5 mb-1">常見問題</h5>
          <ul className="pl-5 list-disc">
            <li>錯誤訊息結構不一致(message／rtnMsg／沒回傳)</li>
            <li>日期格式不一（西元／民國）</li>
            <li>傳參有時包 data、有時沒有</li>
          </ul>
        </WrapLayout>
        <WrapLayout>
          <h3 className="text-h3 mb-4">2. 日期格式統一</h3>
          <h5 className="text-h5 mb-1">常見問題</h5>
          <ul className="pl-5 list-disc mb-4">
            <li>UI畫面是年月日後端卻要求補時分秒</li>
            <li>回傳民國年，卻要求送西元年</li>
          </ul>
          <div className="grid grid-cols-2 gap-x-4">
            <div>
              <AppTitle>使用民國年字串。(通常政府專案使用)</AppTitle>
              <AppFormTable className="mb-10">
                <tr>
                  <th className="w-[140px]">年</th>
                  <td>"114"</td>
                </tr>
                <tr>
                  <th>年月</th>
                  <td>"114/08"</td>
                </tr>
                <tr>
                  <th>年月日</th>
                  <td>"114/07/01"</td>
                </tr>
                <tr>
                  <th>年月日時分</th>
                  <td>"114/07/01 11:16"</td>
                </tr>
                <tr>
                  <th>年月日時分秒</th>
                  <td>"114/03/27 11:16:00"</td>
                </tr>
              </AppFormTable>
            </div>
            <div>
              <AppTitle>使用西元年字串。</AppTitle>
              <AppFormTable>
                <tr>
                  <th className="w-[140px]">年</th>
                  <td>"2025"</td>
                </tr>
                <tr>
                  <th>年月</th>
                  <td>"2025/08"</td>
                </tr>
                <tr>
                  <th>年月日</th>
                  <td>"2025/07/01"</td>
                </tr>
                <tr>
                  <th>年月日時分</th>
                  <td>"2025/07/01 11:16"</td>
                </tr>
                <tr>
                  <th>年月日時分秒</th>
                  <td>"2025/03/27 11:16:00"</td>
                </tr>
              </AppFormTable>
            </div>
          </div>
        </WrapLayout>
        <WrapLayout>
          <h3 className="text-h3 mb-4">3. 分頁資料格式</h3>
          <AppTitle>
            回傳page(頁數) , size(每頁筆數) , totalPages(總頁數) , totalElements(總筆數) 以及
            content(資料陣列)
          </AppTitle>
          <h5 className="text-h5 mb-1">常見問題</h5>
          <ul className="pl-5 list-disc mb-4">
            <li>page從 0 or 1 開始?</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <AppCodePanel>
              {`{
  "statusCode": "200",
  "message": "執行成功",
  "data": {
    "agencyResumeDTOPageList": {
      "page": 1,
      "size": 10,
      "totalPages": 4,
      "totalElements": 35,
      "content": [ ... ]
    }
  }
}`}
            </AppCodePanel>
            <AppCodePanel>
              {`{
  "statusCode": "200",
  "message": "執行成功",
  "data": {
    "page": 1,
    "size": 10,
    "totalPages": 4,
    "totalElements": 35,
    "content": [ ... ]
    }
}`}
            </AppCodePanel>
          </div>
        </WrapLayout>
        <WrapLayout>
          <h3 className="text-h3 mb-4">4. 訊息處理</h3>
          <h5 className="text-h5 mb-1">常見問題</h5>
          <ul className="pl-5 list-disc mb-4">
            <li>是否有副標題?</li>
            <li>訊息是否自動消失?</li>
            <li>是否需要關閉按鈕?</li>
            <li>通常是新增修改刪除會跳出訊息，那查詢需要嗎?</li>
          </ul>
          <div className="grid grid-cols-3 gap-x-4 mb-4">
            <div>
              <AppButton
                className="mb-4"
                onClick={() => {
                  success_sw("新增成功", "副標題副標題副標題");
                }}>
                點我看成功訊息
              </AppButton>
              <AppCodePanel>
                {`{
  "statusCode": "200",
  "message": "新增成功",
  "subMessage": "副標題副標題副標題",
  "data": { ... }
}
`}
              </AppCodePanel>
            </div>

            <div>
              <AppButton
                className="mb-4"
                approved
                onClick={() => {
                  warning_sw("警告訊息");
                }}>
                點我看警告訊息
              </AppButton>
              <AppCodePanel>
                {`{
  "statusCode": "300",
  "message": "執行成功",
  "data": { ... }
}
`}
              </AppCodePanel>
            </div>
            <div>
              <AppButton
                className="mb-4"
                danger
                onClick={() => {
                  failure_sw("新增失敗", "姓名欄位不可為空，請重新輸入");
                }}>
                點我看錯誤訊息
              </AppButton>
              <AppCodePanel>
                {`{
  "statusCode": "500", "400" or 其他
  "message": "新增失敗",
  "data": { ... }
}
`}
              </AppCodePanel>
            </div>
          </div>
          <h5 className="text-h5 mb-1">踩坑紀錄</h5>
          <ul className="pl-5 list-disc mb-4">
            <li className="mb-4">
              前端依據 responseBody 的 statusCode 判斷回傳狀態與顯示對應 icon，但後端在回傳
              statusCode = 500 時，並未實際拋出 HTTP 500 例外。
              <img src={rsdtoImage} alt="RsDTO format" className="mt-2 w-[300px]" />
            </li>
            <li>
              資安署專案初期並未規劃副標題欄位，後續需求新增時，後端回應無法支援 subMessage 欄位
            </li>
          </ul>
        </WrapLayout>
        <WrapLayout>
          <h3 className="text-h3 mb-4">5. 多選傳遞格式統一</h3>
          <h5 className="text-h5 mb-1">踩坑紀錄</h5>
          <ul className="pl-5 list-disc mb-4">
            <li>不同後端工程師對於多選欄位傳遞格式的理解不同，導致前端在串接時需要特別注意</li>
            <li>
              技能檢定專案初期我建議以陣列格式傳參數，因為前端套件本身是接受陣列，但後端認為以逗號分隔字串（如
              "1,2,3,4"）較方便；後期又希望前端改為陣列形式
            </li>
          </ul>
          <CheckboxGroupExample />
        </WrapLayout>
        <WrapLayout>
          <h3 className="text-h3 mb-4">6. API 呼叫方式統一</h3>
          <h5 className="text-h5 mb-1">建議</h5>
          <ul className="pl-5 list-disc mb-4">
            <li>GET → 使用 Query String 傳參數</li>
            <li>POST → 使用 Request Body 傳參數</li>
            <li>查詢類用GET</li>
            <li>操作類用POST</li>
            <li>全部用POST</li>
          </ul>
          <h5 className="text-h5 mb-1">踩坑紀錄</h5>
          <AppFormTable>
            <thead>
              <tr>
                <th className="w-[200px]">行為</th>
                <th>實際狀況</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>查詢 API</td>
                <td>有時用 POST，有時用 GET，導致前端在串接時需要特別注意</td>
              </tr>
              <tr>
                <td>POST 傳參方式</td>
                <td>有時用 Body，有時用 Query String</td>
              </tr>
            </tbody>
          </AppFormTable>
        </WrapLayout>
        <WrapLayout>
          <h3 className="text-h3 mb-4">7.文字框長度</h3>
          <h5 className="text-h5 mb-1">常見問題</h5>
          <ul className="pl-5 list-disc mb-4">
            <li>字數限制多少?</li>
          </ul>
        </WrapLayout>
        <WrapLayout>
          <h3 className="text-h3 mb-4">8.上傳 </h3>
          <h5 className="text-h5 mb-1">上傳格式：</h5>
          <AppFormTable>
            <thead>
              <tr>
                <th className="w-[150px]">格式</th>
                <th>說明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>FormData</td>
                <td>
                  <ul className="list-disc pl-5">
                    <li>適合上傳檔案，支援多種資料類型</li>
                    <li>其他表單資料請後端包成一個Object</li>
                  </ul>
                  <p className="mt-3 font-bold">有包物件</p>
                  <img src={formData2} />
                  <p className="mt-3 font-bold">沒包物件</p>
                  <img src={formData1} />
                </td>
              </tr>
              <tr>
                <td>Base64</td>
                <td>
                  <p className="mb-1">適合小型檔案，將檔案轉為字串格式</p>
                  <p className="font-bold">回傳範例格式:</p>
                  <div className="w-[650px]">
                    <AppCodePanel>
                      {`{
    "statusCode": "200",
    "messageCode": null,
    "message": "執行成功",
    "data": {
        "exportFileData": "77u/LCwsLCzlpKfkuovntIDos4fmlpnmmI....,
        "exportFileName": "大事紀資料明細資料表.csv",
    }
}`}
                    </AppCodePanel>
                  </div>
                </td>
              </tr>
            </tbody>
          </AppFormTable>
        </WrapLayout>
        <WrapLayout>
          <h3 className="text-h3 mb-4">9.下載</h3>
          <h5 className="text-h5 mb-1">回傳格式：</h5>
          <AppFormTable>
            <thead>
              <tr>
                <th className="w-[150px]">格式</th>
                <th>說明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base64</td>
                <td>
                  適合小型檔案下載
                  <p className="font-bold">優點</p>
                  <ul className="pl-5 list-disc">
                    <li>可以回傳其他資料 ex:成功訊息</li>
                  </ul>
                  <p className="font-bold">缺點</p>
                  <ul className="pl-5 list-disc">
                    <li>檔案變大 33%</li>
                    <li>記憶體負擔大</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>application/octet-stream</td>
                <td>
                  適合大型檔案下載(需要額外處理 response header Content-Disposition 來取得檔名)
                  <p className="font-bold">優點</p>
                  <ul className="pl-5 list-disc">
                    <li>效能最佳</li>
                    <li>支援大檔案</li>
                    <li>下載體驗好</li>
                  </ul>
                  <p className="font-bold">缺點</p>
                  <ul className="pl-5 list-disc">
                    <li>無法回傳其他訊息</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </AppFormTable>
        </WrapLayout>
        <WrapLayout>
          <h3 className="text-h3 mb-4">10.下拉選單API</h3>
          <h5 className="text-h5 mb-1">常見問題</h5>
          <ul className="pl-5 list-disc">
            <li>是否有統一的代碼檔？能否共用同一支 API，依參數回傳不同選項？</li>
            <li>每個下拉選單都需要個別 API 嗎？</li>
            <li>在新增/編輯提交時，是否同時傳 value + label？還是只傳 value？</li>
          </ul>
          <h5 className="text-h5 mb-1 mt-4">建議規範</h5>
          <ul className="pl-5 list-disc">
            <li>
              統一使用代碼檔 API：<code>/api/code?type=agency</code>
            </li>
            <li>
              回傳格式應固定：<code>value / label</code>
            </li>
            <li>
              提交時統一只傳 <code>value</code>，避免資料不同步
            </li>
          </ul>
        </WrapLayout>
        <WrapLayout>
          <h3 className="text-h3 mb-4">11. 回傳內容(RsDTO)</h3>
          <h5 className="text-h5 mb-1">常見問題</h5>
          <ul className="pl-5 list-disc mb-4">
            <li>表格要顯示label，後端可以同時回傳value+label嗎</li>
          </ul>
          <AppFormTable className="mb-4">
            <thead>
              <tr>
                <th className="w-[300px]">情境</th>
                <th>建議</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>僅需 join 一張代碼表、筆數少</td>
                <td>後端直接回傳 value + label（推薦）</td>
              </tr>
              <tr>
                <td>需跨多張表、資料量大或效能敏感</td>
                <td>前端呼叫代碼查詢 API，自行轉換 label</td>
              </tr>
            </tbody>
          </AppFormTable>
          <h5 className="text-h5 mb-1">踩坑記錄</h5>
          <ul className="pl-5 list-disc mb-4">
            <li>
              後端回傳的內容與新增/編輯使用的欄位名稱不一致，
              導致前端在進入編輯頁時需額外撰寫欄位對應或轉換邏輯。
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-1">回傳內容</p>
              <AppCodePanel>
                {`{
  "statusCode": "200",
  "message": "執行成功",
  "data": {
    "name": "John Doe",
    "age": 30,
    "email": "xxx@gmail.com"
}`}
              </AppCodePanel>
            </div>
            <div>
              <p className="font-bold mb-1">新增/編輯內容</p>
              <AppCodePanel>
                {`{
  "data": {
    "userName": "John Doe",
    "userAge": 30,
    "userEmail": "xxx@gmail.com"
}`}
              </AppCodePanel>
            </div>
          </div>
        </WrapLayout>
        <WrapLayout>
          <h3 className="text-h3 mb-4">12.測試環境</h3>
          <h5 className="text-h5 mb-1 mt-4">常見問題</h5>
          <ul className="pl-5 list-disc">
            <li>Swagger網址</li>
            <li>是否有cicd?</li>
            <li>請後端在確認程式已經部屬到sit再叫前端測</li>
          </ul>
        </WrapLayout>
      </div>
    </>
  );
}

export default BakendSection;
