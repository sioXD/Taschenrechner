export function renderLogin(login, allLogins) {
  return `
    <html>
      <head>
        <title>Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            text-align: center;
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
          }
          form {
            display: inline-block;
            margin-top: 20px;
          }
          input[type="text"] {
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
          }
          button {
            padding: 10px 15px;
            border-radius: 5px;
            border: none;
            background-color: #28a745;
            color: white;
            cursor: pointer;
          }
          button:hover {
            background-color: #218838;
          }

          .allLogin {
            text-align: left;
            margin: 0 auto;
            width: 450px;
            height: 300px;
            overflow-y: scroll;
            border: 1px solid #ccc;
            padding: 10px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }

          @media (max-width: 400px) {
            form {
              padding: 15px;
            }

            button {
              font-size: 14px;
            }
          }
        </style>
      </head>
      <body>
        <h1>Login</h1>
        <form action="/login" method="post">
          <input type="text" name="username" placeholder="Username">
          <button type="submit">Login</button>
        </form>
        <div class="error-message" style="color: red; margin-top: 10px;">
          ${login === "false" ? "Bitte geben Sie einen Benutzernamen ein." : ""}
        </div>
       
        
        ${allLogins.length === 0 ? "" : "<h2>Alle Benutzer:</h2>"}
        <div class="allLogin" style="margin-top: 20px; ${
          allLogins.length === 0 ? "display: none;" : ""
        }">
        
          <ul>
            ${allLogins.map((item) => `${item}<br>`).join("")}
          </ul>
        </div>
      </body>
    </html>
  `;
}
