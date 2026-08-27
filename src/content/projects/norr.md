---
title: Norr
order: 3
featured: true
coverArt: norr
coverTag: offline
meta: Elixir · TypeScript · CRDTs
desc:
  en: A conflict-free sync engine for offline-first apps. Three-way merges, ordered deltas, and a log you can replay; every device ends equal, eventually.
  es: Un motor de sincronización sin conflictos para apps offline-first. Fusiones a tres vías, deltas ordenados y un registro que puedes reproducir; todos los dispositivos terminan iguales, eventualmente.
gallery:
  - /images/projects/norr-01.svg
  - /images/projects/norr-02.svg
  - /images/projects/norr-03.svg
---

Norr lets a device that just lost its network keep editing, then reconcile with everyone else the moment it sees the network again. The interesting question is not "do merges conflict" — it's "what happens after three days of offline edits, on mobile networks, across eleven versions of the schema."

## Context

Offline-first works until two users edit the same account offline, in opposite directions, for days. Most sync engines answer that either with last-write-wins snapshots (fast, lossy) or expensive three-way merges (correct, slow). Norr is the second kind, tuned until it stopped being slow: mutations are stored as ordered deltas and replayed, so whichever device reconciles last, every device ends equal.

## Decisions

- **Deltas, not snapshots.** Every mutation appends an operation to a total order instead of rewriting full state. The log is therefore replayable: apply it to any old state and the result is deterministic.
- **Merge by ancestor.** A true three-way merge needs a common ancestor, and the ancestor is defined by the log: the last position shared by both branches. The merge falls out of the order, not out of conflict exploration.
- **A dumb server, an honest client.** The TypeScript client implements the whole protocol as one dependency-free module, so the offline path is testable in isolation; the Elixir server only stores and presents deltas with proper backpressure.

## The subtle part

Three-way merges humiliate you in production, because real-world conflicts are rarely text edits. Most of the failures came from the systems around the engine: an offline device's clock drift, a sync cut mid-playback, a schema migration arriving behind a log written by an older version. The two-way merge was the easy part.

## If I redid it

I'd separate the concern of clock drift from ordering — logical clocks for ordering, an explicit ancestor log for merges — and I'd define what "synced" means to the UI far earlier. The current API makes it too easy to treat sync as a second fetch pass, when really the fetch is just the transport for the log.