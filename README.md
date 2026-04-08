# EVC Tutor Schedule

An interactive React/TypeScript web application that displays the latest tutor schedule for Evergreen Valley College (EVC). Students can filter by course or day to find FREE tutoring help, and view important resource center rules and information. Built for students, by a student — deployable via Vite.

---

## Features

- **Modern UI:** Clean React-based interface with dark mode toggle and mobile-friendly design.
- **Course & Day Filtering:** Quickly drill down to find the right tutor for your course and your availability.
- **Subject Grouping:** Tutors displayed in subject sections (e.g., Math, Physics, Accounting, etc.).
- **Evergreen Data:** Pulls tutor schedules from a central JSON file (`/public/data/schedule.json`) for easy updates.
- **Informational Pages:** Additional sections for becoming a tutor and tutor center rules.
- **Accessible:** Color-coded schedules and simple navigation for all users.
- **Easy Theming:** Built-in light/dark mode switcher.

---

## Quick Start

1. **Clone the Repo**
    ```bash
    git clone https://github.com/khainguyen21/EVC_Tutor_Schedule.git
    cd EVC_Tutor_Schedule
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Start the Development Server**
    ```bash
    npm run dev
    ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

- **src/**: React application source code
  - `App.tsx`: Main application file (routing, state, filtering)
  - `components/`: UI components for header, footer, filtering, subject sections, info pages, etc.
  - `pages/`: Informational pages ("Become a Tutor," rules)
  - `utils/`: Subject/coursename mapping utilities
  - `index.css`: Modern responsive styling
- **public/data/schedule.json**: Tutor and schedule data
- **index.html**: App entry point

---

## Data Management

Tutor schedules and details are stored in `public/data/schedule.json`. The UI loads and filters this data using React hooks.

---

## How to Deploy

- Deploy via Vercel, Netlify, or GitHub Pages with Vite static output.
- Make sure the `public/data/schedule.json` is up to date before pushing changes.

---

## Contributing

Issues and pull requests are welcome!
- See the [phased project roadmap](PHASES.md) for planned improvements, including backend/API, enhanced mobile experience, and layout improvements.
- If you’d like to become a contributor or add scheduling features, please reach out.

---

## License

[MIT](LICENSE) — Built for EVC students by [khainguyen21](https://github.com/khainguyen21).

---

## Attribution

This project is not affiliated with Evergreen Valley College. Data and times are as accurate as last updated. Contact the EVC Math & Science Resource Center for the latest schedule.
