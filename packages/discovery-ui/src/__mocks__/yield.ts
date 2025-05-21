export const yieldValidity = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Data Farming Yield Verification</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css"
      rel="stylesheet"
    />
    <style>
      :root {
        --primary-blue: #1a5f7a;
        --primary-blue-light: #64b5e5;
        --primary-blue-bg: #f0f7fc;
        --accent-gold: #ffd700;
        --white: rgba(255, 255, 255, 1);
        --black: rgba(0, 0, 0, 1);
        --gray-400: #e8e8e8;
        --gray-600: #666666;
        --gray-700: #444444;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: "Lato", sans-serif;
        margin: 0 !important;
        background-color: var(--primary-blue-bg);
        min-height: 100vh;
        display: flex;
        justify-content: center;
      }

      .mobile {
        max-width: 600px;
        width: 100%;
        background: var(--white);
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(26, 95, 122, 0.1);
        overflow: hidden;
      }

      .header {
        background-color: var(--primary-blue);
        text-align: center;
        color: var(--white);
        padding: 12px;
      }

      .header-title {
        font-size: 24px;
        font-weight: 700;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
      }

      .map-container {
        width: 100%;
        height: 620px;
        position: relative;
      }

      #map {
        width: 100%;
        height: 100%;
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

      .property-details {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
      }

      .detail-item {
        background: var(--primary-blue-bg);
        padding: 16px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .detail-label {
        font-size: 14px;
        color: var(--gray-600);
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .detail-value {
        font-size: 16px;
        color: var(--gray-700);
        font-weight: 600;
      }

      .address {
        font-size: 18px;
        font-weight: 600;
        color: var(--gray-700);
        margin-bottom: 16px;
      }

      .verification-status {
        background-color: var(--primary-blue);
        color: white;
        padding: 8px 16px;
        border-radius: 20px;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 16px;
      }

      .verification-status svg {
        width: 20px;
        height: 20px;
        fill: currentColor;
      }

      .verification-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }

      .land-titles-logo {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 20px;
      }

      .land-titles-logo img {
        max-width: 200px;
        height: auto;
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
        color: var(--black);
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
        padding: 16px;
        background-color: var(--white);
        border-radius: 4px;
        border: 1px solid var(--gray-400);
      }

      .tags-VC-badge-blue {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 4px 8px;
        background-color: var(--primary-blue-light);
        color: var(--primary-blue);
        border-radius: 8px;
      }

      .verifiable {
        width: fit-content;
        font-weight: 600;
        font-size: 14px;
        line-height: 15.3px;
      }

      .blue-bottom-line-thick {
        text-decoration-line: underline;
        text-decoration-thickness: 2px;
        text-decoration-color: var(--primary-blue);
        text-underline-offset: 3px;
        color: var(--gray-700);
      }

      .table {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
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
    </style>
  </head>
  <body>
    <div class="mobile">
      <header class="header">
        <h1 class="header-title">Data Farming Yield Verification</h1>
      </header>

      <div class="map-container">
        <div id="map"></div>
      </div>

      <section>
        <div class="verification-container">
          <div class="verification-status">
            <svg viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            <span>Yield Data Verified</span>
          </div>
        </div>
      </section>

      <section class="declarations">
        <div class="declaration-title">Production Evidence</div>
        <div class="cards-conformities">
          <div class="cards-conformity">
            <div class="table">
              <div class="table-item">
                <div class="item-title">Crop Type</div>
                <div class="item-value">Canola</div>
              </div>
              <div class="table-item">
                <div class="item-title">Harvest Period</div>
                <div class="item-value">Nov 2024 - Jan 2025</div>
              </div>
              <div class="table-item">
                <div class="item-title">Verification Method</div>
                <div class="item-value">Satellite + Ground Truth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="land-titles-logo">
        <img
          src="https://cdn.prod.website-files.com/627c3496170b3a4c43b967d5/6360ab8252d3ddfe0487a03a_DataFarming-color.svg"
          alt="Data Farming Logo"
        />
      </section>
    </div>

    <script src="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js"></script>
    <script>
      // Use token from config
      mapboxgl.accessToken =
        "pk.eyJ1IjoiaGFybGV5amFja3Rob21hcyIsImEiOiJja3VmOXZxOHAxc2Y3MnBtbnNpZzU5ejZ2In0.X2haU6DH-ahqyu1EiK-0VQ";

      // Get GeoJSON data from the embedded script tag
      const geoJsonData = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            id: 24556,
            geometry: {
              type: "Point",
              coordinates: [148.296150542, -33.758427237],
            },
            properties: {
              reference: "SA349595",
              name: "NGR 13242674",
              suburb: "Warraderry",
              addressLine1: "2170 Adelargo Road",
              addressLine2: "",
              postcode: "2810",
              state: "NSW",
              metadataSource: 0,
              metadata: '{"pic": "SA349595","userId": 2228587}',
            },
          },
          {
            type: "Feature",
            id: 74561,
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [148.259802758, -33.736277601],
                    [148.259960632, -33.735395088],
                    [148.259219543, -33.735302526],
                    [148.258391397, -33.739940722],
                    [148.257610867, -33.744285761],
                    [148.258353505, -33.744378143],
                    [148.259802758, -33.736277601],
                  ],
                ],
              ],
            },
            properties: {
              plan_number: "1170998",
              plan_type: "DP",
              parcel_type: "Lot",
              jurisdicational_id: "1/1170998",
              lot_number: "1",
              plan: "DP1170998",
              reference: "cp0c6be64c33fd5",
              cadastre_polygon_pid: "cp0c6be64c33fd5",
              is_cadastre_polygon_changed: null,
              pic: "SA349595",
              propertyId: 24556,
              cadastre_hectares: 6.991405,
              property_name: "NGR 13242674",
              front_gate_address: "2170 Adelargo Road, Warraderry NSW 2810",
              owner_name: "Luke-McCabe Account",
              business_name: "FG McCabe Pty Ltd",
              phone_number: "+61417820008",
              email_address: "luke@fgmccabe.com.au",
            },
          },
          {
            type: "Feature",
            id: 74562,
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [148.29285852, -33.757163641],
                    [148.292625492, -33.754655618],
                    [148.292544485, -33.753782616],
                    [148.292458484, -33.752855606],
                    [148.292327476, -33.751452591],
                    [148.292021465, -33.74842957],
                    [148.291665783, -33.744916002],
                    [148.290080476, -33.744720901],
                    [148.289727852, -33.744677498],
                    [148.278499151, -33.743294937],
                    [148.277862825, -33.74678197],
                    [148.277569012, -33.748429603],
                    [148.276100837, -33.75666266],
                    [148.293020525, -33.758904652],
                    [148.29285852, -33.757163641],
                  ],
                ],
              ],
            },
            properties: {
              plan_number: "1170998",
              plan_type: "DP",
              parcel_type: "Lot",
              jurisdicational_id: "2/1170998",
              lot_number: "2",
              plan: "DP1170998",
              reference: "cp2fa2589fc6543",
              cadastre_polygon_pid: "cp2fa2589fc6543",
              is_cadastre_polygon_changed: null,
              pic: "SA349595",
              propertyId: 24556,
              cadastre_hectares: 212.77818599999998,
              property_name: "NGR 13242674",
              front_gate_address: "2170 Adelargo Road, Warraderry NSW 2810",
              owner_name: "Luke-McCabe Account",
              business_name: "FG McCabe Pty Ltd",
              phone_number: "+61417820008",
              email_address: "luke@fgmccabe.com.au",
            },
          },
          {
            type: "Feature",
            id: 74563,
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [148.277241164, -33.748429603],
                    [148.277541502, -33.746747656],
                    [148.258568193, -33.744405],
                    [148.257718416, -33.748429647],
                    [148.256518201, -33.754114047],
                    [148.256625195, -33.754127673],
                    [148.258900155, -33.754422668],
                    [148.268050987, -33.755605664],
                    [148.268568936, -33.752562643],
                    [148.272922856, -33.753107644],
                    [148.272312893, -33.756186664],
                    [148.275778842, -33.756618665],
                    [148.277241164, -33.748429603],
                  ],
                ],
              ],
            },
            properties: {
              plan_number: "752956",
              plan_type: "DP",
              parcel_type: "Lot",
              jurisdicational_id: "63/752956",
              lot_number: "63",
              plan: "DP752956",
              reference: "cp52eb9cb8d9524",
              cadastre_polygon_pid: "cp52eb9cb8d9524",
              is_cadastre_polygon_changed: null,
              pic: "SA349595",
              propertyId: 24556,
              cadastre_hectares: 183.21868600000002,
              property_name: "NGR 13242674",
              front_gate_address: "2170 Adelargo Road, Warraderry NSW 2810",
              owner_name: "Luke-McCabe Account",
              business_name: "FG McCabe Pty Ltd",
              phone_number: "+61417820008",
              email_address: "luke@fgmccabe.com.au",
            },
          },
          {
            type: "Feature",
            id: 74564,
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [148.280296431, -33.72862949],
                    [148.279667194, -33.731998261],
                    [148.295805206, -33.734111136],
                    [148.297068652, -33.730826608],
                    [148.297026208, -33.730809343],
                    [148.297037278, -33.730750835],
                    [148.298323969, -33.723950805],
                    [148.298281919, -33.723695628],
                    [148.281617515, -33.721556022],
                    [148.281230988, -33.723625733],
                    [148.280296431, -33.72862949],
                  ],
                ],
              ],
            },
            properties: {
              plan_number: "404066",
              plan_type: "DP",
              parcel_type: "Lot",
              jurisdicational_id: "1/404066",
              lot_number: "1",
              plan: "DP404066",
              reference: "cp5508ed48e9052",
              cadastre_polygon_pid: "cp5508ed48e9052",
              is_cadastre_polygon_changed: null,
              pic: "SA349595",
              propertyId: 24556,
              cadastre_hectares: 183.401708,
              property_name: "NGR 13242674",
              front_gate_address: "2170 Adelargo Road, Warraderry NSW 2810",
              owner_name: "Luke-McCabe Account",
              business_name: "FG McCabe Pty Ltd",
              phone_number: "+61417820008",
              email_address: "luke@fgmccabe.com.au",
            },
          },
          {
            type: "Feature",
            id: 74565,
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [148.286247156, -33.982341289],
                    [148.281437273, -33.981714293],
                    [148.277740913, -33.981232847],
                    [148.276577372, -33.981081293],
                    [148.270821485, -33.98033132],
                    [148.271714485, -33.984294314],
                    [148.271961478, -33.98456431],
                    [148.274064445, -33.986859304],
                    [148.274238435, -33.987049304],
                    [148.275089422, -33.988324305],
                    [148.27851341, -33.993452311],
                    [148.27864943, -33.995282307],
                    [148.282109364, -33.995731304],
                    [148.283289257, -33.989461287],
                    [148.283915221, -33.986129287],
                    [148.285474183, -33.986333289],
                    [148.286247156, -33.982341289],
                  ],
                ],
              ],
            },
            properties: {
              plan_number: "1107650",
              plan_type: "DP",
              parcel_type: "Lot",
              jurisdicational_id: "3/1107650",
              lot_number: "3",
              plan: "DP1107650",
              reference: "cp56a48765d5d7b",
              cadastre_polygon_pid: "cp56a48765d5d7b",
              is_cadastre_polygon_changed: null,
              pic: "SA349595",
              propertyId: 24556,
              cadastre_hectares: 131.196595,
              property_name: "NGR 13242674",
              front_gate_address: "2170 Adelargo Road, Warraderry NSW 2810",
              owner_name: "Luke-McCabe Account",
              business_name: "FG McCabe Pty Ltd",
              phone_number: "+61417820008",
              email_address: "luke@fgmccabe.com.au",
            },
          },
          {
            type: "Feature",
            id: 74566,
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [148.258900155, -33.754422668],
                    [148.256625195, -33.754127673],
                    [148.255921272, -33.757657688],
                    [148.258204227, -33.757957685],
                    [148.258900155, -33.754422668],
                  ],
                ],
              ],
            },
            properties: {
              plan_number: "752956",
              plan_type: "DP",
              parcel_type: "Lot",
              jurisdicational_id: "38/752956",
              lot_number: "38",
              plan: "DP752956",
              reference: "cp5cb958fc666cf",
              cadastre_polygon_pid: "cp5cb958fc666cf",
              is_cadastre_polygon_changed: null,
              pic: "SA349595",
              propertyId: 24556,
              cadastre_hectares: 8.486894,
              property_name: "NGR 13242674",
              front_gate_address: "2170 Adelargo Road, Warraderry NSW 2810",
              owner_name: "Luke-McCabe Account",
              business_name: "FG McCabe Pty Ltd",
              phone_number: "+61417820008",
              email_address: "luke@fgmccabe.com.au",
            },
          },
          {
            type: "Feature",
            id: 74567,
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [148.257497885, -33.748429647],
                    [148.258353505, -33.744378143],
                    [148.257610867, -33.744285761],
                    [148.248565442, -33.743144609],
                    [148.247625003, -33.748429673],
                    [148.246836361, -33.752861689],
                    [148.250566299, -33.753343673],
                    [148.2563032, -33.754086671],
                    [148.257497885, -33.748429647],
                  ],
                ],
              ],
            },
            properties: {
              plan_number: "752956",
              plan_type: "DP",
              parcel_type: "Lot",
              jurisdicational_id: "63/752956",
              lot_number: "63",
              plan: "DP752956",
              reference: "cp5f9c86dfafc1e",
              cadastre_polygon_pid: "cp5f9c86dfafc1e",
              is_cadastre_polygon_changed: null,
              pic: "SA349595",
              propertyId: 24556,
              cadastre_hectares: 98.479507,
              property_name: "NGR 13242674",
              front_gate_address: "2170 Adelargo Road, Warraderry NSW 2810",
              owner_name: "Luke-McCabe Account",
              business_name: "FG McCabe Pty Ltd",
              phone_number: "+61417820008",
              email_address: "luke@fgmccabe.com.au",
            },
          },
          {
            type: "Feature",
            id: 74568,
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [148.254526909, -33.968558593],
                    [148.249880798, -33.967744171],
                    [148.248174961, -33.976568366],
                    [148.248149961, -33.976699366],
                    [148.248148966, -33.976705371],
                    [148.248126968, -33.976821365],
                    [148.248073973, -33.97708937],
                    [148.25060489, -33.97741937],
                    [148.250923882, -33.977461367],
                    [148.266106575, -33.979441331],
                    [148.266527066, -33.979496182],
                    [148.266087052, -33.976859051],
                    [148.269730676, -33.977215566],
                    [148.269789023, -33.977221267],
                    [148.269714496, -33.976890317],
                    [148.269708499, -33.97687732],
                    [148.266549693, -33.969440461],
                    [148.258346228, -33.968350073],
                    [148.258309072, -33.968389452],
                    [148.258135691, -33.96849554],
                    [148.258127318, -33.968498256],
                    [148.256227914, -33.969113616],
                    [148.254526909, -33.968558593],
                  ],
                ],
              ],
            },
            properties: {
              plan_number: "1107650",
              plan_type: "DP",
              parcel_type: "Lot",
              jurisdicational_id: "2/1107650",
              lot_number: "2",
              plan: "DP1107650",
              reference: "cp5f9d4d6c2c000",
              cadastre_polygon_pid: "cp5f9d4d6c2c000",
              is_cadastre_polygon_changed: null,
              pic: "SA349595",
              propertyId: 24556,
              cadastre_hectares: 187.40641000000002,
              property_name: "NGR 13242674",
              front_gate_address: "2170 Adelargo Road, Warraderry NSW 2810",
              owner_name: "Luke-McCabe Account",
              business_name: "FG McCabe Pty Ltd",
              phone_number: "+61417820008",
              email_address: "luke@fgmccabe.com.au",
            },
          },
          {
            type: "Feature",
            id: 74569,
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [148.288718078, -33.972385274],
                    [148.280390505, -33.971279163],
                    [148.280331271, -33.971271292],
                    [148.280068062, -33.97123636],
                    [148.274478385, -33.970494304],
                    [148.266916803, -33.969489261],
                    [148.270030494, -33.976817315],
                    [148.270054491, -33.976923314],
                    [148.270129, -33.977254524],
                    [148.290444951, -33.979240236],
                    [148.291715013, -33.972507274],
                    [148.289127068, -33.972163272],
                    [148.289075077, -33.972432272],
                    [148.288718078, -33.972385274],
                  ],
                ],
              ],
            },
            properties: {
              plan_number: "1107650",
              plan_type: "DP",
              parcel_type: "Lot",
              jurisdicational_id: "2/1107650",
              lot_number: "2",
              plan: "DP1107650",
              reference: "cp62a1aad691449",
              cadastre_polygon_pid: "cp62a1aad691449",
              is_cadastre_polygon_changed: null,
              pic: "SA349595",
              propertyId: 24556,
              cadastre_hectares: 162.02833600000002,
              property_name: "NGR 13242674",
              front_gate_address: "2170 Adelargo Road, Warraderry NSW 2810",
              owner_name: "Luke-McCabe Account",
              business_name: "FG McCabe Pty Ltd",
              phone_number: "+61417820008",
              email_address: "luke@fgmccabe.com.au",
            },
          },
          {
            type: "Feature",
            id: 74570,
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [148.295535899, -33.983818274],
                    [148.28972206, -33.983071279],
                    [148.289773065, -33.98280028],
                    [148.286821307, -33.982416102],
                    [148.286569142, -33.982383285],
                    [148.285745173, -33.986644286],
                    [148.284188219, -33.986440292],
                    [148.282432354, -33.995773309],
                    [148.288972311, -33.99662141],
                    [148.289065043, -33.996056204],
                    [148.292913064, -33.996573301],
                    [148.294079044, -33.9976423],
                    [148.294317952, -33.997673333],
                    [148.298775927, -33.9982523],
                    [148.298887699, -33.997695215],
                    [148.301191845, -33.998025296],
                    [148.301750812, -33.995294294],
                    [148.293545025, -33.994202292],
                    [148.295535899, -33.983818274],
                  ],
                ],
              ],
            },
            properties: {
              plan_number: "1107650",
              plan_type: "DP",
              parcel_type: "Lot",
              jurisdicational_id: "3/1107650",
              lot_number: "3",
              plan: "DP1107650",
              reference: "cp6bd8000ef9380",
              cadastre_polygon_pid: "cp6bd8000ef9380",
              is_cadastre_polygon_changed: null,
              pic: "SA349595",
              propertyId: 24556,
              cadastre_hectares: 166.304691,
              property_name: "NGR 13242674",
              front_gate_address: "2170 Adelargo Road, Warraderry NSW 2810",
              owner_name: "Luke-McCabe Account",
              business_name: "FG McCabe Pty Ltd",
              phone_number: "+61417820008",
              email_address: "luke@fgmccabe.com.au",
            },
          },
          {
            type: "Feature",
            id: 74571,
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [148.275829847, -33.756900663],
                    [148.275042854, -33.756801665],
                    [148.27437891, -33.760402693],
                    [148.275211888, -33.759949689],
                    [148.275350865, -33.758302674],
                    [148.275829847, -33.756900663],
                  ],
                ],
              ],
            },
            properties: {
              plan_number: "752956",
              plan_type: "DP",
              parcel_type: "Lot",
              jurisdicational_id: "82/752956",
              lot_number: "82",
              plan: "DP752956",
              reference: "cp74574ac061abe",
              cadastre_polygon_pid: "cp74574ac061abe",
              is_cadastre_polygon_changed: null,
              pic: "SA349595",
              propertyId: 24556,
              cadastre_hectares: 2.345755,
              property_name: "NGR 13242674",
              front_gate_address: "2170 Adelargo Road, Warraderry NSW 2810",
              owner_name: "Luke-McCabe Account",
              business_name: "FG McCabe Pty Ltd",
              phone_number: "+61417820008",
              email_address: "luke@fgmccabe.com.au",
            },
          },
          {
            type: "Feature",
            id: 74572,
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [148.290444951, -33.979240236],
                    [148.270129, -33.977254524],
                    [148.270757491, -33.980048318],
                    [148.276631846, -33.980813234],
                    [148.277788352, -33.980964295],
                    [148.281485715, -33.981445804],
                    [148.286294082, -33.982072002],
                    [148.286627327, -33.982115405],
                    [148.286872133, -33.982147272],
                    [148.289824061, -33.982531271],
                    [148.290444951, -33.979240236],
                  ],
                ],
              ],
            },
            properties: {
              plan_number: "1107650",
              plan_type: "DP",
              parcel_type: "Lot",
              jurisdicational_id: "3/1107650",
              lot_number: "3",
              plan: "DP1107650",
              reference: "cp753fe15dad452",
              cadastre_polygon_pid: "cp753fe15dad452",
              is_cadastre_polygon_changed: null,
              pic: "SA349595",
              propertyId: 24556,
              cadastre_hectares: 61.397438,
              property_name: "NGR 13242674",
              front_gate_address: "2170 Adelargo Road, Warraderry NSW 2810",
              owner_name: "Luke-McCabe Account",
              business_name: "FG McCabe Pty Ltd",
              phone_number: "+61417820008",
              email_address: "luke@fgmccabe.com.au",
            },
          },
          {
            type: "Feature",
            id: 74573,
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [148.273987525, -33.987233828],
                    [148.273964442, -33.987199307],
                    [148.2714945, -33.984503309],
                    [148.271407486, -33.984408317],
                    [148.270479491, -33.980287316],
                    [148.26627058, -33.979738326],
                    [148.261506683, -33.983177339],
                    [148.262126676, -33.984253339],
                    [148.266314593, -33.984480325],
                    [148.266613596, -33.985124324],
                    [148.264378651, -33.986830331],
                    [148.26359866, -33.98731833],
                    [148.262053691, -33.987276334],
                    [148.261635566, -33.987424392],
                    [148.260364743, -33.988684234],
                    [148.259686564, -33.989356551],
                    [148.260091753, -33.990392348],
                    [148.261070764, -33.992893352],
                    [148.260882779, -33.99376535],
                    [148.2600338, -33.994804356],
                    [148.263033749, -33.995169351],
                    [148.263086744, -33.994901346],
                    [148.266938672, -33.995392339],
                    [148.267230648, -33.993797333],
                    [148.272704788, -33.994510966],
                    [148.278319439, -33.995239316],
                    [148.278192419, -33.99353131],
                    [148.274678432, -33.988267303],
                    [148.273987525, -33.987233828],
                  ],
                ],
              ],
            },
            properties: {
              plan_number: "1107650",
              plan_type: "DP",
              parcel_type: "Lot",
              jurisdicational_id: "3/1107650",
              lot_number: "3",
              plan: "DP1107650",
              reference: "cp7ef95ca10ef85",
              cadastre_polygon_pid: "cp7ef95ca10ef85",
              is_cadastre_polygon_changed: null,
              pic: "SA349595",
              propertyId: 24556,
              cadastre_hectares: 177.215486,
              property_name: "NGR 13242674",
              front_gate_address: "2170 Adelargo Road, Warraderry NSW 2810",
              owner_name: "Luke-McCabe Account",
              business_name: "FG McCabe Pty Ltd",
              phone_number: "+61417820008",
              email_address: "luke@fgmccabe.com.au",
            },
          },
          {
            type: "Feature",
            id: 74574,
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [148.268050987, -33.755605664],
                    [148.258900155, -33.754422668],
                    [148.258204227, -33.757957685],
                    [148.272695941, -33.759860686],
                    [148.272636949, -33.760218689],
                    [148.274280916, -33.760455688],
                    [148.27437891, -33.760402693],
                    [148.275042854, -33.756801665],
                    [148.272259916, -33.756455664],
                    [148.267995993, -33.755924665],
                    [148.268050987, -33.755605664],
                  ],
                ],
              ],
            },
            properties: {
              plan_number: "752956",
              plan_type: "DP",
              parcel_type: "Lot",
              jurisdicational_id: "39/752956",
              lot_number: "39",
              plan: "DP752956",
              reference: "cp807c5b8fabd53",
              cadastre_polygon_pid: "cp807c5b8fabd53",
              is_cadastre_polygon_changed: null,
              pic: "SA349595",
              propertyId: 24556,
              cadastre_hectares: 59.118370999999996,
              property_name: "NGR 13242674",
              front_gate_address: "2170 Adelargo Road, Warraderry NSW 2810",
              owner_name: "Luke-McCabe Account",
              business_name: "FG McCabe Pty Ltd",
              phone_number: "+61417820008",
              email_address: "luke@fgmccabe.com.au",
            },
          },
          {
            type: "Feature",
            id: 74575,
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [148.269626428, -33.724338182],
                    [148.26520249, -33.723797402],
                    [148.260905033, -33.723266124],
                    [148.260052038, -33.728063915],
                    [148.259307166, -33.732253061],
                    [148.259835145, -33.732318202],
                    [148.260157113, -33.732357931],
                    [148.263614574, -33.732784517],
                    [148.263936676, -33.732824326],
                    [148.263889033, -33.733093443],
                    [148.260109523, -33.732627146],
                    [148.259898009, -33.733823891],
                    [148.259494325, -33.733777682],
                    [148.259267868, -33.735033553],
                    [148.260330629, -33.735166265],
                    [148.260124628, -33.736317858],
                    [148.260017427, -33.736304448],
                    [148.258568193, -33.744405],
                    [148.277541502, -33.746747656],
                    [148.278178778, -33.743255478],
                    [148.277324403, -33.743150241],
                    [148.277372263, -33.742882675],
                    [148.278126878, -33.738663455],
                    [148.278146016, -33.738556434],
                    [148.278822957, -33.734771205],
                    [148.278841818, -33.734665789],
                    [148.267985786, -33.733324768],
                    [148.269626428, -33.724338182],
                  ],
                ],
              ],
            },
            properties: {
              plan_number: "1170998",
              plan_type: "DP",
              parcel_type: "Lot",
              jurisdicational_id: "1/1170998",
              lot_number: "1",
              plan: "DP1170998",
              reference: "cp8244ace04d2e6",
              cadastre_polygon_pid: "cp8244ace04d2e6",
              is_cadastre_polygon_changed: null,
              pic: "SA349595",
              propertyId: 24556,
              cadastre_hectares: 314.326572,
              property_name: "NGR 13242674",
              front_gate_address: "2170 Adelargo Road, Warraderry NSW 2810",
              owner_name: "Luke-McCabe Account",
              business_name: "FG McCabe Pty Ltd",
              phone_number: "+61417820008",
              email_address: "luke@fgmccabe.com.au",
            },
          },
          {
            type: "Feature",
            id: 74576,
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [148.249562846, -33.967689159],
                    [148.238665194, -33.965803181],
                    [148.234045259, -33.965079016],
                    [148.233702414, -33.964761449],
                    [148.23370167, -33.964743611],
                    [148.233563239, -33.964725414],
                    [148.233676794, -33.964147874],
                    [148.233582744, -33.961895745],
                    [148.233497497, -33.961850513],
                    [148.233169066, -33.961454341],
                    [148.229854411, -33.959767383],
                    [148.227063065, -33.958588853],
                    [148.226082386, -33.963733433],
                    [148.22807135, -33.963997422],
                    [148.226803511, -33.970672405],
                    [148.226762518, -33.970886402],
                    [148.226243594, -33.973617395],
                    [148.236923295, -33.975049374],
                    [148.247856973, -33.97651537],
                    [148.249562846, -33.967689159],
                  ],
                ],
              ],
            },
            properties: {
              plan_number: "1107650",
              plan_type: "DP",
              parcel_type: "Lot",
              jurisdicational_id: "2/1107650",
              lot_number: "2",
              plan: "DP1107650",
              reference: "cp82fc606d2e236",
              cadastre_polygon_pid: "cp82fc606d2e236",
              is_cadastre_polygon_changed: null,
              pic: "SA349595",
              propertyId: 24556,
              cadastre_hectares: 241.432816,
              property_name: "NGR 13242674",
              front_gate_address: "2170 Adelargo Road, Warraderry NSW 2810",
              owner_name: "Luke-McCabe Account",
              business_name: "FG McCabe Pty Ltd",
              phone_number: "+61417820008",
              email_address: "luke@fgmccabe.com.au",
            },
          },
          {
            type: "Feature",
            id: 74577,
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [148.227824357, -33.964147425],
                    [148.225834398, -33.963883427],
                    [148.225868398, -33.963705421],
                    [148.219285512, -33.962831449],
                    [148.218900572, -33.96491544],
                    [148.218407652, -33.967586428],
                    [148.218623648, -33.967613428],
                    [148.218234701, -33.969593428],
                    [148.226582522, -33.970683404],
                    [148.227824357, -33.964147425],
                  ],
                ],
              ],
            },
            properties: {
              plan_number: "1107650",
              plan_type: "DP",
              parcel_type: "Lot",
              jurisdicational_id: "2/1107650",
              lot_number: "2",
              plan: "DP1107650",
              reference: "cpa0417d0f07edb",
              cadastre_polygon_pid: "cpa0417d0f07edb",
              is_cadastre_polygon_changed: null,
              pic: "SA349595",
              propertyId: 24556,
              cadastre_hectares: 59.651687,
              property_name: "NGR 13242674",
              front_gate_address: "2170 Adelargo Road, Warraderry NSW 2810",
              owner_name: "Luke-McCabe Account",
              business_name: "FG McCabe Pty Ltd",
              phone_number: "+61417820008",
              email_address: "luke@fgmccabe.com.au",
            },
          },
          {
            type: "Feature",
            id: 74578,
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [148.269789319, -33.977222567],
                    [148.269789023, -33.977221267],
                    [148.269730676, -33.977215566],
                    [148.266087052, -33.976859051],
                    [148.266527066, -33.979496182],
                    [148.270415497, -33.980003319],
                    [148.269789319, -33.977222567],
                  ],
                ],
              ],
            },
            properties: {
              plan_number: "1107650",
              plan_type: "DP",
              parcel_type: "Lot",
              jurisdicational_id: "3/1107650",
              lot_number: "3",
              plan: "DP1107650",
              reference: "cpb8171fa2d6358",
              cadastre_polygon_pid: "cpb8171fa2d6358",
              is_cadastre_polygon_changed: null,
              pic: "SA349595",
              propertyId: 24556,
              cadastre_hectares: 10.303038,
              property_name: "NGR 13242674",
              front_gate_address: "2170 Adelargo Road, Warraderry NSW 2810",
              owner_name: "Luke-McCabe Account",
              business_name: "FG McCabe Pty Ltd",
              phone_number: "+61417820008",
              email_address: "luke@fgmccabe.com.au",
            },
          },
          {
            type: "Feature",
            id: 74579,
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [148.294098429, -33.738547445],
                    [148.295805206, -33.734111136],
                    [148.279667194, -33.731998261],
                    [148.279191108, -33.73454335],
                    [148.27917534, -33.734631502],
                    [148.279162146, -33.734705329],
                    [148.278447205, -33.738702905],
                    [148.277692617, -33.742922134],
                    [148.278223876, -33.742987571],
                    [148.278555902, -33.743028465],
                    [148.289749115, -33.744406669],
                    [148.291749506, -33.744652856],
                    [148.294098429, -33.738547445],
                  ],
                ],
              ],
            },
            properties: {
              plan_number: "1184713",
              plan_type: "DP",
              parcel_type: "Lot",
              jurisdicational_id: "26/1184713",
              lot_number: "26",
              plan: "DP1184713",
              reference: "cpcdc73e0a27ae3",
              cadastre_polygon_pid: "cpcdc73e0a27ae3",
              is_cadastre_polygon_changed: null,
              pic: "SA349595",
              propertyId: 24556,
              cadastre_hectares: 172.59468600000002,
              property_name: "NGR 13242674",
              front_gate_address: "2170 Adelargo Road, Warraderry NSW 2810",
              owner_name: "Luke-McCabe Account",
              business_name: "FG McCabe Pty Ltd",
              phone_number: "+61417820008",
              email_address: "luke@fgmccabe.com.au",
            },
          },
          {
            type: "Feature",
            id: 74580,
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [148.27917534, -33.734631502],
                    [148.279191108, -33.73454335],
                    [148.279667194, -33.731998261],
                    [148.280296431, -33.72862949],
                    [148.281230988, -33.723625733],
                    [148.274418374, -33.722770928],
                    [148.274098216, -33.722730743],
                    [148.274146971, -33.722463311],
                    [148.27006223, -33.721950545],
                    [148.270013412, -33.722217985],
                    [148.269626428, -33.724338182],
                    [148.267985786, -33.733324768],
                    [148.278841818, -33.734665789],
                    [148.279162146, -33.734705329],
                    [148.27917534, -33.734631502],
                  ],
                ],
              ],
            },
            properties: {
              plan_number: "878844",
              plan_type: "DP",
              parcel_type: "Lot",
              jurisdicational_id: "111/878844",
              lot_number: "111",
              plan: "DP878844",
              reference: "cpd944d7d2d1e18",
              cadastre_polygon_pid: "cpd944d7d2d1e18",
              is_cadastre_polygon_changed: null,
              pic: "SA349595",
              propertyId: 24556,
              cadastre_hectares: 131.762082,
              property_name: "NGR 13242674",
              front_gate_address: "2170 Adelargo Road, Warraderry NSW 2810",
              owner_name: "Luke-McCabe Account",
              business_name: "FG McCabe Pty Ltd",
              phone_number: "+61417820008",
              email_address: "luke@fgmccabe.com.au",
            },
          },
          {
            type: "Feature",
            id: 74581,
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [148.298286361, -33.751489576],
                    [148.298123369, -33.751470582],
                    [148.298161367, -33.751532577],
                    [148.298203364, -33.751577585],
                    [148.298244365, -33.751611585],
                    [148.298272368, -33.751657579],
                    [148.298286361, -33.751703582],
                    [148.298273363, -33.751749586],
                    [148.298273363, -33.751794585],
                    [148.298274367, -33.751840588],
                    [148.298274367, -33.751886582],
                    [148.298220368, -33.751978588],
                    [148.298179367, -33.752013584],
                    [148.298166369, -33.752059587],
                    [148.298125368, -33.752093587],
                    [148.298085371, -33.75213959],
                    [148.29804437, -33.752174586],
                    [148.298003377, -33.75220959],
                    [148.297962376, -33.752243591],
                    [148.297908377, -33.752278586],
                    [148.297867376, -33.75231359],
                    [148.297812373, -33.752348586],
                    [148.297757379, -33.752359593],
                    [148.29770338, -33.752371587],
                    [148.297620373, -33.75238359],
                    [148.297566383, -33.752395593],
                    [148.297497387, -33.752407587],
                    [148.297442385, -33.752407587],
                    [148.29738739, -33.752396588],
                    [148.297319391, -33.752385589],
                    [148.297264388, -33.75237459],
                    [148.297167389, -33.75234059],
                    [148.297099397, -33.752341594],
                    [148.297030392, -33.752330586],
                    [148.296975398, -33.752319587],
                    [148.296865401, -33.752319587],
                    [148.2967974, -33.75233159],
                    [148.2967294, -33.752355595],
                    [148.296674397, -33.752367589],
                    [148.296619394, -33.752378588],
                    [148.296523407, -33.752402594],
                    [148.296482406, -33.752437589],
                    [148.296455407, -33.752483592],
                    [148.296470403, -33.752540594],
                    [148.296498416, -33.752631596],
                    [148.296471407, -33.752712595],
                    [148.296485409, -33.752757594],
                    [148.296527405, -33.752814596],
                    [148.296569419, -33.752849591],
                    [148.296624404, -33.752883583],
                    [148.296679407, -33.7528946],
                    [148.296789404, -33.752916597],
                    [148.296844398, -33.752938595],
                    [148.2968994, -33.752950598],
                    [148.296954403, -33.752972595],
                    [148.297037401, -33.753006596],
                    [148.297133405, -33.753028593],
                    [148.297215399, -33.753062594],
                    [148.297243393, -33.753119595],
                    [148.297298396, -33.753142597],
                    [148.297408393, -33.753164595],
                    [148.297477389, -33.753186592],
                    [148.297546394, -33.753232595],
                    [148.29758839, -33.753266596],
                    [148.297629382, -33.753300596],
                    [148.297684385, -33.753322594],
                    [148.297739388, -33.753356594],
                    [148.297808384, -33.753367602],
                    [148.297863387, -33.753390594],
                    [148.297919385, -33.753435594],
                    [148.297988381, -33.753481597],
                    [148.298029382, -33.753515597],
                    [148.298084385, -33.753549598],
                    [148.298126381, -33.753583598],
                    [148.298140392, -33.753629601],
                    [148.298154384, -33.753686603],
                    [148.298182379, -33.753743596],
                    [148.298224384, -33.753789599],
                    [148.298265385, -33.753834598],
                    [148.298279378, -33.753880601],
                    [148.298294384, -33.753926596],
                    [148.298321383, -33.753971604],
                    [148.298381379, -33.754162599],
                    [148.298372388, -33.754312603],
                    [148.298284389, -33.754350601],
                    [148.298229386, -33.754373602],
                    [148.298175387, -33.754385605],
                    [148.298120393, -33.754397608],
                    [148.298051388, -33.754409602],
                    [148.297996394, -33.754409602],
                    [148.297928394, -33.754432603],
                    [148.297860393, -33.754444606],
                    [148.297805399, -33.754456609],
                    [148.297750396, -33.754456609],
                    [148.297695402, -33.754457604],
                    [148.297640399, -33.754457604],
                    [148.297585396, -33.754446596],
                    [148.297530402, -33.754424607],
                    [148.297461397, -33.754401606],
                    [148.297406403, -33.754390616],
                    [148.297324401, -33.75436861],
                    [148.297255405, -33.754357611],
                    [148.297173402, -33.754334609],
                    [148.297118408, -33.754335604],
                    [148.297063405, -33.754335604],
                    [148.297008411, -33.754324605],
                    [148.296953417, -33.754301604],
                    [148.296898414, -33.754279606],
                    [148.296843411, -33.754268607],
                    [148.296774416, -33.754245606],
                    [148.296692413, -33.754234607],
                    [148.296637419, -33.754223608],
                    [148.296582416, -33.754235611],
                    [148.296500423, -33.754259608],
                    [148.29644542, -33.754270606],
                    [148.296335423, -33.754294612],
                    [148.296281424, -33.754306606],
                    [148.296226421, -33.754329607],
                    [148.296171427, -33.75434161],
                    [148.296117428, -33.754364612],
                    [148.296062425, -33.754387613],
                    [148.296007431, -33.75441161],
                    [148.295953432, -33.754423612],
                    [148.295898429, -33.754446614],
                    [148.295843435, -33.754446614],
                    [148.295775434, -33.754470611],
                    [148.295692436, -33.754470611],
                    [148.295624437, -33.754494616],
                    [148.295583435, -33.754528617],
                    [148.295542443, -33.754563612],
                    [148.295502437, -33.754609615],
                    [148.295461445, -33.754655609],
                    [148.295434445, -33.754713615],
                    [148.295421446, -33.754758614],
                    [148.295380445, -33.754839604],
                    [148.29538144, -33.754885616],
                    [148.295395442, -33.754931619],
                    [148.295437447, -33.75499962],
                    [148.295465442, -33.755068616],
                    [148.295506443, -33.755113615],
                    [148.295548448, -33.755182629],
                    [148.295576442, -33.755227619],
                    [148.295618448, -33.755284621],
                    [148.29565944, -33.755318621],
                    [148.295715438, -33.755387617],
                    [148.295770441, -33.755432616],
                    [148.295812437, -33.755466616],
                    [148.295881442, -33.755523618],
                    [148.295922443, -33.75555761],
                    [148.295977437, -33.75558062],
                    [148.296046442, -33.755614621],
                    [148.296101436, -33.755636618],
                    [148.29615643, -33.755647617],
                    [148.296225435, -33.755635623],
                    [148.296279434, -33.75558962],
                    [148.296334437, -33.755577617],
                    [148.296334437, -33.75562362],
                    [148.29629443, -33.755658616],
                    [148.296253438, -33.755704619],
                    [148.296267431, -33.755750622],
                    [148.296335432, -33.755715618],
                    [148.296403432, -33.755669624],
                    [148.296472437, -33.755645618],
                    [148.296582425, -33.755667616],
                    [148.296664437, -33.755678623],
                    [148.296719431, -33.755689622],
                    [148.296774425, -33.755723623],
                    [148.296830423, -33.755757623],
                    [148.296885426, -33.755769617],
                    [148.296885426, -33.755814607],
                    [148.296899427, -33.755860619],
                    [148.296858426, -33.755918625],
                    [148.296818429, -33.755952625],
                    [148.296777428, -33.755987621],
                    [148.296695434, -33.756079627],
                    [148.296655419, -33.756125621],
                    [148.296587436, -33.75620662],
                    [148.296533437, -33.756264626],
                    [148.296492436, -33.756310629],
                    [148.296437433, -33.756356623],
                    [148.296397435, -33.756414638],
                    [148.296370436, -33.756471631],
                    [148.296329444, -33.756517625],
                    [148.29637144, -33.756551625],
                    [148.296425439, -33.756539632],
                    [148.296480442, -33.75651663],
                    [148.296521434, -33.756481626],
                    [148.296575433, -33.756447625],
                    [148.296644438, -33.75641263],
                    [148.29668543, -33.756377626],
                    [148.296794423, -33.756377626],
                    [148.296863428, -33.756422625],
                    [148.296905433, -33.756456625],
                    [148.296905433, -33.756502628],
                    [148.296919426, -33.75655963],
                    [148.296906428, -33.756605624],
                    [148.296865427, -33.756651628],
                    [148.296839431, -33.756720632],
                    [148.29679843, -33.756766626],
                    [148.296757438, -33.75681263],
                    [148.296730438, -33.756858633],
                    [148.296717441, -33.756904627],
                    [148.296690441, -33.75695063],
                    [148.296677434, -33.756996624],
                    [148.296664437, -33.757053635],
                    [148.296623435, -33.757123635],
                    [148.296596445, -33.757180637],
                    [148.296569445, -33.757226631],
                    [148.296529439, -33.757284637],
                    [148.29650244, -33.75734163],
                    [148.296461447, -33.757376634],
                    [148.296353449, -33.757560638],
                    [148.296312448, -33.757594638],
                    [148.296271447, -33.757652644],
                    [148.296217448, -33.75768764],
                    [148.296162454, -33.757733634],
                    [148.296122456, -33.757779646],
                    [148.296081455, -33.75782564],
                    [148.296040454, -33.757860635],
                    [148.295986455, -33.75790663],
                    [148.295945463, -33.757941643],
                    [148.29589046, -33.757987637],
                    [148.295850462, -33.758021637],
                    [148.29576846, -33.758091646],
                    [148.295727468, -33.75813764],
                    [148.29571447, -33.758194642],
                    [148.295701463, -33.758240636],
                    [148.295688465, -33.758309641],
                    [148.295647464, -33.758367638],
                    [148.295607467, -33.758436643],
                    [148.295553468, -33.758516646],
                    [148.295526468, -33.758562641],
                    [148.295485476, -33.758631645],
                    [148.295472478, -33.758677648],
                    [148.295459471, -33.758735645],
                    [148.295473473, -33.758780644],
                    [148.295487475, -33.75883865],
                    [148.295501477, -33.758895652],
                    [148.295488479, -33.758952654],
                    [148.295489474, -33.758998648],
                    [148.295503476, -33.759067653],
                    [148.29550448, -33.759135654],
                    [148.295490478, -33.759181648],
                    [148.295491482, -33.759227651],
                    [148.29547748, -33.759273654],
                    [148.295464482, -33.759330656],
                    [148.295465477, -33.759376651],
                    [148.295465477, -33.759422654],
                    [148.295466481, -33.759479656],
                    [148.295466481, -33.759525659],
                    [148.295480483, -33.759582652],
                    [148.29549548, -33.759628655],
                    [148.29549548, -33.759674658],
                    [148.295482482, -33.759743654],
                    [148.295455483, -33.759812659],
                    [148.295428483, -33.759858662],
                    [148.295387482, -33.759892662],
                    [148.295360482, -33.759938656],
                    [148.295306492, -33.759996662],
                    [148.295251489, -33.760031658],
                    [148.295211492, -33.760100662],
                    [148.295170491, -33.760157664],
                    [148.295130493, -33.760238663],
                    [148.295076494, -33.760341659],
                    [148.295049495, -33.760387662],
                    [148.294995496, -33.760445659],
                    [148.294940502, -33.760480663],
                    [148.294886503, -33.760515668],
                    [148.2948045, -33.760561662],
                    [148.294735505, -33.760596666],
                    [148.294640504, -33.760642669],
                    [148.29458551, -33.760666666],
                    [148.294531511, -33.760712669],
                    [148.29449051, -33.760746669],
                    [148.294449509, -33.760804666],
                    [148.294436511, -33.760861668],
                    [148.294437515, -33.760953666],
                    [148.294424517, -33.76102267],
                    [148.294397518, -33.761091666],
                    [148.294411511, -33.761148668],
                    [148.294439514, -33.761194671],
                    [148.294453516, -33.761239679],
                    [148.29448151, -33.761285673],
                    [148.294523515, -33.761331668],
                    [148.29455151, -33.76138867],
                    [148.294551519, -33.761445672],
                    [148.294524519, -33.761491675],
                    [148.294498515, -33.761548677],
                    [148.294484513, -33.761617672],
                    [148.294485517, -33.761675678],
                    [148.29448653, -33.761732671],
                    [148.294500514, -33.761778674],
                    [148.294500523, -33.761858678],
                    [148.294501518, -33.761904672],
                    [148.29451552, -33.76194968],
                    [148.294516524, -33.762007677],
                    [148.294516524, -33.762064679],
                    [148.294503517, -33.762121681],
                    [148.294490519, -33.76220268],
                    [148.294477512, -33.762259682],
                    [148.294464524, -33.762305676],
                    [148.294464524, -33.762351679],
                    [148.294451526, -33.762420684],
                    [148.294451526, -33.762466678],
                    [148.29445253, -33.76252368],
                    [148.294466522, -33.762569683],
                    [148.294521525, -33.762568679],
                    [148.294576519, -33.762568679],
                    [148.294631522, -33.762579678],
                    [148.294700518, -33.762601684],
                    [148.294782521, -33.762658686],
                    [148.294838519, -33.76270468],
                    [148.294893522, -33.762726678],
                    [148.294976519, -33.762771686],
                    [148.295031513, -33.762805678],
                    [148.295099514, -33.762805678],
                    [148.295154517, -33.762793684],
                    [148.295223513, -33.762781681],
                    [148.29526351, -33.762747681],
                    [148.295318513, -33.762735678],
                    [148.2953605, -33.762780686],
                    [148.295374511, -33.762838683],
                    [148.295402514, -33.762883682],
                    [148.295430509, -33.762952687],
                    [148.295485512, -33.76300968],
                    [148.29554151, -33.763077681],
                    [148.295569512, -33.763146685],
                    [148.295597507, -33.763191684],
                    [148.295611509, -33.763271688],
                    [148.295626505, -33.763317682],
                    [148.295667507, -33.763374684],
                    [148.295709512, -33.763431686],
                    [148.295737506, -33.763477689],
                    [148.29576551, -33.763522688],
                    [148.295821508, -33.763614686],
                    [148.295848507, -33.763659685],
                    [148.295890503, -33.763694689],
                    [148.295959508, -33.763705688],
                    [148.2960275, -33.763693685],
                    [148.296082503, -33.76369269],
                    [148.296151499, -33.76369269],
                    [148.296219499, -33.763703689],
                    [148.296247503, -33.763748688],
                    [148.296248498, -33.763794691],
                    [148.2962625, -33.763851702],
                    [148.296290503, -33.76390969],
                    [148.296318498, -33.763966692],
                    [148.296360503, -33.764046687],
                    [148.296374505, -33.764103689],
                    [148.296388497, -33.764149692],
                    [148.296389501, -33.764194691],
                    [148.296417505, -33.764274695],
                    [148.296472499, -33.764297687],
                    [148.296514504, -33.764354689],
                    [148.296555496, -33.764400692],
                    [148.296610499, -33.764445691],
                    [148.296666497, -33.764490691],
                    [148.296701, -33.764291995],
                    [148.298475385, -33.754071606],
                    [148.298286361, -33.751489576],
                  ],
                ],
              ],
            },
            properties: {
              plan_number: "752943",
              plan_type: "DP",
              parcel_type: "Lot",
              jurisdicational_id: "28/752943",
              lot_number: "28",
              plan: "DP752943",
              reference: "cpdb2a0d68c071d",
              cadastre_polygon_pid: "cpdb2a0d68c071d",
              is_cadastre_polygon_changed: null,
              pic: "SA349595",
              propertyId: 24556,
              cadastre_hectares: 22.103842999999998,
              property_name: "NGR 13242674",
              front_gate_address: "2170 Adelargo Road, Warraderry NSW 2810",
              owner_name: "Luke-McCabe Account",
              business_name: "FG McCabe Pty Ltd",
              phone_number: "+61417820008",
              email_address: "luke@fgmccabe.com.au",
            },
          },
          {
            type: "Feature",
            id: 74582,
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [148.249986374, -33.756737687],
                    [148.250520305, -33.753613677],
                    [148.239891474, -33.752237696],
                    [148.238700555, -33.755208709],
                    [148.249986374, -33.756737687],
                  ],
                ],
              ],
            },
            properties: {
              plan_number: "752956",
              plan_type: "DP",
              parcel_type: "Lot",
              jurisdicational_id: "32/752956",
              lot_number: "32",
              plan: "DP752956",
              reference: "cpdbca6ce3041a5",
              cadastre_polygon_pid: "cpdbca6ce3041a5",
              is_cadastre_polygon_changed: null,
              pic: "SA349595",
              propertyId: 24556,
              cadastre_hectares: 35.603371,
              property_name: "NGR 13242674",
              front_gate_address: "2170 Adelargo Road, Warraderry NSW 2810",
              owner_name: "Luke-McCabe Account",
              business_name: "FG McCabe Pty Ltd",
              phone_number: "+61417820008",
              email_address: "luke@fgmccabe.com.au",
            },
          },
          {
            type: "Feature",
            id: 74583,
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [148.297256383, -33.75152658],
                    [148.297200385, -33.751492579],
                    [148.297159384, -33.751458579],
                    [148.297117387, -33.751424579],
                    [148.297090388, -33.751378584],
                    [148.297048383, -33.751344584],
                    [148.296993389, -33.751322577],
                    [148.296938386, -33.751288586],
                    [148.296896389, -33.751242583],
                    [148.296841387, -33.751208583],
                    [148.296799399, -33.751163583],
                    [148.296758389, -33.75111758],
                    [148.296730386, -33.751071577],
                    [148.296716393, -33.751014584],
                    [148.296702391, -33.750968581],
                    [148.296687385, -33.750911579],
                    [148.296673393, -33.750865585],
                    [148.296659391, -33.750808574],
                    [148.296645389, -33.750763575],
                    [148.296631387, -33.750717581],
                    [148.296603384, -33.750671577],
                    [148.296575389, -33.750603577],
                    [148.296533393, -33.750568572],
                    [148.296519391, -33.750523573],
                    [148.296491388, -33.750477579],
                    [148.296450387, -33.750431576],
                    [148.296422392, -33.750386577],
                    [148.296380387, -33.750340573],
                    [148.296339386, -33.750306573],
                    [148.296283388, -33.750249571],
                    [148.296242395, -33.75021558],
                    [148.29620039, -33.750170572],
                    [148.296159389, -33.75011357],
                    [148.296103391, -33.750021572],
                    [148.296061395, -33.749987572],
                    [148.296020394, -33.749942573],
                    [148.295978397, -33.74989657],
                    [148.295923394, -33.749862569],
                    [148.295881398, -33.749816575],
                    [148.295840397, -33.749782575],
                    [148.295798392, -33.749748574],
                    [148.295757399, -33.749714574],
                    [148.295715394, -33.749669575],
                    [148.295674393, -33.749635574],
                    [148.295632397, -33.74960057],
                    [148.295605397, -33.749555571],
                    [148.295604393, -33.749509568],
                    [148.2956174, -33.749452566],
                    [148.295631393, -33.749406572],
                    [148.295630398, -33.749360568],
                    [148.295643395, -33.749314565],
                    [148.295657397, -33.749268571],
                    [148.295683393, -33.749176565],
                    [148.29569639, -33.749119563],
                    [148.29569639, -33.749073569],
                    [148.295709388, -33.749015563],
                    [148.295722386, -33.748970564],
                    [148.295736388, -33.748912567],
                    [148.295748328, -33.748868347],
                    [148.295761191, -33.748824334],
                    [148.295774978, -33.748780563],
                    [148.295789652, -33.748737106],
                    [148.295805204, -33.748694025],
                    [148.295819717, -33.748657174],
                    [148.295835243, -33.748620691],
                    [148.295851252, -33.748584404],
                    [148.295867253, -33.748548091],
                    [148.295882716, -33.748511581],
                    [148.295889403, -33.748495204],
                    [148.295896036, -33.748478818],
                    [148.295902652, -33.748462414],
                    [148.295909231, -33.748445992],
                    [148.295915748, -33.748429561],
                    [148.295933568, -33.748390639],
                    [148.29595683, -33.748337859],
                    [148.295979598, -33.748284846],
                    [148.296002089, -33.748231708],
                    [148.296024544, -33.74817856],
                    [148.296065482, -33.74808269],
                    [148.296106394, -33.747986731],
                    [148.296146373, -33.747890413],
                    [148.296184533, -33.74779345],
                    [148.296219977, -33.74769559],
                    [148.296238882, -33.747635926],
                    [148.296256012, -33.747575625],
                    [148.296272882, -33.747515244],
                    [148.296291016, -33.747455373],
                    [148.296311938, -33.747396578],
                    [148.296334267, -33.747342445],
                    [148.2963583, -33.747288912],
                    [148.296383802, -33.747235989],
                    [148.296410578, -33.747183711],
                    [148.296438357, -33.747132087],
                    [148.296470816, -33.747071311],
                    [148.296503704, -33.747009881],
                    [148.296538754, -33.746950092],
                    [148.296577702, -33.746894228],
                    [148.296622289, -33.746844577],
                    [148.29665966, -33.746812629],
                    [148.296700132, -33.746783801],
                    [148.296742621, -33.746757151],
                    [148.296786025, -33.746731729],
                    [148.296829231, -33.746706585],
                    [148.296868556, -33.746685851],
                    [148.296909432, -33.746667242],
                    [148.296950164, -33.746648651],
                    [148.296989131, -33.746627971],
                    [148.297024664, -33.746603096],
                    [148.297049172, -33.746582891],
                    [148.297074082, -33.746561386],
                    [148.297097084, -33.746538475],
                    [148.297115873, -33.746514084],
                    [148.297128135, -33.746488088],
                    [148.297133173, -33.746452555],
                    [148.297129973, -33.746411392],
                    [148.297119646, -33.746369593],
                    [148.297103323, -33.74633216],
                    [148.297082123, -33.746304084],
                    [148.297053985, -33.746288236],
                    [148.297018067, -33.74628102],
                    [148.296977809, -33.746278295],
                    [148.296936709, -33.746275875],
                    [148.296898182, -33.746269609],
                    [148.296843385, -33.746254272],
                    [148.296788633, -33.746236864],
                    [148.29673485, -33.746216775],
                    [148.29668293, -33.746193388],
                    [148.296633781, -33.746166093],
                    [148.296571517, -33.746125647],
                    [148.296507909, -33.746078685],
                    [148.296450145, -33.746026649],
                    [148.296405405, -33.745970974],
                    [148.29638088, -33.745913076],
                    [148.2963769, -33.745879676],
                    [148.296377456, -33.745845164],
                    [148.29638114, -33.745810097],
                    [148.296386581, -33.745775057],
                    [148.296392381, -33.745740582],
                    [148.296396155, -33.745719749],
                    [148.296400538, -33.745699007],
                    [148.296405352, -33.745678345],
                    [148.296410363, -33.745657719],
                    [148.296415382, -33.745637111],
                    [148.296417785, -33.745627913],
                    [148.296420384, -33.745618752],
                    [148.29642293, -33.745609591],
                    [148.296425162, -33.745600385],
                    [148.296426829, -33.745591089],
                    [148.296428541, -33.745573269],
                    [148.296428801, -33.745555],
                    [148.296427645, -33.74553666],
                    [148.29642509, -33.74551858],
                    [148.296421155, -33.7455011],
                    [148.291994537, -33.744956457],
                    [148.292331125, -33.74842957],
                    [148.293349512, -33.758933651],
                    [148.293350516, -33.758948656],
                    [148.293375508, -33.759215657],
                    [148.29364354, -33.762097676],
                    [148.295088523, -33.764333696],
                    [148.296505513, -33.765413703],
                    [148.296620503, -33.764751695],
                    [148.296572501, -33.7647327],
                    [148.296462504, -33.764664699],
                    [148.296420508, -33.764630699],
                    [148.296365505, -33.764596699],
                    [148.296310502, -33.7645857],
                    [148.296255508, -33.764573697],
                    [148.296145511, -33.7645517],
                    [148.296103506, -33.764506691],
                    [148.296075502, -33.764414694],
                    [148.296075502, -33.764357692],
                    [148.296074507, -33.76430069],
                    [148.296087505, -33.764242693],
                    [148.296087505, -33.76419669],
                    [148.296100503, -33.764150696],
                    [148.296100503, -33.764105688],
                    [148.296113509, -33.764047691],
                    [148.296140518, -33.763990689],
                    [148.296071504, -33.763967687],
                    [148.296016519, -33.763968691],
                    [148.295961507, -33.763957692],
                    [148.295906504, -33.763957692],
                    [148.29585151, -33.763969695],
                    [148.295797511, -33.763992688],
                    [148.295742508, -33.764015689],
                    [148.295687514, -33.764027692],
                    [148.295646513, -33.763993692],
                    [148.295590515, -33.76393669],
                    [148.295576513, -33.763890687],
                    [148.295562511, -33.763845687],
                    [148.295534517, -33.763776692],
                    [148.295506513, -33.763730689],
                    [148.295478519, -33.763685689],
                    [148.295437509, -33.763628687],
                    [148.295395513, -33.763582693],
                    [148.295367518, -33.763525691],
                    [148.295353516, -33.763479688],
                    [148.295339515, -33.763434689],
                    [148.295324519, -33.763376683],
                    [148.295310508, -33.763331684],
                    [148.295310508, -33.76328569],
                    [148.295282514, -33.763239687],
                    [148.295268512, -33.763171686],
                    [148.295253515, -33.763102681],
                    [148.295184519, -33.76303468],
                    [148.295129516, -33.763011688],
                    [148.295074513, -33.76300068],
                    [148.295019519, -33.76300068],
                    [148.294964516, -33.763001684],
                    [148.294909522, -33.762990685],
                    [148.294854519, -33.762978682],
                    [148.294786519, -33.762979686],
                    [148.294731525, -33.762968688],
                    [148.294676522, -33.762968688],
                    [148.294566525, -33.762946681],
                    [148.294497529, -33.762946681],
                    [148.294387532, -33.762924683],
                    [148.294332529, -33.762902686],
                    [148.294277535, -33.762879684],
                    [148.294222532, -33.762845684],
                    [148.294180536, -33.762811683],
                    [148.294139534, -33.762777683],
                    [148.294124529, -33.762708687],
                    [148.294124529, -33.76266367],
                    [148.294137535, -33.762605682],
                    [148.294137535, -33.76254868],
                    [148.294150533, -33.762502686],
                    [148.294149529, -33.762456683],
                    [148.294163531, -33.762399681],
                    [148.294176529, -33.762341684],
                    [148.294189527, -33.762284682],
                    [148.294202524, -33.762238679],
                    [148.294216526, -33.762192676],
                    [148.294229533, -33.762146682],
                    [148.294256523, -33.76208968],
                    [148.294282528, -33.761997673],
                    [148.294282528, -33.761951679],
                    [148.294308523, -33.761859673],
                    [148.294308523, -33.761813679],
                    [148.294321521, -33.761767676],
                    [148.294321521, -33.761722676],
                    [148.294320517, -33.761676673],
                    [148.294334519, -33.76163067],
                    [148.294333524, -33.761550676],
                    [148.29430552, -33.761458669],
                    [148.294277517, -33.761412675],
                    [148.294235521, -33.761378684],
                    [148.294207517, -33.761333676],
                    [148.294166525, -33.761287672],
                    [148.29412452, -33.761242664],
                    [148.294069526, -33.761208673],
                    [148.294028516, -33.761173669],
                    [148.293986519, -33.761128669],
                    [148.293944523, -33.761082666],
                    [148.29391652, -33.761037667],
                    [148.29388952, -33.760991682],
                    [148.293874523, -33.760934671],
                    [148.293888525, -33.760888668],
                    [148.293942524, -33.760819672],
                    [148.293955522, -33.760773669],
                    [148.293996523, -33.760704664],
                    [148.29403652, -33.760669669],
                    [148.294077513, -33.760635668],
                    [148.294145513, -33.760577654],
                    [148.294200516, -33.760531668],
                    [148.294241509, -33.760496664],
                    [148.294281515, -33.760450652],
                    [148.294336509, -33.760438667],
                    [148.294446506, -33.760414661],
                    [148.294500505, -33.760403663],
                    [148.29456951, -33.760379666],
                    [148.294637501, -33.760344662],
                    [148.294692504, -33.76032166],
                    [148.294746503, -33.760298659],
                    [148.294801497, -33.760274662],
                    [148.2948565, -33.76025166],
                    [148.294910499, -33.760239658],
                    [148.294965493, -33.760216665],
                    [148.294992493, -33.760170662],
                    [148.295019492, -33.760101657],
                    [148.29503249, -33.760055663],
                    [148.29503249, -33.76000966],
                    [148.295031495, -33.759964661],
                    [148.295031495, -33.759918658],
                    [148.295030491, -33.759860661],
                    [148.295043489, -33.75979266],
                    [148.295057491, -33.759746657],
                    [148.295056487, -33.759700654],
                    [148.295056487, -33.759643661],
                    [148.295069494, -33.759585655],
                    [148.29506849, -33.759528653],
                    [148.29506849, -33.759471651],
                    [148.295054488, -33.759425657],
                    [148.295053484, -33.759379653],
                    [148.295039491, -33.75933365],
                    [148.295039491, -33.759287656],
                    [148.295038487, -33.759230654],
                    [148.295037483, -33.759171653],
                    [148.295037483, -33.759138648],
                    [148.29505049, -33.759093649],
                    [148.295050481, -33.759047655],
                    [148.295050481, -33.759001651],
                    [148.295049486, -33.758955657],
                    [148.295062484, -33.758898646],
                    [148.295075481, -33.758840649],
                    [148.295102481, -33.758794646],
                    [148.295116483, -33.758737644],
                    [148.295142478, -33.758645647],
                    [148.295142478, -33.758599644],
                    [148.295169478, -33.758542651],
                    [148.295182467, -33.758496648],
                    [148.295209475, -33.758450645],
                    [148.295236475, -33.758392648],
                    [148.295317473, -33.758254647],
                    [148.295330471, -33.758208644],
                    [148.29538447, -33.758116656],
                    [148.295425471, -33.758059645],
                    [148.295438469, -33.758013642],
                    [148.29547947, -33.757978637],
                    [148.295519467, -33.757921653],
                    [148.295574461, -33.757863638],
                    [148.29562846, -33.757817644],
                    [148.295669462, -33.757759638],
                    [148.295710463, -33.757713635],
                    [148.295737462, -33.757667641],
                    [148.29577746, -33.757621638],
                    [148.295791461, -33.757575626],
                    [148.295831459, -33.757517638],
                    [148.295858458, -33.757471635],
                    [148.295899459, -33.75742564],
                    [148.29592645, -33.757379637],
                    [148.295967451, -33.757345637],
                    [148.296007449, -33.757287631],
                    [148.29604845, -33.757241637],
                    [148.296089451, -33.757206632],
                    [148.296116451, -33.75714963],
                    [148.29617045, -33.757126638],
                    [148.296211451, -33.757091633],
                    [148.296266445, -33.757056629],
                    [148.296320444, -33.757021634],
                    [148.29638944, -33.756998632],
                    [148.296443439, -33.756963628],
                    [148.296498442, -33.756917634],
                    [148.29655245, -33.756871631],
                    [148.296593442, -33.756813643],
                    [148.29660644, -33.75676763],
                    [148.296605427, -33.756722631],
                    [148.296591434, -33.756676628],
                    [148.296550442, -33.756642628],
                    [148.296495439, -33.756642628],
                    [148.296454437, -33.756688631],
                    [148.296413427, -33.756723626],
                    [148.296386446, -33.756769629],
                    [148.296332447, -33.756804625],
                    [148.296277444, -33.756827626],
                    [148.296222441, -33.756827626],
                    [148.296168451, -33.75682863],
                    [148.296113448, -33.75682863],
                    [148.296058445, -33.756805629],
                    [148.296016448, -33.756771628],
                    [148.295988445, -33.756726629],
                    [148.295974452, -33.756680626],
                    [148.295974452, -33.756634632],
                    [148.29598745, -33.75657763],
                    [148.296000448, -33.756531627],
                    [148.296027447, -33.756485624],
                    [148.296040445, -33.756439629],
                    [148.296067444, -33.756393626],
                    [148.296081446, -33.756335629],
                    [148.296094444, -33.756290639],
                    [148.296135445, -33.756255626],
                    [148.296175442, -33.756209623],
                    [148.296216444, -33.756174627],
                    [148.296257436, -33.756139623],
                    [148.296298437, -33.756105623],
                    [148.296352436, -33.756070627],
                    [148.296407439, -33.756047626],
                    [148.296462433, -33.756035623],
                    [148.296516432, -33.756012612],
                    [148.296557434, -33.755977626],
                    [148.296584433, -33.755920624],
                    [148.296570431, -33.755862618],
                    [148.296515428, -33.75584062],
                    [148.296460434, -33.755829631],
                    [148.296405431, -33.755829631],
                    [148.296350437, -33.755818623],
                    [148.29624044, -33.755842619],
                    [148.296117437, -33.755842619],
                    [148.296062443, -33.755831621],
                    [148.29600744, -33.755843623],
                    [148.295952446, -33.755844618],
                    [148.295843435, -33.755844618],
                    [148.295788441, -33.75583362],
                    [148.295733447, -33.755811622],
                    [148.295664451, -33.75578862],
                    [148.295609448, -33.755766623],
                    [148.295581444, -33.75572062],
                    [148.29552645, -33.755686619],
                    [148.295484445, -33.755652619],
                    [148.295443453, -33.755606625],
                    [148.295401448, -33.755572633],
                    [148.295346454, -33.755515622],
                    [148.295304448, -33.75545862],
                    [148.295290447, -33.755413621],
                    [148.295262452, -33.755367618],
                    [148.29524845, -33.755310616],
                    [148.295233454, -33.755252619],
                    [148.295219452, -33.75520762],
                    [148.295219452, -33.755161617],
                    [148.295205441, -33.755104615],
                    [148.295177447, -33.755058621],
                    [148.295149444, -33.755012618],
                    [148.29512145, -33.754967618],
                    [148.295107448, -33.754921615],
                    [148.295106453, -33.754875612],
                    [148.295106453, -33.754818619],
                    [148.295105449, -33.754772616],
                    [148.295105449, -33.754703611],
                    [148.295104445, -33.754646618],
                    [148.295117452, -33.754600615],
                    [148.295158444, -33.754542609],
                    [148.295239443, -33.754404609],
                    [148.295280444, -33.754358615],
                    [148.295335438, -33.754347607],
                    [148.295389437, -33.754335613],
                    [148.29544444, -33.754334609],
                    [148.295513436, -33.754322615],
                    [148.295581436, -33.754333614],
                    [148.295636439, -33.754333614],
                    [148.295705435, -33.754356607],
                    [148.295760437, -33.754367614],
                    [148.295815431, -33.754366611],
                    [148.295870434, -33.754366611],
                    [148.295924433, -33.754354608],
                    [148.295979427, -33.754331606],
                    [148.29603443, -33.754296611],
                    [148.296075422, -33.754261606],
                    [148.296115429, -33.754215612],
                    [148.296197413, -33.754123606],
                    [148.296251421, -33.754111603],
                    [148.296333433, -33.754088611],
                    [148.296402419, -33.754076608],
                    [148.296457413, -33.754075604],
                    [148.296512416, -33.754064605],
                    [148.296566415, -33.75406361],
                    [148.296635411, -33.754051607],
                    [148.296690414, -33.754051607],
                    [148.296772408, -33.754039605],
                    [148.296827411, -33.754039605],
                    [148.296895411, -33.75403861],
                    [148.296950414, -33.754038601],
                    [148.297005408, -33.754037606],
                    [148.297060402, -33.754037606],
                    [148.297115405, -33.754048604],
                    [148.297184401, -33.754071606],
                    [148.297253406, -33.754082605],
                    [148.297321398, -33.754116605],
                    [148.297390393, -33.754138603],
                    [148.297445396, -33.754161604],
                    [148.297610396, -33.754194601],
                    [148.297679392, -33.754205608],
                    [148.297734395, -33.754204605],
                    [148.297789398, -33.754216607],
                    [148.297844392, -33.754204605],
                    [148.2978984, -33.754192602],
                    [148.297953394, -33.7541696],
                    [148.298008388, -33.754157606],
                    [148.298049389, -33.754122602],
                    [148.298103388, -33.754087607],
                    [148.29814439, -33.754041604],
                    [148.298157387, -33.753984602],
                    [148.298157387, -33.753938598],
                    [148.298170385, -33.753892604],
                    [148.298156383, -33.753846601],
                    [148.298114387, -33.753801602],
                    [148.298086384, -33.753755599],
                    [148.297976387, -33.753687598],
                    [148.29786639, -33.7536656],
                    [148.297811387, -33.7536656],
                    [148.297756393, -33.753666604],
                    [148.29770139, -33.753643603],
                    [148.297646396, -33.753609602],
                    [148.297591393, -33.753587596],
                    [148.29753639, -33.753564603],
                    [148.297481396, -33.753542597],
                    [148.297426393, -33.753530603],
                    [148.297371399, -33.753508596],
                    [148.297206399, -33.7534756],
                    [148.297151396, -33.753452598],
                    [148.297096402, -33.7534416],
                    [148.297040404, -33.753418598],
                    [148.296985401, -33.7533966],
                    [148.296930407, -33.753373599],
                    [148.296875404, -33.7533626],
                    [148.296765407, -33.753294599],
                    [148.296723411, -33.753260599],
                    [148.296613406, -33.753192598],
                    [148.296572422, -33.753158598],
                    [148.296530408, -33.753112595],
                    [148.296502414, -33.753067595],
                    [148.296488412, -33.753021601],
                    [148.296460408, -33.752964599],
                    [148.296432414, -33.752918596],
                    [148.296390409, -33.752838593],
                    [148.296349407, -33.752793593],
                    [148.296307411, -33.752736591],
                    [148.296265415, -33.752702591],
                    [148.296224414, -33.752668591],
                    [148.29619641, -33.752622597],
                    [148.296168416, -33.752576593],
                    [148.296154414, -33.75253059],
                    [148.296154414, -33.752485591],
                    [148.29615341, -33.752427594],
                    [148.29615341, -33.752382595],
                    [148.296166408, -33.752336592],
                    [148.296193407, -33.752290589],
                    [148.296247406, -33.752243591],
                    [148.296288408, -33.75220959],
                    [148.296343402, -33.752208595],
                    [148.296398405, -33.752197587],
                    [148.296453408, -33.752208586],
                    [148.296508402, -33.752219594],
                    [148.296563413, -33.75221859],
                    [148.296617404, -33.75221859],
                    [148.296672389, -33.752206587],
                    [148.296727401, -33.752206587],
                    [148.296782395, -33.752194593],
                    [148.296850395, -33.752182591],
                    [148.296919391, -33.752182591],
                    [148.296974394, -33.752181587],
                    [148.297084391, -33.752181587],
                    [148.297139394, -33.752192585],
                    [148.297193393, -33.75219159],
                    [148.297248387, -33.75219159],
                    [148.29730339, -33.752179588],
                    [148.297357389, -33.752133585],
                    [148.297398381, -33.752075588],
                    [148.297439383, -33.752029576],
                    [148.29747938, -33.75198359],
                    [148.297520381, -33.751948586],
                    [148.297575384, -33.751914595],
                    [148.297643376, -33.751879581],
                    [148.297725378, -33.751844586],
                    [148.297793378, -33.751821584],
                    [148.297848372, -33.75178658],
                    [148.297889373, -33.751740586],
                    [148.29791537, -33.751648588],
                    [148.29791537, -33.751602585],
                    [148.297846374, -33.751591586],
                    [148.297791362, -33.751580588],
                    [148.297722375, -33.751557586],
                    [148.297612378, -33.75153558],
                    [148.297558379, -33.751547582],
                    [148.297503376, -33.751547582],
                    [148.297448382, -33.751559585],
                    [148.297379378, -33.75156058],
                    [148.297311386, -33.75156058],
                    [148.297256383, -33.75152658],
                  ],
                ],
              ],
            },
            properties: {
              plan_number: "1170998",
              plan_type: "DP",
              parcel_type: "Lot",
              jurisdicational_id: "2/1170998",
              lot_number: "2",
              plan: "DP1170998",
              reference: "cpf17faab3dd927",
              cadastre_polygon_pid: "cpf17faab3dd927",
              is_cadastre_polygon_changed: null,
              pic: "SA349595",
              propertyId: 24556,
              cadastre_hectares: 55.682182999999995,
              property_name: "NGR 13242674",
              front_gate_address: "2170 Adelargo Road, Warraderry NSW 2810",
              owner_name: "Luke-McCabe Account",
              business_name: "FG McCabe Pty Ltd",
              phone_number: "+61417820008",
              email_address: "luke@fgmccabe.com.au",
            },
          },
          {
            type: "Feature",
            id: 74584,
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [148.2563032, -33.754086671],
                    [148.250566299, -33.753343673],
                    [148.250520305, -33.753613677],
                    [148.249986374, -33.756737687],
                    [148.255623273, -33.757500684],
                    [148.2563032, -33.754086671],
                  ],
                ],
              ],
            },
            properties: {
              plan_number: "752956",
              plan_type: "DP",
              parcel_type: "Lot",
              jurisdicational_id: "38/752956",
              lot_number: "38",
              plan: "DP752956",
              reference: "cpfe8ee85c9f39b",
              cadastre_polygon_pid: "cpfe8ee85c9f39b",
              is_cadastre_polygon_changed: null,
              pic: "SA349595",
              propertyId: 24556,
              cadastre_hectares: 20.380562,
              property_name: "NGR 13242674",
              front_gate_address: "2170 Adelargo Road, Warraderry NSW 2810",
              owner_name: "Luke-McCabe Account",
              business_name: "FG McCabe Pty Ltd",
              phone_number: "+61417820008",
              email_address: "luke@fgmccabe.com.au",
            },
          },
          {
            type: "Feature",
            id: 74585,
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [148.272312893, -33.756186664],
                    [148.272922856, -33.753107644],
                    [148.268568936, -33.752562643],
                    [148.268050987, -33.755605664],
                    [148.267995993, -33.755924665],
                    [148.272259916, -33.756455664],
                    [148.272312893, -33.756186664],
                  ],
                ],
              ],
            },
          },
        ],
      };

      // Initialize map
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/satellite-streets-v12",
        center: [148.296150542, -33.758427237], // Will be adjusted automatically
        zoom: 12, // Will be adjusted automatically
      });

      map.on("load", () => {
        map.addSource("property", {
          type: "geojson",
          data: geoJsonData,
        });

        // Add fill layer for polygons
        map.addLayer({
          id: "property-boundary-fill",
          type: "fill",
          source: "property",
          filter: ["==", "$type", "Polygon"],
          paint: {
            "fill-color": "#0080ff",
            "fill-opacity": 0.3,
          },
        });

        // Add outline layer for polygons
        map.addLayer({
          id: "property-boundary-line",
          type: "line",
          source: "property",
          filter: ["==", "$type", "Polygon"],
          paint: {
            "line-color": "#000",
            "line-width": 2,
          },
        });

        // Calculate bounds for all features
        const bounds = new mapboxgl.LngLatBounds();
        geoJsonData.features.forEach((feature) => {
          if (feature.geometry.type === "Point") {
            bounds.extend(feature.geometry.coordinates);
          } else if (feature.geometry.type === "MultiPolygon") {
            feature.geometry.coordinates[0][0].forEach((coord) => {
              bounds.extend(coord);
            });
          }
        });

        // Fit the map to the property bounds with some padding
        map.fitBounds(bounds, {
          padding: 50,
          duration: 1000, // Animation duration in milliseconds
        });
      });
    </script>
  </body>
</html>

`;
