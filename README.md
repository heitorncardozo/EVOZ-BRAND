# EVOZ Landing Page

Landing page inspirada na identidade visual EVOZ, com animacoes suaves e formulario de leads integrado ao Notion.

## Requisitos

- Node.js 18+
- Integracao de um database no Notion com as propriedades:
  - `Nome` (Title)
  - `Email` (Email)
  - `Empresa` (Rich text)
  - `Mensagem` (Rich text)
  - `Origem` (Rich text)

## Configuracao

1. Copie o arquivo de exemplo:
   - PowerShell: `Copy-Item .env.example .env`
2. Preencha `NOTION_TOKEN` e `NOTION_DATABASE_ID` no `.env`
3. Instale e rode:
   - `npm install`
   - `npm run dev`

Abra `http://localhost:3000`.
