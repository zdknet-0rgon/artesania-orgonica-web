import { IntlProvider } from 'next-intl';

export default function IntlLayout({ children, params }) {
  let locale = params?.locale || 'es';
  let messages;
  try {
    messages = require(`../messages/${locale}.json`);
  } catch {
    messages = require(`../messages/es.json`);
  }
  return <IntlProvider messages={messages}>{children}</IntlProvider>;
}
