export const dfr = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet">
    <title>Digital Facility Record</title>
    <style>
        :root {
            --highlight: #D4A017;
            --primary-orange: #E49B0F;
            --primary-orange-light: #F3D88C;
            --primary-orange-bg: #FDF7E9;
            --white: rgba(255, 255, 255, 1);
            --black: rgba(0, 0, 0, 1);
            --gray-400: #E8DCC4;
            --gray-600: #8B7355;
            --gray-700: #6F4E37;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Lato', sans-serif;
            margin: 0 !important;
            background-color: var(--primary-orange-bg);
        }

        .mobile {
            max-width: 600px;
            background: var(--white);
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(111, 78, 55, 0.1);
        }

        .header {}

        .header-image {
            background-image: linear-gradient(248.36deg, rgba(228, 155, 15, 0.70) 7.6%, rgba(212, 160, 23, 0.80) 70.52%);
            background-size: cover;
            background-position: center;
            height: 100px;
            position: relative;
            border-radius: 12px 12px 0 0;
            background-color: var(--primary-orange);
        }

        .header-image-top-left {
            position: absolute;
            top: 25px;
            left: 15px;
            font-weight: 500;
            font-size: 24px;
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

        .header-batch {
            padding: 12px 16px 16px 16px;
            background-color: var(--primary-orange-bg);
            display: grid;
            grid-auto-flow: row;
            row-gap: 12px;
            border-radius: 0 0 12px 12px;
        }

        .header-batch-item {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .header-batch-item a {
            color: var(--gray-700);
            font-size: 14px;
            line-height: 15.25px;
            font-weight: 500;
            text-decoration: none;
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

        .table-item .item-title {
            font-size: 16px;
            font-weight: 400;
            color: var(--gray-600);
        }

        .table-item .item-value {
            font-size: 16px;
            font-weight: 500;
            color: var(--gray-700);
        }

        .table-item .annotation {
            font-size: 14px;
            font-weight: 400;
            color: var(--gray-600);
            margin-top: 4px;
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

        .verification-info {
            background: var(--primary-orange-bg);
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

        .blue-bottom-line-thick {
            text-decoration-line: underline;
            text-decoration-thickness: 2px;
            text-decoration-color: var(--primary-orange);
            text-underline-offset: 3px;
            color: var(--gray-700);
        }

        .score {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .score-unit {
            font-size: 40px;
            font-weight: 900;
            line-height: 43.33px;
            color: var(--highlight);
            letter-spacing: 2px;
        }

        .score-name {
            font-size: 16px;
            font-weight: 400;
            line-height: 17.44px;
            color: var(--gray-600);
        }

        .mission-score-title {
            font-size: 20px;
            font-weight: 700;
            line-height: 21.8px;
            color: var(--black);
            margin-bottom: 12px;
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

        .emission-score-card {
            display: flex;
            flex-direction: column;
            gap: 12px;

        }

        .cards-conformity {
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding: 16px;
            background-color: var(--white);
            border-radius: 4px;
            border: 1px solid var(--gray-400);
        }

        .cards-conformity .table {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .declared-values {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .declared-value {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .declared-value h3 {
            font-size: 16px;
            font-weight: 400;
            line-height: 17.44px;
            color: var(--gray-700);
        }

        .declared-value p {
            font-size: 14px;
            font-weight: 400;
            line-height: 19.25px;
            color: var(--gray-600);
        }

        .container .cards-conformity-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            align-self: stretch;
            width: 100%;
            flex: 0 0 auto;
        }

        .container .conformance {
            font-size: 14px;
            font-weight: 400;
            line-height: 19.25px;
            color: var(--primary-colorsgray-600);
        }

        .container .cards-conformity-conformance {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            flex: 0 0 auto;
        }

        .container .cards-conformity-body {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .container .cards-conformity-title {
            font-size: 20px;
            font-weight: 400;
            line-height: 23.6px;
            color: var(--primary-colorsblue-700);
        }

        .container .cards-conformity-description {
            color: var(--primary-colorsgray-600);
            font-size: 14px;
            line-height: 19.2px;
            align-self: stretch;
            font-weight: 400;
        }

        .container .cards-conformity-description a {
            color: var(--primary-colorsgray-600);
        }

        .container .declared-values {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .container .declared-value {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .container .declared-value h3 {
            font-size: 16px;
            font-weight: 400;
            line-height: 17.44px;
        }

        .container .declared-value p {
            font-size: 14px;
            font-weight: 400;
            line-height: 19.25px;
        }

        .declarations {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .declaration-title {
            font-size: 20px;
            font-weight: 700;
            line-height: 21.8px;
        }

        .declaration-subtitle {
            font-size: 16px;
            font-weight: 700;
            line-height: 21.8px;
        }

        .cards-conformities {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .cards-conformity {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            min-width: 336px;
            padding: 16px 18px 16px 16px;
            position: relative;
            background-color: var(--white);
            border-radius: 4px;
            border: 1px solid;
            border-color: var(--gray-400);
        }

        .tags-VC-badge-green {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 4px 8px;
            background-color: rgba(184, 236, 182, 1);
            color: rgba(8, 50, 0, 1);
            border-radius: 8px;
        }

        .verifiable {
            width: fit-content;
            font-weight: 600;
            font-size: 14px;
            line-height: 15.3px;
        }

        .container .company-name {
            align-self: stretch;
            font-weight: 400;
            color: var(--black);
            font-size: 16px;
            line-height: 17.4px;
        }

        .frame {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            align-self: stretch;
            width: 100%;
            flex: 0 0 auto;
        }

        .div {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            position: relative;
            flex: 0 0 auto;
        }

        .text-wrapper {
            align-self: stretch;
            font-weight: 900;
            color: var(--black);
            font-size: 16px;
            line-height: 19.2px;
        }

        .span {
            color: var(--gray-600);
            font-size: 14px;
            line-height: 19.2px;
        }

        .p {
            color: var(--gray-600);
            font-size: 14px;
            line-height: 19.2px;
            margin: 0;
        }

        .frame-2 {
            display: flex;
            flex-direction: column;
            gap: 4px;
            align-self: stretch;
        }

        .frame-3 {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .frame-4 {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .typography-heading {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .heading {
            font-size: 16px;
            font-weight: 400;
            line-height: 17.44px;
            color: var(--gray-700);
        }

        .heading-2 {
            font-size: 14px;
            font-weight: 400;
            line-height: 19.25px;
            color: var(--gray-600);
            margin: 0;
        }

        .cards-traceability {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 16px;
            background-color: var(--white);
            border: 1px solid var(--gray-400);
            border-radius: 4px;
            text-decoration: none;
            width: 100%;
        }

        .frame-5 {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .company-name-wrapper {
            display: flex;
            align-items: center;
        }

        .company-name-2 {
            font-size: 14px;
            font-weight: 400;
            line-height: 19.2px;
            color: var(--gray-700);
        }

        .gray-bottom-line {
            text-decoration: underline;
            text-decoration-thickness: 2px;
            text-decoration-color: var(--gray-400);
            text-underline-offset: 3px;
            color: var(--gray-700);
        }

        .other-identifiers-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 8px;
        }

        .other-identifiers-table th {
            text-align: left;
            font-size: 14px;
            font-weight: 500;
            color: var(--gray-600);
            padding: 8px 12px;
            border-bottom: 1px solid var(--gray-400);
        }

        .other-identifiers-table td {
            font-size: 14px;
            font-weight: 400;
            color: var(--gray-700);
            padding: 8px 12px;
            border-bottom: 1px solid var(--gray-400);
        }

        .other-identifiers-table tr:last-child td {
            border-bottom: none;
        }
    </style>
</head>

<body>
    <div class="mobile">
        <header class="header">
            <div class="header-image">
                <p class="header-image-top-left">DIGITAL FARM RECORD</p>
            </div>
            <div class="header-batch">
                <div class="header-batch-item">
                    <a>2170 Adelargo Road, Warraderry,
                        2810</a>
                </div>
            </div>
        </header>

        <section class="declarations">
            <div class="declaration-title">Operated By</div>
            <div class="cards-conformities">
                <div class="table">
                    <div class="table-item">
                        <div class="item-title">Operator Name</div>
                        <div class="item-value">
                            McGabe Farms
                        </div>
                    </div>
                    <div class="table-item">
                        <div class="item-title">Operator ID</div>
                        <div class="item-value">13242674</div>
                    </div>
                    <div class="table-item">
                        <div class="item-title">Operator ID Scheme</div>
                        <div class="item-value">National Grower Register</div>
                    </div>
                </div>
            </div>

            <div class="declaration-subtitle">Other Identifiers</div>
            <div class="cards-conformities">
                <table class="other-identifiers-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Scheme</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>McGabe Farms</td>
                            <td>13242674</td>
                            <td>National Grower Register</td>
                        </tr>
                        <tr>
                            <td>McGabe Farms</td>
                            <td>SA1234567</td>
                            <td>Property Identification Code</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </section>

        <section class="declarations">
            <div class="declaration-title">Declarations</div>
            <div class="cards-conformities">
                <div class="cards-conformity">
                    <div class="table">
                        <div class="table-item">
                            <div class="item-title">Conformance</div>
                            <div class="item-value">
                                <div class="tags-VC-badge-green">
                                    <div class="verifiable">Yes</div>
                                </div>
                            </div>
                        </div>
                        <div class="table-item">
                            <div class="item-title">Assessment Date</div>
                            <div class="item-value">2024-03-15</div>
                        </div>
                        <div class="table-item">
                            <div class="item-title">Evidence Name</div>
                            <div class="item-value">Conformity Evidence</div>
                        </div>
                        <div class="table-item">
                            <div class="item-title">Reference Standard</div>
                            <div class="item-value">
                                US EPA Deforestation Assessment
                            </div>
                        </div>
                        <div class="table-item">
                            <div class="item-title">Issued By</div>
                            <div class="item-value">

                                <a href="https://www.cibolabs.com.au/"
                                    class="blue-bottom-line-thick">CIBO Labs</a>
                            </div>
                        </div>
                        <div class="table-item">
                            <div class="item-title">Deforestation</div>
                            <div class="item-value">
                                120m2
                                <div class="annotation">Score: A | Accuracy 0.01</div>
                            </div>
                        </div>
                    </div>
                    <a href="https://www.google.com" class="cards-traceability">
                        <div class="frame-5">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5 21C4.45 21 3.97933 20.8043 3.588 20.413C3.19667 20.0217 3.00067 19.5507 3 19V5C3 4.45 3.196 3.97933 3.588 3.588C3.98 3.19667 4.45067 3.00067 5 3H19C19.55 3 20.021 3.196 20.413 3.588C20.805 3.98 21.0007 4.45067 21 5V19C21 19.55 20.8043 20.021 20.413 20.413C20.0217 20.805 19.5507 21.0007 19 21H5ZM5 5V19H19V5H17V12L14.5 10.5L12 12V5H5Z"
                                    fill="#1F5A95" />
                            </svg>
                            <div class="company-name-wrapper">
                                <div class="company-name-2">Evidence</div>
                            </div>
                        </div>
                        <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L8 8L1 15" stroke="#1F5A95" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>

        <section>
            <h2 class="section-title">Verification</h2>
            <div class="verification-info">
                <div class="table">
                    <div class="table-item">
                        <div class="item-title">Issued Date</div>
                        <div class="item-value">2024-03-15</div>
                    </div>
                    <div class="table-item">
                        <div class="item-title">Issuer</div>
                        <div class="item-value">McGabe Farms</div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</body>

</html>
`;
