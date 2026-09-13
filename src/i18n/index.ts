import en from './en.json';
import zh from './zh.json';

export type Locale = 'en' | 'zh';
export type Dict = typeof en;

const dicts: Record<Locale, Dict> = { en, zh: zh as Dict };

export function t(locale: Locale): Dict {
  return dicts[locale];
}

/** Path prefix for a locale: '' for the default English site, '/zh' for Chinese. */
export function prefix(locale: Locale): string {
  return locale === 'en' ? '' : '/zh';
}

export function href(locale: Locale, path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${prefix(locale)}${p}`;
}

export const REPO = 'https://github.com/Cookiezisg/Anselm';
export const DOCS = `${REPO}/tree/main/docs`;
export const ARCHITECTURE = `${REPO}/blob/main/docs/concepts/architecture.md`;
export const RELEASES = `${REPO}/releases`;
export const LICENSE = `${REPO}/blob/main/LICENSE`;
