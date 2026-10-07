# Next.js Dashboard Learning Project

This is my learning project for [Next.js](https://nextjs.org/). I built it while following the [Next.js Learn dashboard course](https://nextjs.org/learn/dashboard-app), using the course as a guide and adapting parts of the app as I explored the framework.

The project is a small invoicing dashboard built with the Next.js App Router, React, TypeScript, Tailwind CSS, and PostgreSQL. It is intended for learning and experimentation, not as a production-ready application.

## What the project includes

- A responsive dashboard with revenue, invoice, and customer summaries
- Invoice and customer tables with database-backed search
- Debounced invoice search and pagination
- A page to create invoices, backed by a Server Action
- PostgreSQL queries and demo data based on the course project

## Differences and personal additions

Most of the app follows the course's dashboard project. These are the clearest additions I made beyond its core walkthrough:

- **More interactive search:** the magnifying-glass icon focuses the search field, and an `X` button clears the search. Search updates are debounced and reset pagination to the first page.
- **Dedicated database handling:** PostgreSQL connection setup lives in `app/lib/db.ts`, which exports the shared SQL client used by the invoice Server Action.
- **Delete Invoice confirm dialog:** A custom confirm dialog is used to ensure confirmation when a invoice is deleted.

## Getting started

### Requirements

- Node.js
- [pnpm](https://pnpm.io/)
- A PostgreSQL database

### Install dependencies

```bash
pnpm install
```

### Configure the database

Create a `.env.local` file in the project root and set `POSTGRES_URL` to your PostgreSQL connection string:

```env
POSTGRES_URL=your_postgres_connection_string
```

The database connection uses SSL. For the course's hosted database setup and details about the other environment variables, see the [database setup guide](https://nextjs.org/learn/dashboard-app/setting-up-your-database).

With the app running locally, visit `http://localhost:3000/seed` once to create and populate the demo tables. This endpoint is intended for local learning and development.

### Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
