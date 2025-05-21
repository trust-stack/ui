export const emissions = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    <title>Emissions Profile</title>
    <style>
      :root {
        --image-src: url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2613&q=80");
        --highlight: #2e7d32;
        --primary-green: #4caf50;
        --primary-green-light: #a5d6a7;
        --primary-green-bg: #e8f5e9;
        --white: rgba(255, 255, 255, 1);
        --black: rgba(0, 0, 0, 1);
        --gray-400: #c8e6c9;
        --gray-600: #2e7d32;
        --gray-700: #1b5e20;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: "Lato", sans-serif;
        margin: 0 !important;
        background-color: var(--primary-green-bg);
      }

      .mobile {
        max-width: 600px;
        background: var(--white);
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(27, 94, 32, 0.1);
      }

      .header-image {
        background-image: linear-gradient(
            248.36deg,
            rgba(46, 125, 50, 0.7) 7.6%,
            rgba(27, 94, 32, 0.8) 70.52%
          ),
          var(--image-src);
        background-size: cover;
        background-position: center;
        height: 232px;
        position: relative;
        border-radius: 12px 12px 0 0;
        background-color: var(--primary-green);
      }

      .header-image-top-left {
        position: absolute;
        top: 25px;
        left: 15px;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        color: var(--white);
      }

      .header-image-bottom-left {
        position: absolute;
        bottom: 18px;
        left: 15px;
        color: var(--white);
      }

      .header-image-bottom-left h1 {
        font-size: 30px;
        font-weight: 900;
        line-height: 32.5px;
      }

      section {
        padding: 24px 16px;
        border-bottom: 1px solid var(--gray-400);
      }

      section:last-child {
        border-bottom: none;
      }

      .section-title {
        font-size: 20px;
        font-weight: 700;
        color: var(--black);
        margin-bottom: 16px;
      }

      .table {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
      }

      .table-item {
        display: grid;
        grid-template-columns: 1fr 2fr;
        column-gap: 16px;
        align-items: center;
        padding-bottom: 10px;
        border-bottom: 1px solid var(--gray-400);
      }

      .table-item:last-child {
        border-bottom: none;
      }

      .item-title {
        font-size: 16px;
        font-weight: 400;
        color: var(--gray-600);
      }

      .item-value {
        font-size: 16px;
        font-weight: 500;
        color: var(--gray-700);
      }

      .blue-bottom-line-thick {
        text-decoration-line: underline;
        text-decoration-thickness: 2px;
        text-decoration-color: var(--primary-green);
        text-underline-offset: 3px;
        color: var(--gray-700);
      }

      .score {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin: 24px 0;
      }

      .score-unit {
        font-size: 40px;
        font-weight: 900;
        line-height: 43.33px;
        color: var(--highlight);
        letter-spacing: 2px;
      }

      .score-name {
        font-size: 24px;
        font-weight: 400;
        line-height: 17.44px;
        color: var(--highlight);
      }

      .mission-score-description {
        font-size: 16px;
        font-weight: 400;
        line-height: 18.88px;
        color: var(--black);
        margin-bottom: 24px;
      }

      .annotation {
        display: flex;
        gap: 4px;
        font-size: 14px;
        font-weight: 400;
        line-height: 15.26px;
        color: var(--gray-600);
        margin-top: 12px;
      }

      .verification-info {
        background: var(--primary-green-bg);
        padding: 16px;
        border-radius: 8px;
        margin-top: 16px;
      }

      .verification-info .table-item {
        margin-bottom: 8px;
      }

      .verification-info .table-item:last-child {
        margin-bottom: 0;
      }

      .tags-VC-badge-green {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 4px 8px;
        background-color: var(--primary-green-light);
        color: var(--gray-700);
        border-radius: 8px;
      }

      .verifiable {
        width: fit-content;
        font-weight: 600;
        font-size: 14px;
        line-height: 15.3px;
      }
    </style>
  </head>

  <body>
    <div class="mobile">
      <header class="header">
        <div class="header-image">
          <p class="header-image-top-left">EMISSIONS PROFILE</p>
          <div class="header-image-bottom-left">
            <h1>0.33 kg CO2e/kg</h1>
          </div>
        </div>
      </header>

      <section>
        <h2 class="section-title">Emissions Overview</h2>
        <p class="mission-score-description">
          This emissions profile provides a comprehensive assessment of
          greenhouse gas (GHG) emissions associated with the production of this
          agricultural product.
        </p>
        <div class="score">
          <p class="score-unit">0.33kg CO2e</p>
          <p class="score-name">per kg of crop</p>
        </div>
        <div class="table">
          <div class="table-item">
            <div class="item-title">Product</div>
            <div class="item-value">Canola</div>
          </div>
          <div class="table-item">
            <div class="item-title">Producer</div>
            <div class="item-value">Luke-McCabe</div>
          </div>
          <div class="table-item">
            <div class="item-title">Season</div>
            <div class="item-value">25/26</div>
          </div>
        </div>
      </section>

      <section>
        <h2 class="section-title">Emissions Breakdown</h2>
        <div class="table">
          <div class="table-item">
            <div class="item-title">Scope 1 & 2</div>
            <div class="item-value">0.15 kg CO2e/kg</div>
          </div>
          <div class="table-item">
            <div class="item-title">Scope 3</div>
            <div class="item-value">0.18 kg CO2e/kg</div>
          </div>
          <div class="table-item">
            <div class="item-title">Primary sourced ratio</div>
            <div class="item-value">95% primary sources</div>
          </div>
        </div>
        <div class="annotation">
          <span>*</span>
          <p>
            The Primary Sourced Ratio shows the percentage of scope 3 emissions
            data that is directly collected from actual sources, rather than
            being based on estimates.
          </p>
        </div>
      </section>

      <section>
        <h2 class="section-title">Methodology</h2>
        <div class="table">
          <div class="table-item">
            <div class="item-title">Calculation Method</div>
            <div class="item-value">
              <a
                href="https://piccc.org.au/resources/Tools.html"
                class="blue-bottom-line-thick"
                >G-GAF Calculator</a
              >
            </div>
          </div>
          <div class="table-item">
            <div class="item-title">Assessment Status</div>
            <div class="item-value">
              <div class="tags-VC-badge-green">
                <div class="verifiable">Verified</div>
              </div>
            </div>
          </div>
          <div class="table-item">
            <div class="item-title">Scope Coverage</div>
            <div class="item-value">Scope 1, 2, 3</div>
          </div>
        </div>
      </section>

      <section>
        <h2 class="section-title">Verification Details</h2>
        <div class="verification-info">
          <div class="table">
            <div class="table-item">
              <div class="item-title">Issue Date</div>
              <div class="item-value">2025-01-01</div>
            </div>
            <div class="table-item">
              <div class="item-title">Valid Until</div>
              <div class="item-value">2026-01-01</div>
            </div>
            <div class="table-item">
              <div class="item-title">Issuer</div>
              <div class="item-value">ACME Calculator</div>
            </div>
            <div class="table-item">
              <div class="item-title">Trust Anchor</div>
              <div class="item-value">
                <a href="/output/anchor.html" class="blue-bottom-line-thick"
                  >AATP Trust Anchor Registry</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </body>
</html>

`;
