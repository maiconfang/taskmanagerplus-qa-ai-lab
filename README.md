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

---

## 🚀 Next Steps with AI in QA

### 📄 File: docs/ai-prompts.md
Pre-built blocks ready to copy and use:
- **Test Generation** (user story → test cases)
- **Diff-based Testing** (code/UI changes → new tests)
- **Visual Checkpoints** (login and dashboard)
- **Log Analysis** (summary + next tests)

### 🖼️ Minimum Visual Checklist
- **Login**: title, username input, password input, submit button, login error  
- **Dashboard**: header, task list, Create/Edit/Delete buttons, Pending/Completed filters  

### 🧪 Test Case Package via AI
- **Login**: success, credential failure, lock after N attempts, empty fields, simple injection  
- **Tasks**: valid create, create without title, edit title, delete, Pending/Completed filter, edge cases (long title, special characters)  

### 📌 Organized Issues (examples with short description)
- **#1 Setup & README** – configure base and instructions  
- **#2 Login Scenarios (AI)** – generated cases + fixtures  
- **#3 Dashboard Scenarios (AI)** – generated cases + fixtures  
- **#4 Visual Testing POC** – native Playwright snapshots  
- **#5 Logs + Analysis Prompt** – real samples + instructions  

### ⚙️ CI with GitHub Actions
- Simple workflow: run Playwright on push/PR  
- Artifacts: HTML report + screenshots  
- Optional: `APPLITOOLS_API_KEY` secret for advanced visual testing  

---

## 🚀 Próximos Passos com IA em QA

### 📄 Arquivo: docs/ai-prompts.md
Blocos prontos para você colar e usar:
- **Geração de Testes** (user story → casos de teste)
- **Diff-based Testing** (mudança em código/UI → novos testes)
- **Checkpoints Visuais** (login e dashboard)
- **Análise de Logs** (explicação + próximos testes)

### 🖼️ Checklist Visual Mínimo
- **Login**: título, campo username, campo password, botão submit, erro de login  
- **Dashboard**: header, lista de tarefas, botões Create/Edit/Delete, filtros Pending/Completed  

### 🧪 Pacote de Casos de Teste via IA
- **Login**: sucesso, falha de credencial, bloqueio após N tentativas, campos vazios, injeção simples  
- **Tasks**: criação válida, criação sem título, edição de título, exclusão, filtro Pending/Completed, edge cases (título longo, caracteres especiais)  

### 📌 Issues Organizadas (exemplo de título + descrição curta)
- **#1 Setup & README** – configurar base e instruções  
- **#2 Cenários Login (IA)** – casos gerados + fixtures  
- **#3 Cenários Dashboard (IA)** – casos gerados + fixtures  
- **#4 POC de Teste Visual** – snapshots nativos Playwright  
- **#5 Logs + Prompt de Análise** – amostras reais + instrução  

### ⚙️ CI com GitHub Actions
- Workflow simples: rodar Playwright em push/PR  
- Artefatos: relatório HTML + screenshots  
- Opcional: secret `APPLITOOLS_API_KEY` para teste visual avançado  
