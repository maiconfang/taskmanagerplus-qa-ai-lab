# TaskManagerPlus QA AI Lab

## 📌 Project Overview
This repository is a **learning lab** where I explore how **AI can be applied to QA (Quality Assurance)** using my own project **TaskManagerPlus**.  
The goal is to test modern approaches such as **AI-assisted test generation, visual testing, and log analysis**.

## 🎯 Objectives
- Learn and experiment with AI-powered QA tools.
- Apply concepts directly to my local TaskManagerPlus system.
- Create a structured study plan (1 hour per day).
- Record videos explaining the process and share knowledge with the community.
- Stay updated with new QA + AI technologies.

## 🧪 Scope
The focus is on two main flows of TaskManagerPlus:
1. **Login**  
   - Success and failure scenarios  
   - Security and rate-limit cases  
2. **Tasks (Dashboard)**  
   - Create, edit, delete tasks  
   - Filter by *Pending* and *Completed*  

These flows will be used to:
- Generate test cases via AI.  
- Apply **Visual Testing**.  
- Perform **Log Analysis**.  

## 🛠️ Tools & Technologies
- **Testing Frameworks**: Cypress or Selenium (to be explored)  
- **Visual Testing**: Applitools Eyes (AI-based visual comparison)  
- **Test Generation**: Testim.io, Katalon AI, ChatGPT prompts  
- **Log Analysis**: Mabl, ChatGPT for summarization and root cause analysis  
- **Reports**: Allure / JUnit style reports  
- **CI/CD**: GitHub Actions & Jenkins  

## 📂 Repository Structure
```bash
taskmanagerplus-qa-ai-lab/
├─ tests/
│  ├─ e2e/
│  │  ├─ login.spec.ts
│  │  └─ dashboard.spec.ts
│  └─ fixtures/
│     └─ test-fixture.ts        # fixture com nossas pages
├─ src/
│  └─ pages/
│     ├─ base.page.ts
│     ├─ login.page.ts
│     └─ dashboard.page.ts
├─ utils/
│  ├─ selectors.ts               # mapeamento centralizado (bom p/ IA sugerir/atualizar)
│  └─ visual.ts                  # helper p/ Visual AI (Applitools opcional)
└─ playwright.config.ts

