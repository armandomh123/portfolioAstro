---
title: CAT
order: 2
featured: true
coverArt: vera
coverTag: mission
meta: HTML · CSS · JavaScript · PHP
desc:
  en: 'School project — Technical support center where clients, technicians and admins resolve tickets. Role-based workflows, ticket lifecycle tracking and live administration.'
  es: 'Proyecto escolar — Centro de asistencia técnica donde clientes, técnicos y administradores resuelven incidencias. Flujos por rol, ciclo de vida de tickets y administración en tiempo real.'
gallery:
  - /images/projects/cat-01.webp
  - /images/projects/cat-02.webp
  - /images/projects/cat-03.webp
  - /images/projects/cat-04.webp
  - /images/projects/cat-05.webp
  - /images/projects/cat-06.webp
  - /images/projects/cat-07.webp
  - /images/projects/cat-08.webp
---

> **Proyecto escolar / School project.** Desarrollado como parte de la curriculum académica.

CAT (Centro de Asistencia Técnica) — Mazatlán Technologies — is a ticket-based support platform where three roles collaborate to close incidents: clients who report problems, technicians who take and resolve them, and administrators who oversee the whole operation. Built with vanilla HTML, CSS, JavaScript and PHP, without a framework.

## Context

Before CAT, requests arrived unstructured and follow-up depended on who was asked. The goal was a single ticketing flow with clear ownership: one active report at a time per technician, visible state (abierto / en proceso / cerrado), and metrics that let management see where time is spent.

## What it does

- **Role-aware access.** Login (`cat-01`) gates the app by role. An admin sees Dashboard, Usuarios, Empleados, Problemas, Inventario, Proveedores, Tickets, Encuestas and Permisos; a technician only sees Dashboard, Problemas and Mesa de trabajo. The sidebar and routes are filtered by the permission matrix.
- **Admin command center.** The admin dashboard (`cat-02`) aggregates KPIs: tickets abiertos, en proceso, del mes, tiempo promedio por ticket and satisfaction from surveys, plus a Top Técnicos ranking configurable by ticket count and evaluation period.
- **User management.** Gestión de Usuarios (`cat-03`) lists identity, contact, role and state with search, role/status/date filters, pagination, inline actions (edit / lock / delete) and Excel export. Supports Cliente, Técnico, Administrador and Supervisor.
- **Permission hierarchy.** Gestión de Permisos (`cat-04`) is a module × role matrix (Administrador protegido, Operador and Técnico editables). Toggles apply in real time: disabling a module hides its navigation entry and dashboard widget for that profile. Hierarchy: changes only affect lower-ranked roles.
- **Account & security.** Profile (`cat-05`) exposes Datos Personales, contact info and read-only username, while Seguridad (`cat-06`) requires current password and enforces a new password policy (min. 10 chars, uppercase + number) with confirmation by email — the password does not change until the link in the email is confirmed.
- **Technician workflow.** The technician dashboard (`cat-07`) shows personal stats (tickets cerrados, en proceso, tiempo promedio, satisfacción), and a Reportes Entrantes queue (Sin asignar). Business rule: a technician can only hold one active report — "Ya tienes un reporte activo en proceso. Debes cerrar tu reporte actual antes de poder tomar uno nuevo."
- **Mesa de Trabajo.** Assigned tickets (`cat-08`) are rendered as cards with folio, date, client, problem description, state badge (TICKET EN PROCESO) and actions Buscar Solución / Finalizar. This is where the ticket lifecycle is driven to closure.

## The subtle part

The hard part was not the ticket CRUD but the role and state invariants. Permissions cascade by hierarchy, a technician's single-active-ticket constraint races with the unassigned queue, and the ticket state machine has to stay consistent while three actors operate on the same queue. Most edge cases showed up around visibility: what a disabled module hides vs. what the API still allows.

## Stack

HTML + CSS + vanilla JavaScript on the front end, PHP on the back end, with file-based session auth and server-rendered views. No SPA framework; interactivity is progressive enhancement over server truth.
