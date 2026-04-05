# 🚀 Project Case Study: AI-Powered Weather Engagement Loop
**Role:** Subhram Saha, Product Manager & Lead Integrator  
**Stack:** GitHub, Vercel, OpenWeather API, GitHub Actions, AI (Vibe Coding)

---

## 1. Executive Summary
I developed an automated, end-to-end weather notification system designed to drive daily user engagement. By leveraging "Vibe Coding" (AI-assisted development) and modern CI/CD infrastructure, I moved from concept to a live, hosted public application in under 24 hours.

## 2. The Problem & Opportunity
* **User Problem:** Users often forget to check weather conditions until they are already outside, leading to unpreparedness.
* **Product Goal:** Create a "Push" vs. "Pull" experience where the weather comes to the user at their peak planning time (8:00 AM).

## 3. Technical Architecture & Workflow
I opted for a **modular architecture** to ensure high availability and zero-cost maintenance:

| Component | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | HTML5 / Tailwind CSS | Responsive UI for multi-city weather visualization. |
| **Logic** | JavaScript (Fetch API) | Asynchronous data retrieval from OpenWeatherMap. |
| **Version Control**| **GitHub** | Source of truth and management of the development pipeline. |
| **Deployment** | **Vercel** | Automated "Push-to-Deploy" hosting with SSL. |
| **Automation** | **GitHub Actions** | Scheduled "Cron" job to trigger the daily re-engagement email. |
| **Security** | **GitHub Secrets** | Encrypted management of API keys and SMTP credentials. |

---

## 4. Development Highlights (The "PM Lessons")

### ✅ Vibe Coding & Rapid Prototyping
Instead of manual boilerplate coding, I utilized AI to scaffold the core logic. This allowed me to focus on **Product Logic** (which cities to track, how to display data) rather than syntax, increasing velocity by an estimated 300%.

### ✅ Handling Technical Debt
During deployment, I encountered **Node.js deprecation warnings** (v20 vs v24) within the GitHub Actions runner. I successfully mitigated this by updating the workflow versions and configuring environment variables, ensuring the project’s long-term stability.

### ✅ Security Best Practices
I implemented a strict **Zero-Leak Policy**. By using GitHub Actions Secrets, I ensured that no sensitive API keys or Gmail App Passwords were ever exposed in the public codebase—a critical skill for any PM managing technical products.

---

## 5. Key Metrics for Success
* **Deployment Time:** < 5 minutes from code push to live URL. Check out the [Live Weather App] (https://weather-vibe-app.vercel.app/)
* **Automation Reliability:** 100% success rate on scheduled daily triggers.
* **Cost to Scale:** $0 (Optimized using free-tier cloud infrastructure).

---

## 6. Future Roadmap
* **V2 - Personalization:** Allow users to sign up and choose their own notification time via a web form.
* **V3 - Multi-Channel:** Expand notifications from Email to SMS or WhatsApp using the Twilio API.
* **V4 - Predictive Insights:** Use AI to suggest "What to wear" based on the weather description (e.g., "It's raining; don't forget an umbrella").

---

## 7. Reflections
Building this project taught me the importance of the **Developer Experience (DX)**. Understanding how GitHub Actions and Vercel interact allows me to better estimate engineering efforts and speak the same language as the developers I lead.
