export function renderEE() {
  return `
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Easter Egg</title>
    </head>
    <style>
      body {
        text-align: center;
        background-color: #f0f0f0;
        font-family: Arial, sans-serif;
      }
        iframe {
      margin: 20px;
      }

      .button {
      transition-duration: 0.4s;
      border-radius: 12px;
      padding: 10px 20px;
      cursor: pointer;

    }

    .button:hover {
      background-color:rgb(0, 0, 0); 
      color: white;
    }
     
      @media (max-width: 600px) {
    .button {
      width: 100%;
      max-width: 300px;
    }
  }


    </style>
      <body>
        <h1>Das ist ein Easter Egg!</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="" frameBorder="0"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>  <br>      
      
        <a href="/">
          <button class="button">Zurück zur Startseite</button> 
        </a>
        
      </body>
    </html>
    `;
}
