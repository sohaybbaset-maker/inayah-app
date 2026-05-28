# عناية – Car Concierge MVP

A premium Arabic-first RTL car concierge service platform for Saudi Arabia.

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

### CLI
```bash
npm i -g vercel
vercel
```

### Dashboard
1. Push to GitHub
2. Import at vercel.com/new
3. Click Deploy — no configuration needed

## Environment Variables

None required for MVP. For backend integration:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=966500000000
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/request` | Service request form |
| `/admin` | Admin dashboard (mock, no auth) |

## Recommended Backend

**Supabase** is the fastest path to production — replace the `console.log` in `ServiceRequestForm.tsx` with a Supabase insert and load `AdminDashboard.tsx` from a Supabase query.
