export function renderLogin(login) {
  return `
    <html>
      <head>
        <title>Login</title>
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
      </body>
    </html>
  `;
}
