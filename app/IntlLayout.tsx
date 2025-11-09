import { NextIntlProvider } from 'next-intl';

export default function IntlLayout({ children, params }) {
  let locale = params?.locale || 'es';
  let messages;
  try {
    messages = require(`../messages/${locale}.json`);
  } catch {
    messages = require(`../messages/es.json`);
  }
  return <NextIntlProvider messages={messages}>{children}</NextIntlProvider>;
}