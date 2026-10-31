# Estillus Gato — protótipo conceitual (DiamondDev)

Landing page one-page em Next.js (App Router) + TypeScript + Tailwind CSS.
**Projeto conceitual. Não é o site oficial da Estillus Gato.** (`robots: noindex, nofollow`)

## Rodar
```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```
Requer internet na primeira execução/build (`next/font/google` baixa Montserrat e Inter).

## Estrutura
```
app/            layout.tsx (fontes, metadata noindex), page.tsx, globals.css (tokens CSS + hero)
components/     AnnouncementBar, Header, Hero, StyleCategories, EditorialBanner,
                BrandHighlights, LookGallery, StoreLocation, Footer, ui (Button/TextLink/SectionTitle), icons
lib/            site.ts (links, endereço, imagens), fonts.ts
public/assets/
  identidade/logo_fundo_externo_transparente_1500px.png
  hero/modelo_estillus_gato_TRANSPARENTE.png (+ .webp)
  looks/look_0X_*_2x.webp   (cópia fiel)
  looks/look_0X_*_crop.webp (mesma imagem sem o ícone de vídeo do Instagram — usadas no site)
```

## Trocar imagens
Edite `lib/site.ts` (`LOOKS`) apontando para fotos licenciadas (proporção ≈ 4:5).
A foto da fachada da loja ainda não existe: `StoreLocation.tsx` mostra painel com a marca e um aviso de espaço reservado.

## Notas
- As imagens de looks são recortes ampliados de prints; substituir antes de uso comercial.
- Sem catálogo, preços, carrinho, login, depoimentos ou promessas comerciais.
