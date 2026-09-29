# StudyFlow AI — AI Study Planner

> **"Study Smarter. Prepare Better."**
> A premium, student-focused AI study planner web application built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React.

---

## 🚀 Features Overview

1. **Landing & Modern Dashboard**
   - Hero section with clear CTAs: *"Create My Study Plan"* and *"Explore Dashboard"*
   - Animated visual productivity cards displaying cognitive allocations across subjects
   - Top statistics: Days Remaining (20), Daily Study (3 hrs), Active Subjects (4), Roadmap Progress %
   - Today's Plan task cards with interactive completion checkboxes, difficulty badges, and duration meters
   - Daily mindset quote banner and quick navigation shortcuts

2. **6-Step AI Study Planner Wizard**
   - **Step 1: Enter Subjects** (Add custom subjects or select common university / placement curricula: DSA, Computer Networks, DBMS, Java, OS, System Design)
   - **Step 2: Exam Information** (Exam date picker synced with remaining days countdown and quick preset timelines)
   - **Step 3: Daily Availability** (1 hr, 2 hrs, 3 hrs, 4 hrs, 5+ hrs, and custom hours slider)
   - **Step 4: Knowledge Level** (Beginner, Intermediate, Advanced per subject)
   - **Step 5: High-Priority Topics** (Tag-based topics with suggestions and enter-to-add support)
   - **Step 6: Study Preferences** (Circadian time: Morning, Afternoon, Evening, Night; Session style: Short, Balanced, Long)
   - **AI Synthesis Loading Screen** with glowing cognitive pulse animation and phased progress steps

3. **Curriculum Roadmap & Strategy ("My Plan")**
   - 3-phase strategic roadmap (Phase 1: Foundations, Phase 2: Deep Problem Solving, Phase 3: High-Yield Revision & Mocks)
   - Subject hours distribution bar charts
   - High-yield exam tips and preparation guidelines
   - Comprehensive Day-by-Day interactive accordion with task checklists and recall notes

4. **Interactive Study Calendar**
   - Visual 20-day grid with color-coded status badges: *Completed*, *Partially completed*, *Planned*, and *Missed*
   - Filter by status tabs (All, Completed, In Progress, Upcoming)
   - Click any day to open the **Day Detail Modal** to review topics and check off tasks

5. **Progress & Consistency Dashboard**
   - Overall completion percentage
   - Dynamic subject-wise completion progress bars (`DSA ███████░░░ 70%`, `DBMS`, `Java`, `CN`)
   - Study hours invested vs total planned hours
   - Completed vs remaining task counts
   - Habit streak tracker 🔥 and study points ⭐
   - Academic milestone and habit badges

6. **Deep Work Focus Mode (Pomodoro Timer)**
   - 25-minute focus session, 5-minute short break, 15-minute long break presets
   - Start, Pause, and Reset controls
   - Current task binder (*"FOCUS SESSION: DSA — Arrays [25:00] [Start Focus]"*)
   - Web Audio API synthesizer for bell chimes and ambient white noise
   - Task switcher allowing students to target any task from today's plan

7. **AI Study Assistant (Tutor) with Groq Integration**
   - Dedicated chat workspace and floating quick-launcher accessible on any page
   - Powered by ultra-fast **Groq AI (`openai/gpt-oss-120b`)** with dynamic offline academic engine fallback
   - Automatic response badge: **🟢 Answered in Online Mode (Groq AI)** vs **⚡ Answered in Offline Mode**
   - Pre-configured prompt pills:
     - *"Explain normalization in DBMS."*
     - *"Give me 5 DSA questions."*
     - *"What should I revise today?"*
     - *"Create a quick revision plan."*
   - Clean Markdown formatting with code blocks, key formulas, and bullet points

8. **Notification System & Reminders**
   - Contextual study reminders, exam countdown alerts, and streak notifications
   - Unread badges, mark-as-read, and mark-all-read capabilities

9. **Customization & Persistence**
   - Dark mode & Light mode toggle with sleek glassmorphism
   - LocalStorage persistence for study plans, completed tasks, profile settings, and streak
   - Safe reset confirmation dialog to prevent accidental data loss
   - Optional API key configuration in Settings

---

## 🛠️ Technology Stack

- **React 19**
- **Vite**
- **Tailwind CSS 3**
- **Framer Motion**
- **Lucide React**
- **Canvas Confetti**
- **Web Audio API**

---

## 🏃 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. (Optional) Configure Gemini AI API Key
Copy `.env.example` or create a `.env` file in the project root:
```env
VITE_AI_API_KEY=your_gemini_api_key_here
```
> *Note:* If no API key is provided, the application automatically uses its realistic academic fallback engine.

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
