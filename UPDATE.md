# Update history

Newest first. Every change to the project is recorded here.

---

## 2026-11-03 — v1.1.0: Enterprise UI/UX, motion & 3D

### Design system (light theme)
- New premium **light** theme in `client/src/index.css`: soft aurora page background, glass surfaces (`glass`),
  layered shadows (`shadow-soft` / `shadow-lift` / `shadow-glow`), gradient tokens (`bg-brand-gradient`,
  `text-gradient`), shimmer skeletons, chips, eyebrows, `kbd`, grid backdrop. Everything still follows the
  admin-configurable brand colour.
- Self-hosted variable fonts: Inter (UI) + Plus Jakarta Sans (headings) via `@fontsource-variable`.
- Full `prefers-reduced-motion` support (CSS + `MotionConfig reducedMotion="user"`); 3D is skipped on
  reduced-motion, data-saver, low-memory or no-WebGL devices.

### Motion & 3D
- `components/motion.tsx`: Reveal, Stagger, pointer-tracking 3D **Tilt** with glare, Magnetic buttons, CountUp,
  ScrollProgress, Parallax, Marquee, Aurora.
- `components/three/HeroScene.tsx`: real-time WebGL hero (React Three Fiber) — glass orb with refraction,
  wellness cross, two-tone capsules, vitamin beads, pointer-parallax rig, local lightformers (no HDR download),
  paused when off-screen.
- `components/three/ProductViewer3D.tsx`: **“View in 3D”** on product pages — drag-to-rotate, auto-turntable,
  zoom, product photo mapped onto a 3D pack.
- three.js and recharts are now loaded only by the lazy routes that need them (previously recharts was
  preloaded on every storefront page).

### New features
- **Command palette** (Ctrl/⌘+K or `/`): live product & category search, recent searches, page navigation,
  admin page jump; full keyboard support.
- **Mini cart drawer** on add-to-cart with free-delivery progress bar, quantity edit and savings.
- **Quick view** modal from any product card.
- **Product comparison** (up to 4): floating compare tray + `/compare` page with spec matrix, best-value
  highlights and “differences only” toggle.
- Product page: animated gallery, sticky buy bar once the buy box scrolls away, compare action.
- Listing page: removable active-filter chips, animated filter drawer, refined header.
- Home: 3D hero with live store stats, benefits marquee, swipeable 3D promo carousel, balanced category bento,
  today's-deals countdown, “why choose us” parallax section.
- Redesigned header (condenses on scroll, animated category pills), light footer with newsletter card,
  floating mobile bottom nav, back-to-top, PWA web manifest, OG meta.
- Admin: light glass sidebar with animated active indicator, top bar with breadcrumbs + Ctrl+K jump, animated
  KPI cards with trend pills, route transitions, per-page error boundary.
- Auth pages: split-screen layout with animated brand panel. New 404 page.

### Backend (`server/`)
- `GET /api/public/stats` — cached (5 min) public store metrics for the hero (products, categories, brands,
  customers, delivered orders, average rating, review count). The UI shows only non-zero metrics.
- `GET /api/catalog/home` categories now include active product counts.

### Fixes
- **Crash fix:** `ScrollToTop` returned the result of `window.scrollTo` from `useEffect`, which crashed the whole
  app to a blank page in some browsers. Added an app-level and admin-level error boundary.

### Verification
- `tsc --noEmit` passes on client and server; `vite build` succeeds.
- Browser smoke test of 12 storefront routes with zero runtime errors; command palette, cart drawer, quick view,
  compare flow and 3D viewer exercised interactively.

---

## 2026-11-03 — v1.0.0: Full platform completed

### Backend (`server/`)
- Node + Express 5 + TypeScript + Prisma on NeonDB. Initial migration `20261103000000_init` applied and seeded
  (super admin, CMS pages, FAQs, 12 demo products, banners, `WELCOME10` coupon).
- Modules: auth (JWT + rotating refresh cookie, OTP login, verification, password reset), catalog (filters,
  facets, suggest, similar, also-bought), cart/wishlist/addresses/reviews, orders (atomic stock reservation,
  coupons, partner commission, cancel/return, GST invoice), payments (Razorpay, Cashfree, PhonePe v2, PayU,
  CCAvenue, Stripe, COD), shipping (Shiprocket, Delhivery, Ekart, Manual), notifications (SMTP, Resend,
  SendGrid, Brevo, Mailgun / MSG91, Fast2SMS, Twilio with fallback), admin analytics + CRUD, background jobs.
- **Fix:** Prisma interactive-transaction timeout raised (5s → 30s) because the remote Neon region made order
  placement exceed the default and fail.
- **Fix:** deleting a record that is still referenced (e.g. a partner with commissions) now returns a clear 409
  message instead of a 500.

### Frontend (`client/`)
- React 19 + Vite 7 + TypeScript + Tailwind v4 + TanStack Query + Zustand + Recharts.
- Storefront, account area, checkout with all gateways, printable GST invoice, and the complete admin panel.
- Responsive with a mobile bottom nav, filter drawer, sticky checkout bar and side menu.

### Verification
- `tsc --noEmit` passes on server and client; `vite build` succeeds.
- End-to-end API test against the Neon DB: **26/26 passed** (catalog, search, register, address, cart, coupon,
  admin login + RBAC, partner, COD order, manual shipment → SHIPPED, delivered → COD paid + commission approved,
  invoice, verified review, dashboard analytics, CSV export, integrations, cancel → restock). Test data was
  removed afterwards.

### Known limitations / next steps
- Ekart direct API: endpoints follow Ekart's merchant contract but must be checked against the docs Ekart
  shares with your account (or use Ekart through Shiprocket).
- Real gateway, courier, email and SMS calls need live/sandbox keys to be tested; code paths are in place.
- Product variants (size/colour), GST e-invoicing, PWA/push notifications and multi-warehouse are backlog items.
