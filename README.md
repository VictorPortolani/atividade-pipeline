# Documentação da Atividade Pipeline

## Teste automatizado Vercel
https://atividade-pipeline-app.vercel.app/

## 📋 Visão Geral
Este projeto implementa um pipeline de entrega contínua (CI/CD) com testes automatizados usando Playwright e deployment automático no Vercel.

## 🏗️ Estrutura do Projeto

```
atividade-pipeline/
├── src/                          # Código fonte
│   └── index.js                  # Funções principais
├── tests/                        # Testes automatizados
│   └── example.spec.js           # Testes com Playwright
├── .github/workflows/            # Workflows de CI/CD
│   ├── playwright.yml            # Pipeline de testes
│   └── deploy.yml                # Pipeline de deploy
├── index.html                    # Página principal
├── package.json                  # Dependências e metadados
├── playwright.config.js          # Configuração do Playwright
└── .gitignore                    # Arquivos ignorados pelo Git
```

## 🔧 Funcionalidades Implementadas

### 1. **Código-fonte** ([src/index.js](src/index.js))
Duas funções matemáticas básicas:
- **`soma(a, b)`**: Retorna a soma de dois números
- **`multiplicacao(a, b)`**: Retorna o produto de dois números

### 2. **Testes Automatizados** ([tests/example.spec.js](tests/example.spec.js))
Testes unitários usando Playwright:
- ✅ Testa se `soma(2, 2)` retorna `4`
- ✅ Testa se `multiplicacao(3, 4)` retorna `12`

### 3. **Configuração do Playwright** ([playwright.config.js](playwright.config.js))
- Executa testes em 3 navegadores: Chromium, Firefox e WebKit
- Configurado para rodar em paralelo localmente
- Em CI: 1 worker com 2 tentativas de retry
- Relatórios HTML habilitados
- Trace ativado no primeiro retry

### 4. **Pipeline de Testes** ([.github/workflows/playwright.yml](.github/workflows/playwright.yml))
Executa automaticamente em `push` ou `pull_request` para `main` e `master`:
1. Checkout do código
2. Setup Node.js (LTS)
3. Instalação de dependências
4. Instalação dos navegadores Playwright
5. Execução dos testes
6. Upload do relatório como artefato (retenção: 30 dias)

### 5. **Pipeline de Deploy** ([.github/workflows/deploy.yml](.github/workflows/deploy.yml))
Faz deploy automático no Vercel após push em `main` ou `master`:
1. Checkout do código
2. Instalação do Vercel CLI
3. Deploy em produção com tokens secretos
4. Variáveis de ambiente: `VERCEL_ORG_ID` e `VERCEL_PROJECT_ID`

### 6. **Página Web** ([index.html](index.html))
Página HTML simples com título e paragráfo de boas-vindas

## 📦 Dependências

Instaladas via `npm init playwright@latest`:
- `@playwright/test`: Framework de testes e2e
- `@types/node`: Tipos TypeScript para Node.js

## 🚀 Como Usar

### Inicializar o Playwright
```bash
npm init playwright@latest
```

Este comando foi utilizado para configurar automaticamente:
- Dependências do Playwright
- Configuração do `playwright.config.js`
- Diretório de testes
- CI/CD workflows do GitHub Actions
- Exemplos de testes

### Instalar dependências
```bash
npm install
```

### Executar testes localmente
```bash
npx playwright test
```

### Executar testes em modo UI
```bash
npx playwright test --ui
```

### Ver relatório de testes
```bash
npx playwright show-report
```

## 🔐 Segurança

Secrets necessários no GitHub:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## 📊 Fluxo de CI/CD

```
Push para main/master
    ↓
[Playwright Tests] ← Roda testes em 3 navegadores
    ↓ (se passar)
[Deploy Vercel] ← Deploy automático em produção
```

## ✨ Status Atual
- ✅ Playwright instalado via `npm init playwright@latest`
- ✅ Testes unitários implementados
- ✅ Pipeline de CI com Playwright configurado
- ✅ Pipeline de CD para Vercel configurado
- ✅ Página HTML básica criada
- ✅ Repositório no GitHub configurado
