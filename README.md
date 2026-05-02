# Inclusive Election Education & Voter Awareness Assistant

## Problem Statement
Millions of citizens, especially those from marginalized or illiterate communities, lack the knowledge to participate effectively in the democratic process. This application aims to bridge the gap by providing a completely unbiased, highly accessible, and multilingual platform to educate voters about their rights, the voting process, and how to evaluate political leaders responsibly.

## Accessibility Focus
To ensure no voter is left behind, the application includes:
- **Multilingual Support:** English, Hindi, Telugu, and Marathi.
- **Voice Accessibility:** A robust "Listening Mode" powered by Web Speech API (with structure for Google Cloud TTS) for completely illiterate users.
- **Visual Learning:** Clear icons, emojis, and large text buttons.
- **Mock Voting (EVM Simulation):** Interactive sandbox to learn how Electronic Voting Machines work with immediate audio feedback.

## Features
- **Multilingual & Audio Content:** Switch languages and reading/listening modes at any time.
- **Step-by-Step Education:** Learn about voter registration, IDs, polling, EVMs, and counting.
- **EVM Simulator:** Practice voting and understand the process.
- **Eligibility Checker:** Check if you meet the requirements to vote.
- **Quiz System:** Test your knowledge and get guidance based on your score.
- **Awareness Modules:** Scenario-based learning to discourage vote-selling and encourage responsible voting.
- **Political Awareness:** Unbiased, factual overview of major political parties and a guide on how to evaluate a leader.

## Tech Stack
- **Frontend:** React (Vite), React Router, Context API, Vanilla CSS (Glassmorphism aesthetics).
- **Backend:** Node.js, Express.js.
- **APIs:** Browser Web Speech API (Native TTS).
- **Architecture:** Monorepo (frontend + backend).

## Setup Instructions

### Prerequisites
- Node.js (v18+)

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd VEDA
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The frontend will start on `http://localhost:5173`.

### 3. Backend Setup
```bash
cd backend
npm install
node index.js
```
The backend will start on `http://localhost:5000`.

## Disclaimer
This application provides factual information for educational purposes only and does not support or promote any political party.
