/**
 * Shared video map for destination cards.
 * Maps destination slugs to video file paths (preview preferred, hero as fallback).
 * Used by: src/pages/index.astro, src/pages/destinations/index.astro
 */
export const destinationVideoMap: Record<string, string> = {
  'rio-de-janeiro': '',
  'sao-paulo': '',
  salvador: '',
  florianopolis: '',
  'iguazu-falls': '',
  brasilia: '',
  manaus: '',
  recife: '',
  paraty: '',
  'ouro-preto': '',
  jericoacoara: '',
  'fernando-de-noronha': '',
  bonito: '',
} as const;
