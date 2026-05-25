import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingContacts } from "@/components/FloatingContacts";
import { MobileQuoteFab } from "@/components/MobileQuoteFab";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-light tracking-tight text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-medium text-foreground">Signal lost</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for has moved off the grid.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Elektro Gorivo — Powering the Future of Mobility" },
      { name: "description", content: "Premium EV chargers and end-to-end charging solutions. Smart, fast, and engineered for the clean energy era." },
      { name: "author", content: "Elektro Gorivo" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Elektro Gorivo — Powering the Future of Mobility" },
      { name: "twitter:title", content: "Elektro Gorivo — Powering the Future of Mobility" },
      { property: "og:description", content: "Premium EV chargers and end-to-end charging solutions. Smart, fast, and engineered for the clean energy era." },
      { name: "twitter:description", content: "Premium EV chargers and end-to-end charging solutions. Smart, fast, and engineered for the clean energy era." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4b94d30e-82d0-47cb-a88e-be2706ea3382/id-preview-df9eb396--8ccbd3d6-60e4-4a71-945f-45f388facdb3.lovable.app-1778048649703.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4b94d30e-82d0-47cb-a88e-be2706ea3382/id-preview-df9eb396--8ccbd3d6-60e4-4a71-945f-45f388facdb3.lovable.app-1778048649703.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingContacts />
      <MobileQuoteFab />
    </div>
  );
}
