---
title: Garza
order: 1
featured: true
coverArt: vera
coverTag: mission
meta: Laravel · Filament · Livewire
desc:
  en: 'A web administration system for a water filling station: metered dispensing records, valve schedules enforced in hardware, device telemetry, and card payments. — Internship at SITEHASA (Automation & Control).'
  es: 'Un sistema web de administración para una garza de llenado de agua: registros de despacho medidos, horarios de válvula aplicados en hardware, telemetría del dispositivo y pagos con tarjeta. — Estadías en SITEHASA (Automatización y Control).'
gallery:
  - /images/projects/garza-01.webp
  - /images/projects/garza-02.webp
  - /images/projects/garza-03.webp
  - /images/projects/garza-04.webp
  - /images/projects/garza-05.webp
---

Garza is the administration system for a water filling station: every dispatch is metered, priced, and recorded, and the station itself is a small IoT device that has to obey the office. The web panel is where the operator sees volume moved, revenue, and whether the hardware is healthy — without walking to the station.

> **Estadías profesionales / Internship — SITEHASA · Depto. de Automatización y Control.** Proyecto desarrollado durante mis estadías en **SITEHASA** en colaboración con el departamento de Automatización y Control.
> *Internship project carried out at **SITEHASA** in collaboration with the Automation and Control department.*

## Context

The station dispenses water by the cubic meter through several valves, charged per unit. Before the system, dispatches were logged by hand and the valve schedule lived in whoever opened the station that morning. The goal was a single source of truth: what was dispensed, when, through which valve, and for how much.

## What it does

- **Dispatch ledger.** Every dispensing session is recorded with its valve, start and end time, and volume in m³. Records are searchable, editable, filterable, and exportable; each one carries its payment intent so a dispatch always reconciles with a charge.
- **Operation rules in hardware.** The valve operating schedule (open and close hours) is enforced by the device itself, not just the UI. An attempt outside the schedule is blocked even if the panel is unreachable.
- **Device telemetry.** The panel shows the station's operating state, signal quality (RSSI), and supply voltage as reported by the board, plus an alarms and events feed for anything that goes wrong.
- **Demand analytics.** The dashboard aggregates volume per month and demand by hour of day, so the operator can see peak filling times at a glance.

## The subtle part

The hard part was not the CRUD; it was the boundary between the web and the device. Schedules, pricing, and records live server-side, but enforcement has to survive offline. The compromise: the panel is authoritative for configuration, the device is authoritative for execution, and every alarm the board reports is treated as evidence rather than noise.
