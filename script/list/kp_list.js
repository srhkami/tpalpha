class KeyPoint {
  constructor(code, title, author, update, text) {
    this.code = code;
    this.title = title;
    this.author = author;
    this.update = update;
    this.text = text;
  }
}

export const list_kp = [
  new KeyPoint(
    'bikeMirror',
    '機車照後鏡大小之取締',
    '無奈 學長',
    '113 年 04 月 25 日',
    `
    <h4 class="mt-4 mb-3">「手把鏡(端子鏡)算不算違規？」</h4>
    <p>
      裝在手把兩端之照後鏡（法定用語，或稱後照鏡、後視鏡），算不算違規？從安規附件十五來看，照後鏡只要與車身主結構連接、不影響駕駛人視角即可。而安裝手把鏡後，只要車身寬度不超過
      <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#tipArea" data-rg="SR-38">
        安全規則38條</a>所訂尺度即可。而手把鏡是安裝而非裝載，故與<a  href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#tipArea" data-rg="SR-88">安全規則88條
      </a>無涉。
    </p>
    <h4 class="mt-4 mb-3">「照後鏡太小算不算違規？」</h4>
    <p >依據<a href="https://law.moj.gov.tw/LawClass/LawAll.aspx?PCODE=K0040065">車輛型式安全審驗管理辦法</a>附件二十七，照後鏡屬間接視野裝置，其目得在提供駕駛人後面、側邊之清晰視線，故有規定機車照後鏡「圓形鏡之直徑不得小於94公釐」、「非圓形鏡其尺寸需允許直徑78公釐的圓能鑲入反射面」。</p>
    <p >換言之，如果照後鏡鏡面過小不符合車審辦法附件之規定，自無法提供充足之後面、側邊視線，當可認定其違反<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#tipArea" data-rg="PH-16">處罰條例16條1項2款</a>「照後鏡擅自變更原有規格致影響行車安全」。
      
    <h4 class="mt-4 mb-3">小結</h4>
    <p >以上個人整理分享，也有實際就改裝之鏡面太小予以製單舉發。，取締時需備尺測量，舉發處罰條例16條1項2款：變更原有設備(致影響行車安全)，加註①「量測圓形鏡僅直徑xx公釐，影響行車安全」或②「非圓形鏡無法鑲入78公釐圓，影響行車安全」，責令改正、「限於○月○日○時前辦理」(依<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#tipArea" data-rg="DR-13">處理細則13條2項</a>所訂，期間得酌定於四日以內)。</p></p>
    `
  ),
  new KeyPoint(
    'bikePlate',
    '取締翹牌車實務作法分享',
    '無奈 學長',
    '109 年 06 月 02 日',
    `              
      <h4 class="text-primary mt-4 mb-3">前言</h4>
      <p>（文末有懶人包）</p>
      <p>翹牌違規是<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#tipArea" data-rg="SR-11">
        安全規則11條</a>所規範的，從安全規則這個條文衍生出<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#tipArea" data-rg="PH-12">處罰條例12</a>、<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#tipArea" data-rg="PH-13">13</a>、<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#tipArea" data-rg="PH-14">14條</a>的處罰，在此簡單區分一下：</p>
      <p>（一）12.1.7：號牌不依指定位置懸掛。
      <br>（二）13.1.1：毀損、變造、塗抹、污損牌照，或以安裝其他器具方式(常指翹牌器)使不能辨認牌號。
      <br>（三）14.2.2：號牌污穢或為他物遮蔽。</p>
      <p>白話一點講：</p>
      <p>（一）12.1.7：牌不按規定掛。
      <br>（二）13.1.1：牌號看不清。
      <br>（三）14.2.2：牌號看不到。</p>
      <h4 class="mt-4 mb-3">取締標準</h4>
      <p>至此，14.2.2很好確認，比較麻煩的是12.1.7跟13.1.1什麼狀況該適用哪個條文？</p>
      <p>12.1.7規範的是牌掛的不對，至於車牌號碼看的清不清楚，自非所問。所以，就算看的清楚，只要牌是翹的，還是能開12.1.7。</p>
      <p>由於<a href="https://www.mvdis.gov.tw/webMvdisLaw/SorderContent.aspx?SOID=15378">交通部96.04.26.交路字第0960028650號函</a>已經把「只要裝設旋轉架不論有無翹起均為未依規定懸掛」，所以有看到旋轉架，沒有翹，照樣開12.1.7。</p>
      <p>反倒是固定式的牌架，到底要幾度才能認定是翹牌呢？小弟以關鍵字「不依指定位置懸掛」搜遍機關函釋及法院裁判，都沒有提到"角度"。裁判心證中，固定式的翹牌就還是得扯到牌看不清才能符合12.1.7。</p>
      <p>小弟為了更ok的開固定式翹牌，自己訂了一個角度「60°」。為什麼是60°？</p>
      <p>因為安全規則11條中寫的，非原設有之固定位置的話，就要設在前、後正面明顯適當位置。這個正面，當然就是從正後方或正前方看。再量上數學的邏輯，傾角超過45°，以二分法來說就是朝上了。但直接用45°來取締，牌拔不完、答辯書也寫不完。所以我考量上了人站立時在適當距離下看著車牌，概約是俯視15°。因此，15+45就是60°的由來。</p>
      <p>有了這個自設的參考值，我對民眾都說「就數學而言，45°就算朝上了。但我如果45°就抓，也太機車了。但你這個都6X°了，再看看別人的車牌，你不覺得翹的太誇張了嗎？」大部分民眾都能接受。也有民眾會問有規定角度嗎？我也明說沒有，然後會再補充「我客觀的訂一個合邏輯的角度，應該好過我主觀覺得你翹牌吧」。這時大概都不會再跟我說什麼了。</p>
      <h4 class="mt-4 mb-3">懶人包</h4>
      <p>①目視主觀認定翹牌。</p>
      <p>②使用手機APP量號牌傾斜角度。</p>
      <p>③檢查有無裝設可調整(變動)的號牌旋轉架(有要拍照)。</p>
      <p>④後方及側面照片各一張。</p>
      <p>⑤有旋轉架，開12.1.7 (扣牌，註記 責令禁駛)。</p>
      <p>⑥固定式但傾角60°以上，開12.1.7 (扣牌，註記 責令禁駛)。</p>
      <p>⑦固定式而傾角55°~59°，補一句「牌這麼斜都看不清楚」，開13.1.1 (註記責令改正，給4日時限)。</p>
      <p>⑧未達55°，不開。</p>
      <p>⑨翹牌必改管，排氣朝上加開16.1.2 (註記責令改正，給4日時限)。</p>
      <p>★如有必要，可依85-2移置保管車輛。</p>
      <p>★扣牌且責令禁駛仍行駛者而查獲，號牌狀態尚未吊銷，依12.1.7(已領有號牌而未懸掛)舉發。</p>
      <p>★扣牌且責令禁駛仍行駛者而查獲，號牌狀態顯示為吊銷，則依12.1.8(號牌業經吊銷，無牌照仍行駛)舉發。</p>
      <br><br>
      <p>相關附件及照片，請參閱群組記事本。</p>
      <p>有誤請指正，謝謝大家。</p>
    `
  ),
  new KeyPoint(
    'fakeCarLicense',
    '偽造號牌之舉發及偵辦',
    '無奈 學長',
    '112 年 00 月 00 日',
    `
      <h4 class="mt-4 mb-3">「遇到牌照吊扣的車輛？」</h4>
      <p>遇到車籍顯示「執行條例處分吊扣」，而車上仍有掛牌的車輛，可以再確認一下是不是懸掛偽造車牌。</p>
      <p>因為處罰機關表示，原先因其他違規條款而有吊扣處罰之車輛，處罰機關會等到繳回牌照後、發予「汽車牌照吊扣執行單」後，始將其車籍登載為「吊扣」。</p>
      <p>基此，如果車牌資料顯示為「吊扣」，應已將車牌繳回，此時車上仍掛有車牌，相當高機率係自製假牌。</p>
      <h4 class="mt-4 mb-3">「違反刑法何罪？」</h4>
      <p>如確認係偽造車牌，偽造之車號經查有車籍資料，足以生損害於他人(該車號之車主)，屬<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#tipArea" data-rg="CC-212">刑法212條</a>，偽造特證文書，惟非現行犯。因為偽造非當下，而是早已完成之犯罪行為。</p>
      <p>如欲以現行犯處理，請以涉<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#tipArea" data-rg="CC-216">刑法216條</a>行使偽造文書之現行犯認定，再依現行犯程序處理。</p>
      <p>若偽造之車號為虛構、無車籍資料、或為車體本身之車號，部分法官仍認假車牌上路，已使民眾確信其真且影響監理機關之管理，有足以生損害於公眾之情，成立上記刑法之罪。</p>
      <h4 class="mt-4 mb-3">「違規部分如何舉發？」</h4>
      <p>如車籍為「牌照吊扣」而確實懸掛著偽造車牌，則：</p>
      <p>①	因<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#tipArea" data-rg="PH-12">處罰條例12條</a>1項6款並無扣繳牌照(即扣牌)之程序，因為這條成立的前提就是牌已繳回、沒有牌，所以舉發12.1.6時不用註記代保管物件。</p>
      <p>②	舉發12.1.6後，另予舉發12.1.3。此時12.1.3才有代保管牌照之程序。惟如併辦刑案(不論是212條或216條)，基於刑事優先，該偽造之牌照需先以刑事證物扣押。12.1.3的舉發單上，建議仍點選或手寫「代保管牌照○面」，並依<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#tipArea" data-rg="DR-28">處理細則28條3項</a>，在移送聯上註記「移送書文號、牌照先行扣押」。以免日後刑案發還證物時，處罰機關以移送書未寫扣牌而不收。</p>
      <p>③	 如為停車狀態，舉發12.4時，建議選擇或手寫「未領用有效號牌於道路停車」，較符合法理。同時另行舉發12.1.3。倘若因現場無行為人，而查證後該車並無失竊登記，即可以登記之車主作為處罰對象舉發、執行相關程序，並將車主列為嫌疑人，通知到案說明。</p>
      <br>
      <p>※ 亦歡迎使用「<a href="../pages/carLicense.html" >牌照違規速查</a>」功能一鍵查詢違反法條 ※</p>
    `
  ),
  new KeyPoint(
    'NoCarLicense',
    '未懸掛號牌之舉發',
    '無奈 學長',
    '112 年 00 月 00 日',
    `
      <h4 class="mt-4 mb-3">查無引擎號碼或車身號碼</h4>
      <p>① 查無引擎號碼或車身號碼，逕以拼裝車論處，舉發<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#tipArea" data-rg="PH-12">舉罰條例12條</a>1項2款。暫代保管空車乙輛，通知合約廠商拖吊。</p>
      <p>→類案裁判書：<a href="">臺灣新北地方法院 111 年度交字第 454 號判決</a> <br>（車身號碼磨掉、引擎號碼無資料，自述拼裝）</p>
      <p>② 查得引擎號碼或車身號碼，惟該號碼查無車籍資料，而該車係市面已有販售之車款，屬12.1.1前段違規（不用沒入！不用沒入！不用沒入！），亦無移置保管之規定。舉發後禁止其行駛。</p>
      <p>③ 查得引擎號碼或車身號碼，惟該號碼查無車籍資料，且查詢非市售車款。先依12.1.1後段舉發、暫代保管空車乙輛。再將該車採證照片及相關資料，依據<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#tipArea" data-rg="SR-17">安全規則17條</a>，函文：</p>
      <p>　❶ 車審中心進口車審驗部(查車審紀錄)
      <br>　❷ 關務署關務資訊組(查進口證明)
      <br>　❸ 車主戶籍地監理所(查檢驗領牌)
      <br>　※❶、❸必查，❷求周延
      </p>
      <p>（一）確無車審合格證明者，違反12.1.1後段無誤，處罰機關可依查證情形將該車沒入。暫代保管之車輛，通知合約廠商前來拖吊。</p>
      <p>（二）如有車審合格證明者，則更正舉發為12.1.1前段，車輛發還所有人。</p>
      <h4 class="mt-4 mb-3">查有引擎或車身號碼</h4>
      <p>① 查得引擎號碼或車身號碼，且有車籍、車籍正常，屬12.1.7違規，舉發並禁止其行駛。</p>
      <p>② 查得引擎號碼或車身號碼，而車籍為吊銷、註銷、吊扣、報停…等情，分依12條1項之6、8款舉發，移置保管車輛。如車主在場表示自行拖離，依<a href="https://www.mvdis.gov.tw/webMvdisLaw/SorderContent.aspx?SOID=16244">交通部107.11.19交路字第1070029957號函</a>，得當場發還車輛。</p>
      <p>③ 查得引擎號碼或車身號碼，而車籍為一般報廢、註銷轉報廢……等，以12.1.9論處，暫代保管空車乙輛，通知合約廠商拖吊。</p>
      <p>④ 不論有無車身號碼或引擎號碼，亦不論是否查得車籍資料，如顯為拼湊、組裝之車輛，如：拼裝三輪車、加裝引擎(或馬達)之慢車……等，逕以拼裝車論處，12.1.2。暫代保管空車乙輛，通知合約廠商拖吊。</p>
      <h4 class="mt-4 mb-3">停車狀態</h4>
      <p>① 依12.4處理，須查明車主始得舉發。</p>
      <p>② 不需特地查明是否有車審，因為12.4沒有沒入規定，只有移置保管。</p>
      <p>③ 車籍如為報廢，不得舉發，應依<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#tipArea" data-rg="PH-82-1">處罰條例82-1條</a>規定處理。</p>
      <br>
      <p>※ 亦歡迎使用「<a href="../pages/carLicense.html" >牌照違規速查</a>」功能一鍵查詢違反法條 ※</p>
    `
  ),

  new KeyPoint(
    'otherCarLicense',
    '懸掛他車號牌之舉發',
    '無奈 學長',
    '112 年 00 月 00 日',
    `
    <h4 class="mt-4 mb-3">行駛狀態</h4>
    <p>①	車體部分，比照「<a href="../pages/keypoint.html?item=NoCarLicense">未懸掛號牌之舉發</a>」一文程序辦理，另舉發<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#tipArea" data-rg="PH-12">舉罰條例12條</a>1項5款「使用他車牌照」。</p>
    <p>②	他車牌不論車籍如何，舉發「牌照借供他車使用」、暫代保管汽牌○面(機牌1面)。惟他車牌如為失竊狀態，原則上不舉發他車牌之所有人。但經查明報案時間比對懸掛時間，而有積極事證得證明他車牌之所有人將車牌借供他人使用，仍應舉發12.1.5「牌照借供他車使用」。</p>
    <p>③	他車牌如為偽造車牌，舉發車體所有人12.1.3，違反刑法部分請參閱「<a href="../pages/keypoint.html?item=fakeCarLicense">偽造號牌之舉發及偵辦</a>」一文第二段</a>。</p>
    <p>④	他車牌如為變造車牌：</p>
    <p>❶ 變造之車牌，如為他人所有，舉發車體所有人12.1.3。
    <br>→變造車牌還原後車號，如非失竊狀態，則舉發12.1.5「牌照借供他人使用」。
    <br>→變造車牌還原後車號，如為失竊狀態，依④之方式處理。
    <br>→變造車牌涉嫌<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#tipArea" data-rg="CC-212">刑法212條</a>「變造特種文書罪」(變造行為已完成，非現行犯)、<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#tipArea" data-rg="CC-216">216條</a>「行使變造文書罪」(使用中，現行犯)。</p>
    <p>❷ 變造之車牌如為車體車主所有，惟非該車體之車牌，舉發車體所有人12.1.3，其變造之車牌舉發12.1.5「牌照借供他人使用」。刑事部分比照❶方式辦理。</p>
    <p>❸變造之車牌如為車體所有人所有，且即為該車之車牌，則車體及車牌均無12.1.5之適用，僅舉發12.1.3，刑事部分比照❶辦理。
    <br>→類案裁判書：<a href="https://judgment.judicial.gov.tw/FJUD/data.aspx?ty=JD&id=KSDM,104%2c%e7%b0%a1%2c1448%2c20150720%2c1">臺灣高雄地方法院 104 年度簡字第 1448 號刑事判決</a>（變造自己的車牌）。
    </p>
    <h4 class="mt-4 mb-3">停車狀態</h4>
    <p>① 車體依12.4、12.1.5舉發。</p>
    <p>② 車牌部分參考上述方式處理。</p>
    <p>③車體之車籍如為報廢，不得舉發12.4，應依<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#tipArea" data-rg="PH-82-1">處罰條例82-1條</a>規定辦理。</p>   
    <p>※註：偽造車牌vs.變造車牌
      <br>　偽造，做一張假牌。
      <br>　變造，真牌上加工變號。.
    </p>
    <br>
    <p>※ 亦歡迎使用「<a href="../pages/carLicense.html" >牌照違規速查</a>」功能一鍵查詢違反法條 ※</p>
    `
  ),
  new KeyPoint(
    'visionSystem',
    '行車視野輔助系統裝設規定',
    '無奈 學長',
    '112 年 00 月 00 日',
    `
      <h4 class="mt-4 mb-3">所有大貨車、大客車均須安裝</h4>
      <p>① 依據車輛型式安全審驗管理辦法附件七十一，107年1月1日起新領牌之車輛，應安裝【基準型】，簡易判斷如下：</p>
      <p>● 系統於車輛啟動時自動開啟，不得設置手動開關。</p>
      <p>● 車身兩側及後方至少各裝一顆鏡頭（未規定車前應安裝鏡頭）。</p>
      <p>● 兩側之攝影系統具備影像紀錄留存功能者，留存影像之總時間應不小
        於三十分鐘。
        </p>
      <p>● 駕駛室應裝設顯示螢幕且尺寸不小於七吋。</p>
      <p>● 螢幕應全時顯示兩側影像；或於使用方向燈時持續顯示該側影像。</p>
      <p>● 入倒車檔2秒內，顯示倒車影像，應於倒車行駛期間持續顯示。</p>
      <p>② 106年12月31日前即領牌之車輛，應自下列擇一裝設（未規定保存時間）：</p>
      <p>❶ 標準型：左右兩側視野鏡頭及可顯示車身兩側影像之車內螢幕。</p>
      <p>❷ 簡易型：於車輛右側裝設一個外部近側視鏡並於車輛右前側裝設雷達警示系統。</p>
      <p>❸ 環景型：可顯示車輛四周影像之環景顯示系統。</p>
      <h4 class="mt-4 mb-3">小貨車下列條件均符合者，亦須安裝標準型</h4>
      <p>① 109年09月04日起新領照。</p>
      <p>② 總重（車重+載重）逾3500kg至5000kg。</p>
    `
  ),
  new KeyPoint(
    'taxi',
    '計程車常見違規項目',
    '黃家進 學長',
    '112 年 00 月 00 日',
    '更新中……敬請期待！'
  )




]