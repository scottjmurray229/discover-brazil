// Shared destination coordinates — single source of truth
// Extracted from plan.astro geoMarkers. Used by plan page + companion app + generate-itinerary API.

export const DESTINATION_COORDS: Record<string, { lat: number; lng: number; label: string }> = {
  'rio-de-janeiro': { lat: -22.9068, lng: -43.1729, label: 'Rio de Janeiro' },
  'sao-paulo': { lat: -23.5505, lng: -46.6333, label: 'S\u00e3o Paulo' },
  salvador: { lat: -12.9714, lng: -38.5124, label: 'Salvador' },
  florianopolis: { lat: -27.5954, lng: -48.5480, label: 'Florian\u00f3polis' },
  'iguazu-falls': { lat: -25.6953, lng: -54.4367, label: 'Iguazu Falls' },
  brasilia: { lat: -15.7975, lng: -47.8919, label: 'Bras\u00edlia' },
  manaus: { lat: -3.1190, lng: -60.0217, label: 'Manaus' },
  recife: { lat: -8.0476, lng: -34.8770, label: 'Recife' },
  paraty: { lat: -23.2178, lng: -44.7131, label: 'Paraty' },
  'ouro-preto': { lat: -20.3855, lng: -43.5035, label: 'Ouro Preto' },
  jericoacoara: { lat: -2.7950, lng: -40.5138, label: 'Jericoacoara' },
  'fernando-de-noronha': { lat: -3.8547, lng: -32.4247, label: 'Fernando de Noronha' },
  bonito: { lat: -21.1261, lng: -56.4836, label: 'Bonito' },
};
