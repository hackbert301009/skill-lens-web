# Skill-Lens

Webseite der Assistenz-App **Skill-Lens**, die Menschen mit Lernschwierigkeiten in
Leichter Sprache Schritt für Schritt durch Alltagsaufgaben führt. Die Kamera bestätigt
jeden Schritt im echten Moment, komplett offline und ohne Gewinnabsicht.

Live: https://skill-lens.de

## Technik

- [Astro](https://astro.build) (statische Ausgabe)
- Tailwind CSS v4
- Eigenes, barrierefreies Design (WCAG 2.1 AA orientiert): Fokus-Ringe, Skip-Link,
  große Ziele, `prefers-reduced-motion`, No-JS-Fallback
- Schriftarten: Baloo 2 (Anzeige) und Atkinson Hyperlegible (Fließtext)

## Entwicklung

```bash
npm install
npm run dev      # lokaler Dev-Server
npm run build    # Produktions-Build nach ./dist
npm run preview  # Build lokal ansehen
```

## Hosting

Automatischer Build und Deploy nach GitHub Pages über
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) bei jedem Push auf `main`.
Die Custom-Domain wird über [`public/CNAME`](public/CNAME) gesetzt.

## Rechtliches

Impressum und Datenschutzerklärung sind unter `/impressum` und `/datenschutz` erreichbar.
Ein Projekt von Albert Heruth, siehe [hackbert.org](https://hackbert.org).
