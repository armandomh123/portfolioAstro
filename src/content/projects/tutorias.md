---
title: Tutorías
order: 5
featured: true
coverArt: vera
coverTag: mission
meta: Laravel · Livewire · Tailwind CSS
desc:
  en: 'School project — A web-based tutoring management system for the Universidad Tecnológica de Escuinapa. Handles student groups, surveys, activities, referrals, and internship tracking for tutors across semesters.'
  es: 'Proyecto escolar — Un sistema web de gestión de tutorías para la Universidad Tecnológica de Escuinapa. Administra grupos de tutorados, encuestas, actividades, canalizaciones y seguimiento de estadías para tutores por cuatrimestre.'
gallery:
  - /images/projects/tutorias-01.webp
  - /images/projects/tutorias-02.webp
  - /images/projects/tutorias-03.webp
  - /images/projects/tutorias-04.webp
  - /images/projects/tutorias-05.webp
  - /images/projects/tutorias-06.webp
  - /images/projects/tutorias-07.webp
---

> **Proyecto escolar / School project.** Universidad Tecnológica de Escuinapa (UTESC).

A complete tutoring management platform built for the Universidad Tecnológica de Escuinapa (UTESC). Tutors use it to organize their student groups, apply surveys, log activities and talks, generate referrals (canalizaciones), and track internship placements — all from a single dashboard scoped to their assigned groups and current semester.

## Context

At UTESC, tutors are assigned a set of student groups each semester and are responsible for academic follow-up, mental health referrals, and internship coordination. Before this system, most of that work was split across spreadsheets, paper forms, and WhatsApp messages. There was no single place to see which students had responded to surveys, which activities had been logged, or which referrals were still open. The goal was a purpose-built tool that mirrored the tutor's actual workflow rather than a generic admin panel.

## What it does

- **Dashboard.** A central hub that surfaces the tutor's modules — groups, surveys, activities, referrals, and internships — with quick-access links to the most-used functions.
- **Student groups.** Tutors manage their assigned groups per semester, register students, and track group-level status. Groups can be reviewed across semesters for historical continuity.
- **Surveys.** A self-contained survey module where tutors share a link, monitor completion (expected vs. received vs. missing), and view individual responses. The link can be copied directly from the panel.
- **Activities and talks.** Every tutoring activity or talk is registered with its type, date, attendee count, and description. Activities can be viewed, edited, and exported as reports.
- **Referrals (canalizaciones).** The system records student referrals — reason, group, date — and tracks withdrawal requests separately. A summary shows the most common referral reason and total withdrawals. Final semester reports are generated from this data.
- **Internships and companies.** Tutors manage company options per student (up to three ranked choices), each with an approval status. The company catalog is maintained alongside the placement tracker, and a report view consolidates the data.

## The subtle part

The hardest part was modeling the relationship between tutors, groups, and semesters so that every module's data stays scoped correctly. A survey belongs to a group in a specific semester; a referral is tied to a student who may appear across multiple groups over time; internship placements carry their own status lifecycle. Getting those boundaries right — so that switching semesters or groups doesn't leak data across contexts — was the real design challenge.

## Stack

Laravel on the backend, Livewire for the reactive UI without a separate SPA, and Tailwind CSS for the interface. The entire system is built as a single Laravel application with a Livewire component per module.
