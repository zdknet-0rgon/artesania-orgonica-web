import { IntlProvider } from 'next-intl';
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  params?: { locale?: string };
}

export default function IntlLayout({ children, params }: Props) {
  let locale = params?.locale || 'es';
  let messages;
  try {
    messages = require(`../messages/${locale}.json`);
  } catch {
    messages = require(`../messages/es.json`);
  }
  return <IntlProvider messages={messages}>{children}</IntlProvider>;
}
