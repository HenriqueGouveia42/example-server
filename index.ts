import express from "express" 
import { Request, Response } from "express"

const app = express();

const PORT = 3000;

export function buildHtml(title: string, message: string): string { 
    return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>API Express + TS</title>
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          font-family: system-ui, -apple-system, sans-serif;
          background-color: #0f172a;
          color: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
        .container {
          background-color: #1e293b;
          padding: 3rem;
          border-radius: 12px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
          text-align: center;
          border: 1px solid #334155;
        }
        h1 { color: #38bdf8; margin-bottom: 1rem; }
        p { color: #cbd5e1; line-height: 1.5; }
        .badge {
          display: inline-block;
          margin-top: 1.5rem;
          padding: 0.5rem 1rem;
          background-color: #312e81;
          color: #a5b4fc;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>${title}</h1>
        <p>${message}</p>
        <div class="badge">Status: Ativo</div>
      </div>
    </body>
    </html>
  `;
}

app.get('/', (req: Request, res: Response) => {
    const htmlResponse: string = buildHtml("Rota base", "Rota Base Funcionando!");
    res.send(htmlResponse);
})

app.get('/seal', (req: Request, res: Response) => {
    const htmlResponse: string = buildHtml("Rota SEAL", "Rota SEAL funcionando!");
    res.send(htmlResponse)
})

app.listen(PORT, () => {
    console.log("API em execução");
    console.log(`Acesse a API em http://localhost:${PORT}\n`);
})