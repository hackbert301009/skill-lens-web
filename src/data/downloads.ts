// ──────────────────────────────────────────────────────────────
// Öffentlicher Download-Zähler
//
// Die APKs liegen als Anhänge an GitHub-Releases. GitHub zählt jeden Abruf
// serverseitig und veröffentlicht den Stand über die offene API
// (assets[].download_count). Die Zahl ist damit für alle einsehbar und von
// Besuchenden nicht manipulierbar — anders als ein Zähler im Browser-Speicher
// oder ein freier Counter-Dienst, bei dem jeder hochzählen könnte.
//
// Ablauf: Beim Bauen der Seite wird der Stand geholt und fest in die Seite
// geschrieben (funktioniert auch ohne JavaScript). Im Browser wird derselbe
// Wert danach einmal live nachgeladen, damit er zwischen zwei Deploys aktuell
// bleibt. Zusätzlich baut GitHub Actions die Seite täglich neu.
// ──────────────────────────────────────────────────────────────

export const OWNER = 'hackbert301009';
export const REPO = 'skill-lens-web';

/** Öffentliche, ohne Token lesbare Release-Liste inkl. download_count je Anhang. */
export const RELEASES_API = `https://api.github.com/repos/${OWNER}/${REPO}/releases?per_page=100`;

/** Menschlich lesbare Quelle zum Nachprüfen. */
export const RELEASES_URL = `https://github.com/${OWNER}/${REPO}/releases`;

/**
 * Stand, ab dem weitergezählt wird: 104 Downloads am 29.09.2026.
 * GitHub selbst kannte zu diesem Zeitpunkt erst BASELINE_SNAPSHOT Abrufe
 * (frühere Downloads liefen über andere Wege). Angezeigt wird deshalb
 * BASELINE + (aktueller GitHub-Stand − BASELINE_SNAPSHOT).
 */
export const BASELINE = 104;
export const BASELINE_SNAPSHOT = 21;

interface ReleaseAsset { name: string; download_count: number }
interface Release { assets?: ReleaseAsset[] }

/** Summiert die Abrufe aller APK-Anhänge über alle Releases. */
export function sumApkDownloads(releases: unknown): number {
  if (!Array.isArray(releases)) return 0;
  let total = 0;
  for (const release of releases as Release[]) {
    for (const asset of release?.assets ?? []) {
      if (typeof asset?.name === 'string' && asset.name.endsWith('.apk') && Number.isFinite(asset.download_count)) {
        total += asset.download_count;
      }
    }
  }
  return total;
}

/** Rechnet den GitHub-Rohwert auf die angezeigte Zahl um. Fällt nie unter BASELINE. */
export function toDisplayCount(rawGithubTotal: number): number {
  return BASELINE + Math.max(0, rawGithubTotal - BASELINE_SNAPSHOT);
}

export function formatCount(n: number): string {
  return new Intl.NumberFormat('de-DE').format(n);
}

let cached: Promise<number> | null = null;

/**
 * Holt den Stand beim Bauen der Seite. Ist GitHub nicht erreichbar oder das
 * Limit für anonyme Abrufe erschöpft, wird der Basiswert ausgeliefert — die
 * Seite baut also immer durch, und der Browser korrigiert die Zahl danach live.
 */
export function fetchDownloadCount(): Promise<number> {
  cached ??= (async () => {
    try {
      const res = await fetch(RELEASES_API, {
        headers: { Accept: 'application/vnd.github+json', 'User-Agent': `${REPO}-build` },
        signal: AbortSignal.timeout(10_000),
      });
      if (!res.ok) throw new Error(`GitHub API antwortete mit ${res.status}`);
      return toDisplayCount(sumApkDownloads(await res.json()));
    } catch (err) {
      console.warn('[downloads] GitHub-Stand nicht abrufbar, Basiswert wird verwendet:', err);
      return BASELINE;
    }
  })();
  return cached;
}
