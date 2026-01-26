# EVC Tutor Schedule - Development Phases

> **Last Updated:** Jan 25, 2026  
> **Timeline:** Jan 4–26 (intensive) → Jan 27+ (school mode, limited hours)

---

## 📊 Skills Completed

| Course                                      | Status                                    |
| ------------------------------------------- | ----------------------------------------- |
| Ultimate HTML & CSS: Part 1                 | ✅ Done                                   |
| Ultimate HTML & CSS: Part 2                 | ✅ Done                                   |
| Ultimate HTML & CSS: Part 3                 | ✅ Done                                   |
| Ultimate JavaScript Part 1: Fundamentals    | ✅ Done                                   |
| Ultimate JavaScript Part 2: Advanced Topics | ✅ Done                                   |
| The Ultimate TypeScript Course              | 🔄 23% (in progress)                      |
| React 18 for Beginners                      | 🔄 Managing Component State (in progress) |

---

# 🗓️ ACTION PLAN

## INTENSIVE PERIOD: Jan 4–26 (3 weeks, ~4 hrs/day available)

### Week 1: Jan 4–12 — Finish Phase 1 + Deploy

| Day       | Task                                                  | Time  |
| --------- | ----------------------------------------------------- | ----- |
| Jan 4–5   | Review `index.html`, fix any missing tutors or typos  | 2 hrs |
| Jan 6–7   | Test on mobile (use browser DevTools), fix CSS issues | 2 hrs |
| Jan 8     | Add footer with "Last updated" date, contact info     | 1 hr  |
| Jan 9     | Deploy to GitHub Pages or Netlify                     | 2 hrs |
| Jan 10    | Share link with 2–3 classmates for feedback           | 1 hr  |
| Jan 11–12 | Fix feedback issues, polish                           | 2 hrs |

**✅ Week 1 Deliverable:** Live website URL you can share

---

### Week 2: Jan 13–19 — Finish TypeScript (Phase 2 partial)

| Day       | Task                                                           | Time      |
| --------- | -------------------------------------------------------------- | --------- |
| Jan 13–15 | Complete TypeScript course (23% → 100%)                        | 3 hrs/day |
| Jan 16    | Practice: Create `types/Tutor.ts` interface for your data      | 2 hrs     |
| Jan 17–18 | Practice: Write a small TS script that filters `schedule.json` | 3 hrs     |
| Jan 19    | Review & rest                                                  | 1 hr      |

**✅ Week 2 Deliverable:** TypeScript course done, `Tutor` interface created

---

### Week 3: Jan 20–26 — Start React (Phase 3 start)

| Day       | Task                                                   | Time      |
| --------- | ------------------------------------------------------ | --------- |
| Jan 20–22 | React 18 for Beginners: Sections 1–3 (Components, JSX) | 3 hrs/day |
| Jan 23–24 | React: Sections 4–5 (Props, State)                     | 3 hrs/day |
| Jan 25    | Practice: Create `<TutorCard />` component in React    | 3 hrs     |
| Jan 26    | Review progress, plan for school mode                  | 2 hrs     |

**✅ Week 3 Deliverable:** ~50% of React course, first React component built

---

## SCHOOL MODE: Jan 27+ (limited time, ~1 hr/day or 5 hrs/weekend)

### Month 2: February — Finish React (Phase 3)

- Complete React 18 for Beginners course
- Convert static HTML to React components
- Implement filtering with `useState`
- **Milestone:** Functional React app with filters

### Month 3: March — Data Fetching (Phase 3.5)

- Fetch from `schedule.json` using `fetch()`
- Add loading spinner, error handling
- Deploy React version to Vercel
- **Milestone:** React app fetching real data

### Month 4+: April onwards — Backend (Phase 4)

- Start Node.js course
- Start SQL course
- Build Express API
- Connect to PostgreSQL with Prisma
- **Milestone:** Full-stack app

---

# 📋 PHASE DETAILS

## Phase 1: The Visual Foundation (HTML & CSS)

**Goal:** Build a static mockup that turns the 8-page PDF into a clean digital layout.

**Mosh Courses:** Ultimate HTML & CSS: Part 1, 2, 3 ✅

**Project Actions:**

- [x] Use Semantic HTML (`<nav>`, `<main>`, `<section>`) to structure the app
- [x] Use CSS Grid to create the schedule columns (Tutor, Subject, Time, Room)
- [x] Use Flexbox to align small items like course "tags"
- [x] Apply Media Queries so the schedule is readable on a phone
- [ ] Deploy to GitHub Pages or Netlify
- [ ] Get feedback from 2–3 real users

**Status:** 🔄 90% Complete — needs deployment

---

## Phase 2: Language Fundamentals (JS & TS)

**Goal:** Learn the logic required to handle data and prevent common programming bugs.

**Mosh Courses:**

- Ultimate JavaScript Part 1 ✅
- Ultimate JavaScript Part 2 ✅ (you completed this!)
- The Ultimate TypeScript Course 🔄 23%

**Project Actions:**

- [x] Master Array Methods (`.filter()`, `.map()`)
- [ ] Complete TypeScript course
- [ ] Use TypeScript Interfaces to define `Tutor` type

**Status:** 🔄 70% Complete — finish TypeScript

---

## Phase 3: Interactive Frontend (React 18)

**Goal:** Make the UI "alive" so filtering happens instantly when a student clicks a button.

**Mosh Course:** React 18 for Beginners

**Project Actions:**

- [x] Create new React + TypeScript project with Vite
- [x] Define TypeScript interfaces (`Location`, `ScheduleEntry`, `Tutor`, `ScheduleData`)
- [x] Move schedule.json to public/data/ folder
- [x] Migrate styles.css to src/index.css with color-coded location badges
- [x] Create `<LocationBadge />` component (Props practice)
- [x] Create `<TutorCard />` component (Rendering Lists)
- [x] Create `<FilterBar />` component (Lifting State Up)
- [x] Create `<SubjectSection />` component (Subject grouping)
- [x] Create subject mapping utilities (getFieldFromSubject, formatSubjectsForDisplay)
- [x] Update App.tsx with subject grouping and advanced filtering logic
- [x] Test filtering functionality in browser (course + day filters working)
- [x] Implement compact subject formatting (e.g., "MATH 020-025, 066/67")
- [ ] Create `<Header />` component with dark mode toggle
- [ ] Create `<Footer />` component
- [ ] Create reusable `<InfoSection />` component
- [ ] Add location subtitles to subject headers
- [ ] Deploy React app to Netlify/Vercel

**Status:** 🔄 85% Complete — Core filtering complete, layout components pending (Jan 25)

---

## Phase 3.5: Data Fetching Practice (JSON & Mock API)

**Goal:** Bridge static React and full backend by practicing data fetching.

**Project Actions:**

- [ ] Fetch tutor data from `schedule.json` using `fetch()`
- [ ] Use `useEffect` Hook to load data on mount
- [ ] Handle loading states (spinner)
- [ ] Handle error states
- [ ] Deploy React app to Vercel

**Status:** ⏳ Pending — March goal

---

## Phase 4: Backend & Database (Node.js & SQL)

**Goal:** Move tutor data from static file into a real database.

**Mosh Courses:** The Complete Node.js Course, Complete SQL Mastery

**Project Actions:**

- [ ] SQL Design: Create Tutors, Subjects, Schedules tables
- [ ] Express API: Serve schedule data to React frontend
- [ ] Prisma ORM: Connect Node to PostgreSQL

**Status:** ⏳ Pending — April+ goal

---

# 🎯 KEY MILESTONES

| Date       | Milestone                | Proof                   |
| ---------- | ------------------------ | ----------------------- |
| **Jan 12** | Phase 1 deployed         | Live URL                |
| **Jan 19** | TypeScript course done   | Certificate screenshot  |
| **Jan 26** | First React component    | `<TutorCard />` working |
| **Feb 28** | React app with filters   | Demo video              |
| **Mar 31** | React fetching from JSON | Deployed on Vercel      |
| **May 31** | Full-stack version       | Show to tutoring center |

---

# 💡 Tips for School Mode

1. **Protect 1 hour daily** — Morning before class or evening after homework
2. **Weekend sprints** — 2–3 hour blocks on Sat/Sun
3. **Watch videos on commute** — Mosh videos work offline
4. **Code on weekends only if needed** — Watching is still progress
5. **Don't break the chain** — Even 15 min counts

---

# 🏆 End Goal

**By end of Spring semester:** Present working app to EVC Tutoring Center, potentially get it adopted as official resource. Portfolio piece demonstrating HTML, CSS, TypeScript, React, Node.js, SQL, and API design.
