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
    'licenseState',
    '駕照、牌照異常狀態一覽',
    '無奈 學長',
    '112 年 07 月 24 日',
    `
      <h4 class="mt-4 mb-3">吊扣</h4>
      <p>因有違反規定之駕駛、行駛行為，或不配合規定之行為，故「暫時收回有效之牌照、駕照」，期滿或達成條件時發還。牌照、駕照自始至終為有效，惟吊扣期間不得使用。</p>
      <h4 class="mt-4 mb-3">吊銷</h4>
      <p>因有違反規定之駕駛、行駛行為，或重複違反違規、或不配合規定之行為，故「收回並銷毀有效之牌照、駕照」。吊銷處分，明文於處罰條款之主文。</p>
      <h4 class="mt-4 mb-3">註銷</h4>
      <p>汽車逾相當期限不參加檢驗之處罰，或汽車非正式牌照(臨時牌、試車牌)之無效，或微電車牌照之無效，註之註銷，即「註記銷毀有效之牌照、駕照」</p>
      <h4 class="mt-4 mb-3">逕行註銷</h4>
      <p>逕行註銷：即「該來不來」，如：應受吊(註)註處分而不到案、逾期不參加審驗、車輛所有人異動而未依法辦理異動登記……等等，由監理機關「逕行註記銷毀應屬無效牌照、駕照」。</p>
      <h4 class="mt-4 mb-3">繳銷</h4>
      <p>有效之牌照、駕照，因已無需要，故自行繳回監理機關辦理註銷。</p>
      <h4 class="mt-4 mb-3">小結</h4>
      <p>以上是小弟自處罰條例、安全規則、處理細則中，整理出來這些名詞的"定義"。因為官方沒有整合說明，所以只能自己推敲，幫助理解記憶，大家卓參。</p>
      <h4 class="mt-4 mb-3">懶人包</h4>
      <p>顯示為【吊銷、繳銷】，是有把牌照、駕照到案繳回的。因為是"銷"，所以繳回後即無效。</p>
      <p>顯示為【○○註銷】、【○○逕註】，就是未依法定時限到案、或未將應依法無效之牌照、駕照繳回的。</p>
      <p>顯示為【吊扣】，就是有效之牌照、駕照於一定期間不得使用。駕籍會顯示吊扣期間之起迄日期，車籍則只會顯示「執行條例處分吊扣」(有顯示即為吊扣狀態)。</p>
    `
  ),
  new KeyPoint(
    'fakeCarLicense',
    '偽造號牌之舉發及偵辦',
    '無奈 學長',
    '112 年 05 月 02 日',
    `
      <h4 class="mt-4 mb-3">「遇到牌照吊扣的車輛？」</h4>
      <p>遇到車籍顯示「執行條例處分吊扣」，而車上仍有掛牌的車輛，可以再確認一下是不是懸掛偽造車牌。</p>
      <p>因為處罰機關表示，原先因其他違規條款而有吊扣處罰之車輛，處罰機關會等到繳回牌照後、發予「汽車牌照吊扣執行單」後，始將其車籍登載為「吊扣」。</p>
      <p>基此，如果車牌資料顯示為「吊扣」，應已將車牌繳回，此時車上仍掛有車牌，相當高機率係自製假牌。</p>
      <h4 class="mt-4 mb-3">「違反刑法何罪？」</h4>
      <p>如確認係偽造車牌，偽造之車號經查有車籍資料，足以生損害於他人(該車號之車主)，屬<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="CC-212">刑法212條</a>，偽造特證文書，惟非現行犯。因為偽造非當下，而是早已完成之犯罪行為。</p>
      <p>如欲以現行犯處理，請以涉<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="CC-216">刑法216條</a>行使偽造文書之現行犯認定，再依現行犯程序處理。</p>
      <p>若偽造之車號為虛構、無車籍資料、或為車體本身之車號，部分法官仍認假車牌上路，已使民眾確信其真且影響監理機關之管理，有足以生損害於公眾之情，成立上記刑法之罪。</p>
      <h4 class="mt-4 mb-3">「違規部分如何舉發？」</h4>
      <p>如車籍為「牌照吊扣」而確實懸掛著偽造車牌，則：</p>
      <p>①	因<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-12">處罰條例12條</a>1項6款並無扣繳牌照(即扣牌)之程序，因為這條成立的前提就是牌已繳回、沒有牌，所以舉發12.1.6時不用註記代保管物件。</p>
      <p>②	舉發12.1.6後，另予舉發12.1.3。此時12.1.3才有代保管牌照之程序。惟如併辦刑案(不論是212條或216條)，基於刑事優先，該偽造之牌照需先以刑事證物扣押。12.1.3的舉發單上，建議仍點選或手寫「代保管牌照○面」，並依<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="DR-28">處理細則28條3項</a>，在移送聯上註記「移送書文號、牌照先行扣押」。以免日後刑案發還證物時，處罰機關以移送書未寫扣牌而不收。</p>
      <p>③	 如為停車狀態，舉發12.4時，建議選擇或手寫「未領用有效號牌於道路停車」，較符合法理。同時另行舉發12.1.3。倘若因現場無行為人，而查證後該車並無失竊登記，即可以登記之車主作為處罰對象舉發、執行相關程序，並將車主列為嫌疑人，通知到案說明。</p>
      <br>
      <p>※ 亦歡迎使用「<a href="../pages/carLicense.html" >牌照違規速查</a>」功能一鍵查詢違反法條 ※</p>
    `
  ),
  new KeyPoint(
    'noCarLicense',
    '未懸掛號牌之舉發',
    '無奈 學長',
    '112 年 05 月 16 日',
    `
      <h4 class="mt-4 mb-3">查無引擎號碼或車身號碼</h4>
      <p>① 查無引擎號碼或車身號碼，逕以拼裝車論處，舉發<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-12">舉罰條例12條</a>1項2款。暫代保管空車乙輛，通知合約廠商拖吊。</p>
      <p>→類案裁判書：
      <br><a href="https://judgment.judicial.gov.tw/FJUD/data.aspx?ty=JD&id=PCDA,111%2c%e4%ba%a4%2c454%2c20221128%2c1">臺灣新北地方法院 111 年度交字第 454 號判決</a>（車身號碼磨掉、引擎號碼無資料，自述拼裝）
      <br><a href="https://judgment.judicial.gov.tw/FJUD/data.aspx?ty=JD&id=TPHM,95%2c%e4%ba%a4%e6%8a%97%2c180%2c20060322%2c1">臺灣高等法院 95 年度交抗字第 180 號刑事裁定</a> ：任何非由合格正式車廠所設計、製造出廠之車輛或在原廠車上任意改裝非屬原廠設計規範或容許代換之零件，均屬拼裝車。
      <br
      ></p>
      <p>② 查得引擎號碼或車身號碼，惟該號碼查無車籍資料，而該車係市面已有販售之車款，屬12.1.1前段違規（不用沒入！不用沒入！不用沒入！），亦無移置保管之規定。舉發後禁止其行駛。</p>
      <p>③ 查得引擎號碼或車身號碼，惟該號碼查無車籍資料，且查詢非市售車款。先依12.1.1後段舉發、暫代保管空車乙輛。再將該車採證照片及相關資料，依據<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="SR-17">安全規則17條</a>，函文：</p>
      <p>　❶ 車審中心進口車審驗部(查車審紀錄)
      <br>　❷ 關務署關務資訊組(查進口證明)
      <br>　❸ 車主戶籍地監理所(查檢驗領牌)
      <br>　※❶、❸必查，❷求周延
      </p>
      <p>（一）確無車審合格證明者，違反12.1.1後段無誤，處罰機關可依查證情形將該車沒入。暫代保管之車輛，通知合約廠商前來拖吊。</p>
      <p>（二）如有車審合格證明者，則更正舉發為12.1.1前段，車輛發還所有人。</p>
      <p>→相關函釋：
      <br><a href="https://www.mvdis.gov.tw/webMvdisLaw/SorderContent.aspx?SOID=15930">交通部 107.01.10 交路字第1060416992號函</a>：「拆除原廠車輛、以零組件等方式進口後再組裝」、「整車進口」或「國內產製」之車輛，凡未領用牌照且未取得安全審驗合格」，於違反規定時，沒入車輛。。
      </p>
      <h4 class="mt-4 mb-3">查有引擎或車身號碼</h4>
      <p>① 查得引擎號碼或車身號碼，且有車籍、車籍正常，屬12.1.7違規，舉發並禁止其行駛。</p>
      <p>② 查得引擎號碼或車身號碼，而車籍為吊銷、註銷、吊扣、報停…等情，分依12條1項之6、8款舉發，移置保管車輛。如車主在場表示自行拖離，依<a href="https://www.mvdis.gov.tw/webMvdisLaw/SorderContent.aspx?SOID=16244">交通部107.11.19交路字第1070029957號函</a>，得當場發還車輛。</p>
      <p>③ 查得引擎號碼或車身號碼，而車籍為一般報廢、註銷轉報廢……等，以12.1.9論處，暫代保管空車乙輛，通知合約廠商拖吊。</p>
      <p>④ 不論有無車身號碼或引擎號碼，亦不論是否查得車籍資料，如顯為拼湊、組裝之車輛，如：拼裝三輪車、加裝引擎(或馬達)之慢車……等，逕以拼裝車論處，12.1.2。暫代保管空車乙輛，通知合約廠商拖吊。</p>
      <h4 class="mt-4 mb-3">停車狀態</h4>
      <p>① 依12.4處理，須查明車主始得舉發。</p>
      <p>② 不需特地查明是否有車審，因為12.4沒有沒入規定，只有移置保管。</p>
      <p>③ 車籍如為報廢，不得舉發，應依<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-82-1">處罰條例82-1條</a>規定處理。</p>
      <br>
      <p>※ 亦歡迎使用「<a href="../pages/carLicense.html" >牌照違規速查</a>」功能一鍵查詢違反法條 ※</p>
    `
  ),
  new KeyPoint(
    'otherCarLicense',
    '懸掛他車號牌之舉發',
    '無奈 學長',
    '112 年 05 月 16 日',
    `
    <h4 class="mt-4 mb-3">行駛狀態</h4>
    <p>①	車體部分，比照「<a href="../pages/keypoint.html?item=noCarLicense">未懸掛號牌之舉發</a>」一文程序辦理，另舉發<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-12">舉罰條例12條</a>1項5款「使用他車牌照」。</p>
    <p>②	他車牌不論車籍如何，舉發「牌照借供他車使用」、暫代保管汽牌○面(機牌1面)。惟他車牌如為失竊狀態，原則上不舉發他車牌之所有人。但經查明報案時間比對懸掛時間，而有積極事證得證明他車牌之所有人將車牌借供他人使用，仍應舉發12.1.5「牌照借供他車使用」。</p>
    <p>③	他車牌如為偽造車牌，舉發車體所有人12.1.3，違反刑法部分請參閱「<a href="../pages/keypoint.html?item=fakeCarLicense">偽造號牌之舉發及偵辦</a>」一文第二段</a>。</p>
    <p>④	他車牌如為變造車牌：</p>
    <p>❶ 變造之車牌，如為他人所有，舉發車體所有人12.1.3。
    <br>→變造車牌還原後車號，如非失竊狀態，則舉發12.1.5「牌照借供他人使用」。
    <br>→變造車牌還原後車號，如為失竊狀態，依④之方式處理。
    <br>→變造車牌涉嫌<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="CC-212">刑法212條</a>「變造特種文書罪」(變造行為已完成，非現行犯)、<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="CC-216">216條</a>「行使變造文書罪」(使用中，現行犯)。</p>
    <p>❷ 變造之車牌如為車體車主所有，惟非該車體之車牌，舉發車體所有人12.1.3，其變造之車牌舉發12.1.5「牌照借供他人使用」。刑事部分比照❶方式辦理。</p>
    <p>❸變造之車牌如為車體所有人所有，且即為該車之車牌，則車體及車牌均無12.1.5之適用，僅舉發12.1.3，刑事部分比照❶辦理。
    <br>→類案裁判書：<a href="https://judgment.judicial.gov.tw/FJUD/data.aspx?ty=JD&id=KSDM,104%2c%e7%b0%a1%2c1448%2c20150720%2c1">臺灣高雄地方法院 104 年度簡字第 1448 號刑事判決</a>（變造自己的車牌）。
    </p>
    <h4 class="mt-4 mb-3">停車狀態</h4>
    <p>① 車體依12.4、12.1.5舉發。</p>
    <p>② 車牌部分參考上述方式處理。</p>
    <p>③車體之車籍如為報廢，不得舉發12.4，應依<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-82-1">處罰條例82-1條</a>規定辦理。</p>   
    <p>※註：偽造車牌vs.變造車牌
      <br>　偽造，做一張假牌。
      <br>　變造，真牌上加工變號。.
    </p>
    <br>
    <p>※ 亦歡迎使用「<a href="../pages/carLicense.html" >牌照違規速查</a>」功能一鍵查詢違反法條 ※</p>
    `
  ),
  new KeyPoint(
    'bikeMirror',
    '機車照後鏡大小之取締',
    '無奈 學長',
    '113 年 04 月 25 日',
    `
    <h4 class="mt-4 mb-3">「手把鏡(端子鏡)算不算違規？」</h4>
    <p>
      機車裝在手把兩端之照後鏡（法定用語，或稱後照鏡、後視鏡），算不算違規？從安規附件十五來看，照後鏡只要與車身主結構連接、不影響駕駛人視角即可。而安裝手把鏡後，只要車身寬度不超過
      <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="SR-38">
        安全規則38條</a>所訂尺度即可。而手把鏡是安裝而非裝載，故與<a  href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="SR-88">安全規則88條
      </a>無涉。
    </p>
    <h4 class="mt-4 mb-3">「照後鏡太小算不算違規？」</h4>
    <p >依據<a href="https://law.moj.gov.tw/LawClass/LawAll.aspx?PCODE=K0040065">車輛型式安全審驗管理辦法</a>附件二十七，照後鏡屬間接視野裝置，其目得在提供駕駛人後面、側邊之清晰視線，故有規定機車照後鏡「圓形鏡之直徑不得小於94公釐」、「非圓形鏡其尺寸需允許直徑78公釐的圓能鑲入反射面」。</p>
    <p >換言之，如果照後鏡鏡面過小不符合車審辦法附件之規定，自無法提供充足之後面、側邊視線，當可認定其違反<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-16">處罰條例16條1項2款</a>「照後鏡擅自變更原有規格致影響行車安全」。
      
    <h4 class="mt-4 mb-3">小結</h4>
    <p >以上個人整理分享，也有實際就改裝之鏡面太小予以製單舉發。取締時需備尺測量，舉發處罰條例16條1項2款：變更原有設備(致影響行車安全)，加註①「量測圓形鏡僅直徑xx公釐，影響行車安全」或②「非圓形鏡無法鑲入78公釐圓，影響行車安全」，責令改正、「限於○月○日○時前辦理」(依<a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="DR-13">處理細則13條2項</a>所訂，期間得酌定於四日以內)。</p></p>
    `
  ),
  new KeyPoint(
    'visionSystem',
    '行車視野輔助系統裝設規定',
    '無奈 學長',
    '112 年 12 月 06 日',
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
    'rulingTerm',
    '裁決與申訴時限',
    '無奈 學長',
    '112 年 09 月 01 日',
    `
      <h4 class="mt-4 mb-3">申訴時限</h4>
      <p>為什麼偶爾會遇到處罰機關來文，要求員警就N月、甚至N年前的交通違規舉發案件進行答辯？</p>
      <p>有關民眾申訴（法定用語為「受處分人」、「違規行為人」、「陳述意見」），法條上有兩個時間點限制。一是「接獲通知單後三十日內」，二是「未經裁決自行繳納罰緩後三十日內」。條文雖有明訂時限，但並沒有說超過時限，民眾就不能申訴。</p>
      <p>※請注意！申訴的時限跟應到案期限，無直接關係。</p>
      <p>再來，民眾如果到案（不論是否逾到案日期）不服舉發、提出申訴，處罰機關要作成裁決前，一定會發函來詢問舉發員警的意見。</p>
      <p>假如民眾一直沒繳、也沒到案，處罰機關自行作成裁決，民眾在收到裁決書後（三十日內）提起訴訟，處罰機關為重新審查或繕造答辯狀，仍會發函詢問舉發員警的意見。</p>
      <h4 class="mt-4 mb-3">裁決時限</h4>
      <p>如果民眾沒繳、沒到案、也沒申訴，處罰機關幾時才會自行作為裁決？難道沒有時限嗎？</p>
      <p>有的，條文是這麼寫的「通知單送達且逾應到期限六十日之三個月內，逕行裁決之。但警察機關……通知單送達且逾應到期限之三個月內，逕行裁決之。」很饒舌對吧？條列式呈現如下：</p>
      <h5>汽車（公路主管機關）</h5>
      <p>① 受處罰人在場且當場簽收或拒絕簽收但完成視同已收受程序，自填單日起算，90日後起至90日+3個月止，應逕行裁決。</p>
      <p>② 受處罰人在場但未完成舉發程序而離去，或受處罰人非在場，進而另行送達，自填單日起算，105日後起至105日+3個月止，應逕行裁決。</p>
      <h5>慢車、行人、道路障礙、應廢止或吊扣執登案件（警察機關）</h5>
      <p>① 受處罰人在場且當場簽收或拒絕簽收但完成視同已收受程序，自填單日起算，30日後起至30日+3個月止，應逕行裁決。</p>
      <p>② 受處罰人在場但未完成舉發程序而離去，或受處罰人非在場，因而另行送達，自填單日起算，45日後起至45日+3個月止，應逕行裁決。</p>
      <h4 class="mt-4 mb-3">小結</h4>
      <p>雖然有明訂處罰機關應逕予裁決的時限，但並沒有說超過時限就不能裁決。除非是超過行政罰法所訂的三年裁處權時校，那就真的不能裁決了。而只要裁決，就需要詢問舉發人員的意見。</p>
      <p>因此，若是收到來函說要寫答辯，只要是三年左右以內的違規，都不必大驚小怪。</p>
      <h4 class="mt-4 mb-3">參考條文</h4>
      <p>
      處罰條例
      <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-8">
      8條2項
      </a>、
      <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-9">
      9條1項
      </a>、
      <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-37">
      37條6項
      </a>、
      <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-87">
      87條
      </a>；
      <p>處理細則
      <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="DR-37">
      37條
      </a>、
      <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="DR-40">
      40條
      </a>、
      <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="DR-41">
      41條4項
      </a>、
      <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="DR-43">
      43條1項
      </a>、
      <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="DR-44">
      44條1項
      </a>、
      <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="DR-45">
      45條1項.2項
      </a>、
      <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="DR-48">
      48條1項
      </a>、
      <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="DR-59">
      59條2項
      </a>、
      <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="DR-65">
      65條1項.2項
      </a>；
      </p>
      <p>行政罰法 27條1項</p>
    `
  ),
  new KeyPoint(
    'parking',
    '紅黃白線停車規定',
    '無奈 學長',
    '不詳',
    `
      <h4 class="mt-4 mb-3">標線定義</h4>
      <p>小弟綜整多年來對紅黃白線停車問題，提出個人意見。</p>
      <p>首先！也是最重要的！路面邊線（15cm寬之白線）的定義本身，跟臨時停車、停車，毫無關係！</p>
      <p>白線跟停車，沒有關係！這條線只是告訴用路人，線的一邊「<span class="text-danger">是</span>車道」路面範圍，另一邊「<span class="text-danger">不是</span>車道」路面範圍（如：路肩）。</p>
      <p>如果路面邊線外，沒有其他可作為定義路面邊緣的法定要件（如道路緣石、紅線、黃線），那路面邊線就是理所當然的路面邊緣！</p>
      <br>
      <p>好的，接下來先忘了白線，來談談紅線、黃線，在定義上真正告訴你能不能臨時停車、停車的標線。</p>
      <p>在劃設紅線、黃線的部分，倘若紅線、黃線沒有劃設在道路緣石上，那就應該要劃設在距離「道路」路面邊緣30cm的位置為宜。這邊正確的邏輯是，先確定出「道路」路面邊緣，再量30cm，才劃設紅線、黃線！</p>
      <p>不過，以前劃線沒這麼嚴謹，才會發現紅線、黃線距路面邊緣不止或不足30cm。而執法實務或法院審判時，就變成先看紅線、黃線在哪，再去量出路面邊緣何在。</p>
      <p>講完標線的定義後，就來看看標線與停車的關係。</p>
      
      <h4 class="mt-4 mb-3">標線與停車的關係</h4>
      <p>在只有路面邊線（15cm寬之白線）而「<span class="text-danger">無紅線、黃線、緣石</span>」的路段，那車輛停在白線外側，自然沒有問題。因為白線本身已是路面邊緣，車停於白線外側，自屬已緊靠道路右側，甚或路肩夠寬，亦不能論併排停車（視狀況論妨礙其他人車出入）。</p>
      <p>而如果在只有路面邊線（15cm寬之白線）的路段，雖「<span class="text-danger">無紅線、黃線，但有緣石</span>」，則此時的路面邊緣，是以緣石起算。</p>
      <p>在繪設有紅線、黃線路段而「<span class="text-danger">無緣石</span>」的路段，那紅線、黃線外的30cm處，便是「道路」路面邊緣。在這 路面邊緣 以外，「原則上」不屬道路範圍，自然其停車就不適用道路交通規則了。</p>
      <p>這裡所謂的原則上，就是標線在劃設之初，先確定好路面邊緣、量出30cm後才劃設。現在養護道路後在繪設紅線、黃線，都是距離瀝青（柏油）舖面邊緣30cm處來繪設，比較沒有問題了。</p>
      <h4 class="mt-4 mb-3">道路側溝</h4>
      <p>至於道路側溝，即有加蓋之水溝，算不算道路範圍，應依前述規定來論是否在道路範圍內，即依「緣石、紅(黃)線外30cm、路面邊線之優先順序」，來看加蓋水溝有沒有在道路範圍內。如果依標線規則無法判斷，則由當地道路主管機關來認定。</p>
      <p>認定時，交通局通常會函詢工務局，工務局應該會回覆「道路側溝依市區道路條例第3條屬本局養護範圍，惟是否屬道路交通管理處罰條例之道路範圍，宜由貴局自行認定」，再來就看各地交通局怎麼說了。</p>
      
      <h4 class="mt-4 mb-3">參考條文及函釋</h4>
      <p>處罰條例
      <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-3">3條</a>、
      <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-55">55條</a>、
      <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-56">56條</a>；
      </p>
      <p>安全規則
      <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="SR-111">111條</a>、
      <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="SR-112">112條</a>；
      </p>
      <p>設置規則
      <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="DR-168">168條</a>、
      <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="DR-169">169條</a>、
      <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="DR-183">183條</a>；
      </p>
      <p><a href="https://www.mvdis.gov.tw/webMvdisLaw/SorderContent.aspx?SoID=15309">交通部90.08.13.交路九十字第008745號函</a>：紅線、黃線外側停車疑義</p>
      <p><a href="https://www.mvdis.gov.tw/webMvdisLaw/SorderContent.aspx?SOID=15207">交通部路政司94.08.23.路臺營字第0940401267號函</a>：路面邊線外側停車疑義</p>
      <p><a href="https://www.mvdis.gov.tw/webMvdisLaw/SorderContent.aspx?SOID=15325">交通部96.10.15.路臺監字第0960414227號函</a>：路面邊緣起算是否包含水溝疑義</p>
      <p><a href="https://www.mvdis.gov.tw/webMvdisLaw/SorderContent.aspx?SoID=16195">交通部108.06.26交路字第1085007741號函</a>：併排停車、併排臨時停車定義</p>    
    `
  ),
  new KeyPoint(
    'taxi',
    '計程車常見違規項目',
    '黃家進 學長',
    '112 年 04 月 22 日',
    `
      <div class="container-fuild">
      <div class="row">
        <div class="col-2 border d-flex justify-content-center align-items-center">
          違反條目
        </div>
        <div class="col-7 border d-flex justify-content-center align-items-center">
          違反內容
        </div>
        <div class="col-3 border d-flex justify-content-center align-items-center">
          備註
        </div>
      </div>
      <div class="row">
        <div class="col-2 border d-flex justify-content-center align-items-center">
          <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-16">
            16.1.4
          </a>
        </div>
        <div class="col-7 border py-2">
          未於兩側後門或後葉子板標示牌照號碼及車主名稱。<br>
        (多元化計程車不在此限)<br>
        (<a href="#" class="showArticle d-inline" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="SR-42">
          安全規則42.1.3
          </a>)
          </div>
        <div class="col-3 border d-flex align-items-center">
          處所有人<br>
          得郵繳<br>
          責令改正
        </div>
      </div>
      <div class="row">
        <div class="col-2 border d-flex justify-content-center align-items-center">
          <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-16">
            16.1.4
          </a>
        </div>
        <div class="col-7 border py-2">
          未於後窗玻璃標示牌照號碼。 <br>
        (多元化計程車不在此限)<br> 
        (<a href="#" class="showArticle d-inline" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="SR-42">
          安全規則42.1.3
          </a>) 
          </div>
        <div class="col-3 border d-flex align-items-center">
          處所有人<br>
          得郵繳<br>
          責令改正
        </div>
      </div>
      <div class="row">
        <div class="col-2 border d-flex justify-content-center align-items-center">
          <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-16">
            16.1.4
          </a>
        </div>
        <div class="col-7 border py-2">
          未於右前座椅背標示牌照號碼。 <br> 
          (<a href="#" class="showArticle d-inline" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="SR-42">
            安全規則42.2
            </a>) 
        </div>
        <div class="col-3 border d-flex align-items-center">
          處所有人<br>
          得郵繳<br>
          責令改正
        </div>
      </div>
      <div class="row">
        <div class="col-2 border d-flex justify-content-center align-items-center">
          <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-16">
            16.1.5
          </a>
        </div>
        <div class="col-7 border py-2">
          未依規定裝置自動計費器。 <br> 
        </div>
        <div class="col-3 border d-flex align-items-center">
          處所有人<br>
          應到案<br>
          責令改正
        </div>
      </div>
      <div class="row">
        <div class="col-2 border d-flex justify-content-center align-items-center">
          <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-16">
            16.1.5
          </a>
        </div>
        <div class="col-7 border py-2">
          未依規定裝置車頂燈。<br> 
          (應固定於車頂前半部適當位置，不得以磁鐵吸住方式安裝) <br> 
          (盞數應為一盞，燈色不得為紅色)<br> 
          (安全規則附件七) 
        </div>
        <div class="col-3 border d-flex align-items-center">
          處所有人<br>
          應到案<br>
          責令改正
        </div>
      </div>
      <div class="row">
        <div class="col-2 border d-flex justify-content-center align-items-center">
          <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-16">
            16.1.5
          </a>
        </div>
        <div class="col-7 border py-2">
          未依規定裝置執業登記證插座 <br> 
          (應於儀錶板上右側與右前座椅背設置執登證插座) <br> 
          (<a href="#" class="showArticle d-inline" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="SR-42">
            安全規則42.2
            </a>) 
        </div>
        <div class="col-3 border d-flex align-items-center">
          處所有人<br>
          應到案<br>
          責令改正
        </div>
      </div>
      <div class="row">
        <div class="col-2 border d-flex justify-content-center align-items-center">
          <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-16">
            16.1.5
          </a>
        </div>
        <div class="col-7 border py-2">
          前、後兩邊玻璃門上，黏貼不透明反光紙  <br> 
          (<a href="#" class="showArticle d-inline" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="SR-39-1">
            安全規則39-1.8
            </a>) 
        </div>
        <div class="col-3 border d-flex align-items-center">
          處所有人<br>
          應到案<br>
          責令改正、反光紙並應撤除
        </div>
      </div>
      <div class="row">
        <div class="col-2 border d-flex justify-content-center align-items-center">
          <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-22">
            22.1.1
          </a>
        </div>
        <div class="col-7 border py-2">
          領有普通駕駛執照，駕駛營業汽車營業 。<br> 
        </div>
        <div class="col-3 border d-flex align-items-center">
          處駕駛人<br>
          得郵繳<br>
          禁止其駕駛
        </div>
      </div>
      <div class="row">
        <div class="col-2 border d-flex justify-content-center align-items-center">
          <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-36">
            36.1
          </a>
        </div>
        <div class="col-7 border py-2">
          未向警察機關辦理、領取執業登記證，即行執業者。<br> 
        </div>
        <div class="col-3 border d-flex align-items-center">
          處駕駛人<br>
          得郵繳
        </div>
      </div>
      <div class="row">
        <div class="col-2 border d-flex justify-content-center align-items-center">
          <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-36">
            36.1
          </a>
        </div>
        <div class="col-7 border py-2">
          持已失效(註銷、吊扣、廢止)之執業登記證執業者。<br> 
        </div>
        <div class="col-3 border d-flex align-items-center">
          處駕駛人<br>
          得郵繳<br>
          當場暫代保管執登證
        </div>
      </div>
      <div class="row">
        <div class="col-2 border d-flex justify-content-center align-items-center">
          <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-36">
            36.1
          </a>
        </div>
        <div class="col-7 border py-2">
          使用偽(變)造執業登記證。<br> 
          (<a href="#" class="showArticle d-inline" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="SR-42">
            安全規則42.2
            </a>) 
        </div>
        <div class="col-3 border d-flex align-items-center">
          <p class="my-auto">處駕駛人<br>
            得郵繳<br>
            扣押(<a href="#" class="showArticle d-inline" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="CC-216">
              刑法216
              </a>)
          </p> 
        </div>
      </div>
      <div class="row">
        <div class="col-2 border d-flex justify-content-center align-items-center">
          <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-36">
            36.1
          </a>
        </div>
        <div class="col-7 border py-2">
          冒用他人執業登記證。 <br> 
        </div>
        <div class="col-3 border d-flex align-items-center">
          <p class="my-auto">處駕駛人<br>
            得郵繳<br>
            沒入(<a href="#" class="showArticle d-inline" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="SO-66">
              社維法66.2
              </a>) 
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-2 border d-flex justify-content-center align-items-center">
          <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-36">
            36.3
          </a>
        </div>
        <div class="col-7 border py-2">
          不依規定辦理執業登記事項之異動申報，未逾六個月。<br> 
        </div>
        <div class="col-3 border d-flex align-items-center">
          處駕駛人<br>
          應到案
        </div>
      </div>
      <div class="row">
        <div class="col-2 border d-flex justify-content-center align-items-center">
          <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-36">
            36.3
          </a>
        </div>
        <div class="col-7 border py-2">
          不依規定辦理執業登記事項之異動申報，已逾六個月。<br> 
        </div>
        <div class="col-3 border d-flex align-items-center">
          處駕駛人<br>
          應到案<br>
          當場暫代保管執登證
        </div>
      </div>
      <div class="row">
        <div class="col-2 border d-flex justify-content-center align-items-center">
          <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-36">
            36.3
          </a>
        </div>
        <div class="col-7 border py-2">
          不依規定參加執業登記證年度查驗者，未逾六個月。<br> 
        </div>
        <div class="col-3 border d-flex align-items-center">
          處駕駛人<br>
          應到案
        </div>
      </div>
      <div class="row">
        <div class="col-2 border d-flex justify-content-center align-items-center">
          <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-36">
            36.3
          </a>
        </div>
        <div class="col-7 border py-2">
          不依規定參加執業登記證年度查驗者，已逾六個月。<br> 
        </div>
        <div class="col-3 border d-flex align-items-center">
          處駕駛人<br>
          應到案<br>
          當場暫代保管執登證
        </div>
      </div>
      <div class="row">
        <div class="col-2 border d-flex justify-content-center align-items-center">
          <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-36">
            36.5
          </a>
        </div>
        <div class="col-7 border py-2">
          執業登記證未依規定安置車內指定之插座(含未帶)。<br> 
          (計程車駕駛人執業登記管理辦法14.1：執登證置於儀錶板上右側，副證置於右前座椅背)  
        </div>
        <div class="col-3 border d-flex align-items-center">
          處駕駛人<br>
          得郵繳
        </div>
      </div>
      <div class="row">
        <div class="col-2 border d-flex justify-content-center align-items-center">
          <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-36">
            36.5
          </a>
        </div>
        <div class="col-7 border py-2">
          執業登記證(含副證)以他物遮蔽者。
        </div>
        <div class="col-3 border d-flex align-items-center">
          處駕駛人<br>
          得郵繳
        </div>
      </div>
      <div class="row">
        <div class="col-2 border d-flex justify-content-center align-items-center">
          <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-36">
            36.5
          </a>
        </div>
        <div class="col-7 border py-2">
          使用影印之執業登記證。
        </div>
        <div class="col-3 border d-flex align-items-center">
          處駕駛人<br>
          得郵繳
        </div>
      </div>
      <div class="row">
        <div class="col-2 border d-flex justify-content-center align-items-center">
          <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-38">
            38.1
          </a>
        </div>
        <div class="col-7 border py-2">
          於鐵路、公路車站或其他交通頻繁處所，違規攬客營運，妨害交通秩序者。
        </div>
        <div class="col-3 border d-flex align-items-center">
          處駕駛人<br>
          得郵繳
        </div>
      </div>
      <div class="row">
        <div class="col-2 border d-flex justify-content-center align-items-center">
          <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-38">
            38.1
          </a>
        </div>
        <div class="col-7 border py-2">
          任意拒載乘客或故意繞道行駛者。
        </div>
        <div class="col-3 border d-flex align-items-center">
          處駕駛人<br>
          得郵繳
        </div>
      </div>
      <div class="row">
        <div class="col-2 border d-flex justify-content-center align-items-center">
          <a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="PH-60">
            60.2.4
          </a>
        </div>
        <div class="col-7 border py-2">
          計程車之停車上客，不遵守主管機關之規定。
        </div>
        <div class="col-3 border d-flex align-items-center">
          處駕駛人<br>
          得郵繳
        </div>
      </div>
      <div class="row my-3 px-auto">
        <h3 class="text-info d-inline-block">※備註</h3>
      </div>
    </div>
    <h4>不論是否載客均不影響營業事實</h4>
      <p><a href="https://judgment.judicial.gov.tw/FJUD/data.aspx?ty=JD&id=SLDA,111%2c%e4%ba%a4%2c358%2c20230131%2c1">臺灣士林地方法院 111 年度交字第 358 號判決</a>：<br>
        「處罰條例第36條第1項之立法規範，係基於強化計程車管理、犯罪預防、方便乘客辨識等多項目的，不論是否載
        客，如無營業登記而駕駛職業小客車於道路上行駛，即構成處罰條例第36條第1項之要件，而原告於上揭時間既未領有有效之執業登記證，即駕駛職業小客車行駛於道路，無論其有無載客，或是否亦欲載客，揆諸上開規定，自屬違反處罰條例第36條第1項之行為，事屬明確，洵可認定」 
      </p>
      <h4>單純冒用他人執登屬社維法</h4>
      <p><a href="https://judgment.judicial.gov.tw/FJUD/data.aspx?ty=JD&id=SLDM,89%2c%e6%98%93%2c493%2c20000529">臺灣士林地方法院 89 年度易字第 493 號刑事判決</a>：<br>
        「檢視扣案之執業登記證影本，其上並無偽造製作權人臺北市政府警察局之公印，顯係單純影印原本，而無偽造他人名義。是本件被告二人彩色影印他人執業登記證以行使之事實縱或屬實，既無偽造他人名義或更改原本之內容，核與刑法偽造特種文書之構成要件不符，不足遽論該等罪責。」
      </p>
      <h4>使用偽造執業登記證屬刑法</h4>
      <p><a href="https://judgment.judicial.gov.tw/FJUD/data.aspx?ty=JD&id=KSDM,112%2c%e7%b0%a1%2c1921%2c20230807%2c1">臺灣高雄地方法院 112 年度簡字第 1921 號刑事判決</a>：<br>
        「按汽車駕駛人以從事計程車駕駛為業者，應於執業前向執業地直轄市、縣(市)警察局申請辦理執業登記，領有計程車駕駛人執業登記證及其副證，始得執業；汽車駕駛人須領有職業駕駛執照，且無道路交通管理處罰條例第36條第4 項或第37條第1項情事者，始得申請辦理執業登記，計程車駕駛人執業登記管理辦法第2條、第3條分別定有明文，是本案執業登記證自屬刑法第212條規定之特許證，而屬特種文書。（略）……是核被告所為，係犯刑法第216條、第212條之行使變造特種文書罪。其變造上開執業登記證後復持以行使，該變造之低度行為應為行使之高度行為所吸收，不另論罪。」 
      </p>
      <h4>車內所置之執登證必須是正本，不可用影本</h4>
      <p><a href="https://judgment.judicial.gov.tw/FJUD/data.aspx?ty=JD&id=TPDA,101%2c%e4%ba%a4%2c61%2c20121228%2c1">臺灣臺北地方法院 101 年度交字第 61 號判決</a>：<br>
        「其立法目的在於使乘客知悉其所搭乘或擬搭乘之計程車是否合法、登記駕駛人與實際駕駛人是否同一，並於產生消費糾紛時，有追索之可能，以提升公眾對計程車行業之信賴，是計程車駕駛人於其執業過程中，無論有無搭載乘客，均應確實妥適放置執業登記證。而影本極易偽造、變造，乘客無法辨識、查證影本之真實性，自不得以影本取代主管機關核發之職業登記證。再者，原告以駕駛計程車為業，當可知悉其申領取得之職業登記證應依規定放置在指定之插座內，倘認其得以影本取代職業登記證放置在指定插座內，主管機關即無核發職業登記證之必要，道路交通管理處罰條例第36 條第5 項之立法目的亦將難以達成。」  
      </p>
      <h4>責令改正期限</h4>
      <p><a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="DR-13">處理細則13條2項</a>：<br>「前項違反行為須責令定期改正、修復或補辦手續者，除依規定應請領臨時通行證外，依其實際所需時間記明「限於○月○日○時前辦理」等字樣，其期間得酌定於四日以內。 」  
      </p>
      <h4>張貼廣告規定</h4>
      <p><a href="#" class="showArticle" data-bs-toggle="modal" data-bs-target="#popUpArea" data-rg="SR-42">安全規則42條3項</a>：<br>
        「計程車應於兩側後門或後葉子板標示牌照號碼及公司行號、運輸合作社或個人名稱，後窗玻璃標示牌照號碼。但多元化計程車不在此限。計程車車身兩側及多元化計程車車身範圍(均不含車窗)於不影響辨識及視線安全下，得以平面漆繪或穩固黏貼方式張貼廣告，並應符合各目的事業主管機關及地方政府相關廣告物管理之法令規定辦理。」
      </p>
      <p>交通部公路總局98年公路監理車輛管理工作圈第5次會議討論提綱第3案：<br>
        除後保險桿得以張貼非商業性廣告及道路交通安全規則第42條規定之位置(含玻璃)外，其餘位置不得廣告。(非商業性廣告，如自家公司(車隊)之叫車電話號碼) 
      </p>
    `
  ),



]