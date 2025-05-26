export function renderSecret() {
  return `
    <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Super Secret</title>
    </head>
    <style>
      body {
        text-align: center;
        background-color: #f0f0f0;
        font-family: Arial, sans-serif;
      }
      .twitter-tweet{
      margin: 20px auto;
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
        <h1>NEW YE SONG!</h1>
        <blockquote class="twitter-tweet" data-media-max-width="560"><a href="https://twitter.com/nexta_tv/status/1920374131263979566?ref_src=twsrc%5Etfw">Ye Song</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
        <br>      
        <a href="/">
          <button class="button">Zurück zur Startseite</button>
        </a>
         
      </body>
    </html>
    `;
}
