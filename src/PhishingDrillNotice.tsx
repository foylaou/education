import './PhishingDrillNotice.css'

function CheckIcon() {
  return (
    <svg
      className="check-icon"
      viewBox="0 0 18 18"
      fill="none"
      role="presentation"
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M5.5 9.2L7.8 11.5L12.5 6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PhishingDrillNotice() {
  return (
    <div className="drill-page">
      <div className="sheet">
        <div className="status-strip">
          <span className="status-badge mono">SIMULATION · 非真實攻擊</span>
          <span className="case-meta mono">CASE#TRN-2026-0902</span>
        </div>

        <div className="card">
          <div className="header">
            <svg
              className="header-icon"
              viewBox="0 0 40 40"
              fill="none"
              role="presentation"
              aria-hidden="true"
            >
              <path
                d="M20 4L34 9.5V19C34 27.5 28 33.8 20 36.5C12 33.8 6 27.5 6 19V9.5L20 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M20 13V21.5"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <circle cx="20" cy="26.5" r="1.3" fill="currentColor" />
            </svg>
            <div>
              <h1>這是一封資安演練郵件</h1>
              <p className="mono">PHISHING AWARENESS EXERCISE · 2026-09-02</p>
            </div>
          </div>

          <div className="section lede">
            <p>您好，</p>
            <p>
              您剛才點擊了一封<strong>模擬社交工程演練信件</strong>。若這是真實攻擊，您的帳號密碼很可能已經外洩——這正是這次演練想讓您親身感受到的風險。
            </p>
          </div>

          <div className="section">
            <span className="eyebrow mono">BREAKDOWN</span>
            <h2>這封信的破綻在哪裡</h2>
            <p className="section-intro">逐項檢視這封信，您會發現三個一致的警訊：</p>
            <div className="breakdown">
              <div className="breakdown-row">
                <span className="breakdown-tag mono">寄件網域</span>
                <span className="detail">並非公司正式網域，只是外觀相似的仿冒域名</span>
              </div>
              <div className="breakdown-row">
                <span className="breakdown-tag mono">語氣</span>
                <span className="detail">製造「帳號將被鎖定」的緊迫感，誘導不經思考立即點擊</span>
              </div>
              <div className="breakdown-row">
                <span className="breakdown-tag mono">連結網址</span>
                <span className="detail">與公司真實系統網址不同，滑鼠移上去即可發現落差</span>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="protocol-box">
              <span className="eyebrow mono teal-text">NEXT TIME</span>
              <h2 className="teal-text">下次遇到類似信件，請這樣做</h2>
              <ul className="protocol">
                <li>
                  <CheckIcon />
                  <span>將滑鼠移到連結上，先確認網址是否為公司正式網域</span>
                </li>
                <li>
                  <CheckIcon />
                  <span>對於要求「立即」「緊急」處理的信件，先冷靜查證</span>
                </li>
                <li>
                  <CheckIcon />
                  <span>不確定時，透過官方管道（如撥打分機）向 IT 部門確認</span>
                </li>
                <li>
                  <CheckIcon />
                  <span>發現可疑信件，請使用信箱的「回報網路釣魚」功能通報</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footnote">
            <strong>本次演練結果不會用於個人考核</strong>，僅作為全公司資安意識訓練改善依據。感謝您的配合。
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhishingDrillNotice
