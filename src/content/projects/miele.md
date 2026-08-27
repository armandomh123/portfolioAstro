---
title: Miele
order: 4
featured: true
coverArt: miele
coverTag: mission
meta: Rust · Postgres · 2022
desc:
  en: 'The double-entry ledger behind a small bank. Audited, boring, and fast: every entry traceable, every balance convertible in constant time.'
  es: 'El libro mayor de partida doble detrás de un pequeño banco. Auditado, aburrido y rápido: cada asiento trazable, cada saldo convertible en tiempo constante.'
gallery:
  - /images/projects/miele-01.svg
  - /images/projects/miele-02.svg
  - /images/projects/miele-03.svg
---

Miele is the double-entry ledger under a small bank. "Double-entry" is not a metaphor: every movement posts to two accounts or it doesn't happen, and an auditor must be able to walk from any balance back to the money that made it. The design constraint was that the ledger must never be surprising.

## Context

The bank's previous books lived in a hand-maintained era: correct, but only because a human re-checked everything at month's end. The new core had to be auditable by construction — an entry traceable from any balance — without slowing a machine that posts thousands of entries a day.

## Decisions

- **Entries are the only writes.** Accounts are projections, not sources of truth. Write a double-entry posting, then derive balances. "Convertible in constant time" is a promise kept by making conversion a materialized projection, not a recount.
- **Postgres as the ledger spine.** The engine is Rust, but Postgres carries the source of truth: a plain entries table whose invariants are enforced in a single write transaction. No ORM, no stored procedures; the rules live in the schema and one migration file.
- **Audit as a feature.** Every entry keeps provenance — who, when, which batch — so walking a balance back to its source is a single lookup. That is what makes the "boring" claim on the cover defensible: surprises are a bug.

## The subtle part

The tension was between a ledger that must never be re-ranked and a product that must reconcile balances daily. Accounting systems are the only place where an `UPDATE` is treated like vandalism. The team spent weeks making every write path prove a recounted set of invariants before letting the operation move money.

## If I redid it

I'd ship the "why can I trust this number" feature on day one instead of after the core, and I'd keep every maintenance hook outside the ledger so the spine stays frozen and the growth lives in tooling.