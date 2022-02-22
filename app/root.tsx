import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import { getCssText } from "~/stiches.config";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export const links: LinksFunction = () => [
  /**
   * CSS Reset
   * @see https://github.com/hankchizljaw/modern-css-reset
   */
  {
    rel: "preconnect",
    href: "https://cdn.jsdelivr.net",
  },
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/modern-css-reset/dist/reset.min.css",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <style
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
