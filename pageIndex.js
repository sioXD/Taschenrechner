export function renderIndex(result, history, user) {
  return `
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mathematischer Super Rechner</title>
<style>
      body {
        text-align: center;
        background-color: #f0f0f0;
        font-family: Arial, sans-serif;
      }


      .button {
      transition-duration: 0.4s;
      border-radius: 12px;
      padding: 5px 10px;
      cursor: pointer;

    }

    .button:hover {
      background-color:rgb(0, 0, 0); 
      color: white;
    }
    
    .login {
    color: #4CAF50;
    margin-left: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .login:hover {
      background-color: #4CAF50;
      color: white;
    }

    .history {
      text-align: left;
      margin: 0 auto;
      margin-top: 10px;
      width: 450px;
      height: 200px;
      overflow-y: scroll;
      border: 1px solid #ccc;
      padding: 10px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    .cookie {
      margin-top: 20px;
    }

    @media (max-width: 600px) {
      input{
        width: 30%;
        max-width: 300px;
      }
      select {
        width: 20%;
        max-width: 300px;
      }

      .button {
        width: 80%;
        max-width: 300px;
        margin-top: 20px;
      }

      form {
        flex-direction: column;
        align-items: center;
      }
      .history {
        width: 90%;
        max-width: 300px;
      }

      .login {
        margin-left: 0;
        margin-top: 10px;
      }
    }     
    </style>
    </head>
      <body>
        <h1>Mathematischer Super Rechner</h1>
        <form action="/" method="post">
          <input type="text" name="one" required>
          <select name="operator" required>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select> 
          <input type="text" name="two" required>
          <button class="button" type="submit">Berechnen</button>
        </form>
        <div> Ergebnis: ${result} <br> <br> 
        History: <br>
        <div class="history">
        ${history.join("")} </div>
        </div>
        <br>
        <div class="cookie">
        Nutzer: ${user}

        <button class="button login" onclick="window.location.href='/login'">Change Username</button>
          
        </div>
      </body>
    </html>
  `;
}
