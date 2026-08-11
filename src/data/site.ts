import type Icon from '../components/Icon.astro';

type IconName = Parameters<typeof Icon>[0]['name'];

export const steps: { n: string; icon: IconName; title: string; text: string }[] = [
  { n: '1', icon: 'tap', title: 'Aufgabe wählen', text: 'Große Kacheln mit Bild und Name. Zum Beispiel Hände waschen oder Tisch decken.' },
  { n: '2', icon: 'camera', title: 'Schritt für Schritt', text: 'Die App sagt und zeigt, was zu tun ist. Die Kamera schaut mit und prüft jeden Schritt.' },
  { n: '3', icon: 'star', title: 'Geschafft und gelobt', text: 'Nach jedem Schritt gibt es Lob. Am Ende gibt es einen Sticker zum Sammeln.' },
];

export const detectFlow: { icon: IconName; title: string; text: string; tone: 'brand' | 'grass' | 'sun' }[] = [
  { icon: 'detect', title: 'Kamera schaut hin', text: 'Die Kamera sucht den Gegenstand für diesen Schritt.', tone: 'brand' },
  { icon: 'lens', title: 'Gegenstand erkannt', text: 'Zum Beispiel die Seife. Die App führt ruhig weiter.', tone: 'grass' },
  { icon: 'star', title: 'Geschafft', text: 'Es gibt Lob und einen Sticker. Ohne Druck, ohne Vergleich.', tone: 'sun' },
];

export const features: { icon: IconName; title: string; text: string }[] = [
  { icon: 'camera', title: 'Kamera-Hilfe', text: 'Objekterkennung direkt auf dem Gerät bestätigt jeden Schritt im echten Moment. Keine passive Checkliste.' },
  { icon: 'voice', title: 'Leichte Sprache und Vorlesen', text: 'Jede Anweisung in einfacher Sprache, laut vorgelesen. Stimme und Tempo lassen sich einstellen.' },
  { icon: 'steps', title: 'Schritt für Schritt', text: 'Ruhige Führung mit Overlay und sanften Hinweisen statt Fehlermeldungen.' },
  { icon: 'star', title: 'Sticker ohne Wettbewerb', text: 'Belohnung nur für dich, ohne Vergleich mit anderen.' },
  { icon: 'people', title: 'Mehrere Personen, ein Gerät', text: 'Eigene Profile mit eigenem Fortschritt, Stickern und Berichten. Ideal für ein gemeinsames Tablet.' },
  { icon: 'pin', title: 'Betreuer-Modus mit PIN', text: 'Ein geschützter Bereich für Betreuende. Die PIN wird sicher verschlüsselt gespeichert.' },
  { icon: 'pencil', title: 'Eigene Aufgaben', text: 'Neue Aufgaben selbst anlegen, mit Referenzfoto und eigenem Sprachbefehl.' },
  { icon: 'report', title: 'Berichte als PDF', text: 'Auswertungen zum Fortschritt für Eltern, Einrichtung und Kostenträger.' },
  { icon: 'offline', title: 'Offline und privat', text: 'Fotos und Daten bleiben auf dem Gerät. Keine Cloud, kein Konto.' },
  { icon: 'routine', title: 'Routinen und Tagebuch', text: 'Aufgaben zu Routinen verketten und Erfolge über die Zeit festhalten.' },
];

export const tasks = [
  { emoji: '🧼', name: 'Hände waschen', meta: '4 Schritte · ca. 6 Min.', cat: 'Bad & Körperpflege' },
  { emoji: '🍽️', name: 'Tisch decken', meta: '3 Schritte · ca. 5 Min.', cat: 'Küche' },
  { emoji: '☕', name: 'Kaffee machen', meta: '3 Schritte · ca. 8 Min.', cat: 'Küche' },
  { emoji: '📷', name: 'Eigene Aufgabe', meta: 'Selbst einlernen', cat: 'Unterwegs & Üben' },
];

export const editions = [
  {
    name: 'Lokal',
    price: '0 €',
    tag: 'Gratis, für immer',
    tone: 'grass' as const,
    lead: 'Alles bleibt auf dem Gerät. Komplett privat, ohne Konto.',
    items: [
      'Alle Kernfunktionen: Kamera-Hilfe, Leichte Sprache, Vorlesen, Berichte',
      'Läuft offline, Daten nur auf dem Gerät',
      'Aufgaben teilen von Hand per QR oder Datei',
    ],
    note: 'Kein Geräte-Abgleich, keine Web-Konsole. Berichte je Gerät getrennt.',
  },
  {
    name: 'Cloud',
    price: 'Nur Selbstkosten',
    tag: 'Ohne Gewinn',
    tone: 'brand' as const,
    lead: 'Alles aus der lokalen Version, plus zentrale Verwaltung.',
    items: [
      'Mehrere Geräte automatisch synchron',
      'Web-Konsole im Browser für Personen, Aufgaben und Berichte',
      'EU-Server, verschlüsselt',
    ],
    note: 'Server und Betrieb werden 1:1 weitergegeben. Kein Aufschlag, kein Gewinn. Die Web-Konsole ist ein Gestaltungsentwurf.',
  },
];
