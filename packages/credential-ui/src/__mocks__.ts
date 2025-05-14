export const NGR = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NGR Details</title>
    <style>
      body {
        margin: 0;
        background: #f0f0f0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .card {
        width: 85.6mm;
        /* Standard credit card width */
        height: 53.98mm;
        /* Standard credit card height */
        background: linear-gradient(135deg, #9a3423 0%, #c44d3d 100%);
        border-radius: 10px;
        padding: 20px;
        box-sizing: border-box;
        color: white;
        position: relative;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      .card-content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }

      .logo {
        width: 80px;
        height: auto;
        margin-bottom: 8px;
      }

      .logo img {
        width: 100%;
        height: auto;
        display: block;
      }

      .card-footer {
        margin-top: auto;
      }

      .ngr-number {
        font-family: "Courier New", monospace;
        font-size: 1.25rem;
        letter-spacing: 1.5px;
        margin-bottom: 4px;
        font-weight: 500;
      }

      .ngr-label {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        opacity: 0.8;
      }

      .hologram {
        position: absolute;
        right: 20px;
        bottom: 20px;
        width: 40px;
        height: 40px;
        background: radial-gradient(
          circle at center,
          rgba(255, 255, 255, 0.8) 0%,
          rgba(255, 255, 255, 0.4) 50%,
          rgba(255, 255, 255, 0.2) 100%
        );
        border-radius: 50%;
        opacity: 0.6;
      }
    </style>
  </head>

  <body>
    <div class="card">
      <div class="card-content">
        <div class="card-header">
          <div class="logo">
            <img
              src="https://imagedelivery.net/KrqWw3MfFI3Up2T0vHiP1g/7cf4d90f-00c0-4d92-5fd5-973c85e92200/public"
              alt="NGR Logo"
            />
          </div>
        </div>
        <div class="card-footer">
          <div class="ngr-number">13242674</div>
          <div class="ngr-label">Luke-McCabe Account</div>
        </div>
      </div>
      <div class="hologram"></div>
    </div>
  </body>
</html>
`;
