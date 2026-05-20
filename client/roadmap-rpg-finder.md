# Roadmap — RPG Finder

Projeto de portfólio full-stack com React, TypeScript, Supabase e IA (chatbot com RAG).

---

## Visão geral do projeto

**Stack final:**

- **Frontend:** React + TypeScript + Vite, Tailwind CSS, React Router
- **Backend:** Serverless functions na Vercel (TypeScript)
- **Banco:** Supabase (Postgres + Auth + pgvector pra RAG)
- **LLM:** Google Gemini API (Flash, gratuito) ou Groq
- **API externa:** Open5e (catálogo de SRDs gratuito)
- **Deploy:** Vercel (CI/CD automático via GitHub)
- **Testes:** Vitest + React Testing Library

**Duração estimada:** 7-8 semanas com ~10-15h/semana.

**Filosofia do roadmap:** cada fase produz algo demonstrável e deployado. Você nunca fica semanas sem ver progresso real online. Isso é crítico pra motivação.

---

## Fase 0 — Fundamentos e setup (3-5 dias)

**Objetivo:** Garantir que você tem a base e o ambiente pronto. Pular essa fase é tentador, mas se você não domina TypeScript básico vai sofrer depois.

### O que estudar antes

Se você já usa React e JS bem, foque em **TypeScript essencial**: tipos primitivos, interfaces vs types, generics básicos, utility types (`Partial`, `Pick`, `Omit`), narrowing, e *especialmente* tipagem de funções e props de componentes. O tutorial oficial em typescriptlang.org/docs e o "TypeScript for JavaScript Programmers" são suficientes. Não tente dominar tudo — só entender o suficiente pra não usar `any`.

Revise também **Git/GitHub** se estiver enferrujado: branches, commits descritivos, PRs (mesmo trabalhando sozinho, abra PRs pra você mesmo — recrutadores olham isso).

### O que construir

- Cria o repositório no GitHub (público, README inicial bem-escrito explicando a ideia)
- Faz scaffold com Vite (`npm create vite@latest` template react-ts)
- Configura Tailwind CSS
- Configura ESLint + Prettier
- Cria conta na Vercel e conecta o repo — faz o primeiro deploy de um "Hello World" estilizado
- Cria conta no Supabase, cria o projeto

### Como saber que terminou

Seu site no ar com URL da Vercel, deploys automáticos a cada push na main, e um README que já explica o objetivo do projeto.

### Armadilha comum

Ficar configurando coisa demais (Husky, lint-staged, commitlint, etc.). Não precisa. Mantém o básico.

---

## Fase 1 — Frontend estático com dados mockados (1 semana)

**Objetivo:** Construir toda a interface visual do site usando dados falsos em arquivos TypeScript, antes de qualquer backend. Você vai validar a UX e treinar React/TS.

### O que estudar antes

- **React Router v6** (rotas, links, params)
- **Componentização** — pratique pensar "isso é um componente reutilizável?"
- **Tailwind** básico (utility classes, responsividade com prefixos `md:` e `lg:`)
- **Acessibilidade básica** (semantic HTML, alt em imagens, contraste)

Pra design, se você não tem olhar pra UI, copie inspiração — sites como Dribbble, Mobbin ou até observar a UI do itch.io (que é literalmente uma marketplace de jogos indies) podem te dar referências.

### O que construir

- Páginas: Home (destaques de RPGs), Lista de RPGs (com filtros visuais, ainda sem lógica), Detalhe de um RPG, Lista de Eventos, Sobre
- Cria um arquivo `src/data/mockRpgs.ts` com uns 15-20 RPGs fictícios bem tipados (interface `Rpg` com nome, descrição, tags, número de jogadores, duração, autor, etc.). O mesmo pra eventos
- Implementa Header com navegação, Footer, e um design system mínimo: cores definidas no Tailwind config, tipografia consistente, componentes base (`Button`, `Card`, `Tag`, `Input`)

### Como saber que terminou

Site navegável no ar, responsivo no mobile, com aparência profissional. Você consegue clicar de uma página pra outra. Dados ainda são mockados.

### Skill que você ganha

Estruturar uma SPA com React Router, pensar em componentes reutilizáveis, dominar Tailwind, e tipar dados com TypeScript.

---

## Fase 2 — Banco de dados e listagem real (1 semana)

**Objetivo:** Trocar os mocks por dados reais do Supabase. Aprender SQL básico e o cliente do Supabase.

### O que estudar antes

- **SQL básico**: `SELECT`, `WHERE`, `JOIN`, `ORDER BY`, `LIMIT`. Não precisa dominar; só entender o suficiente pra ler queries
- **Conceito de relação** (tabelas, foreign keys)
- **Supabase JS client** — a documentação deles é excelente, leia a seção "Database" e "Fetch Data"
- **React Query** (TanStack Query) — vai ser sua ferramenta pra buscar dados, com cache automático. É muito usado no mercado

### O que construir

- No Supabase, cria as tabelas:
  - `rpgs` (id, name, description, tags array, min_players, max_players, duration, author, cover_url, is_featured, created_at)
  - `events` (id, title, description, system_id fk, date, location, organizer, contact, created_at, status)
- Popula `rpgs` com os dados que estavam no mock (insere manualmente via interface do Supabase, ou via SQL)
- Configura Row Level Security (RLS) — começa permissivo (SELECT público pra todos)
- Cria o client do Supabase no frontend (`src/lib/supabase.ts`)
- Substitui os mocks por hooks com React Query que buscam do banco: `useRpgs()`, `useRpgById(id)`, `useFeaturedRpgs()`
- Implementa loading states e error states de verdade (não esquece disso — junior costuma esquecer e fica horrível)

### Como saber que terminou

Os dados que aparecem no site vêm do Supabase. Se você editar uma descrição no painel do Supabase, ela muda no site sem deploy.

### Skill que você ganha

SQL básico, modelagem de dados, integração frontend-banco, React Query (cache, loading, error), variáveis de ambiente (`.env` com `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`).

### Cuidado importante

As chaves do Supabase no frontend são as `anon` (públicas, seguras de expor). **Nunca exponha a `service_role` no frontend.**

---

## Fase 3 — Autenticação e submissão de eventos (1 semana)

**Objetivo:** Usuários conseguem criar conta e submeter eventos. Você aprende auth de verdade e RLS.

### O que estudar antes

- **Supabase Auth** (a documentação deles cobre tudo). Decida entre login com email/senha, magic link (sem senha, envia link por email), ou OAuth (Google/GitHub). Recomendo **magic link + GitHub OAuth** — é moderno, simples, e você não lida com senhas
- **Row Level Security (RLS)** de verdade dessa vez. É um conceito-chave do Supabase e é diferencial em entrevista. Conceito: você escreve políticas SQL que controlam *quem pode ler/escrever cada linha*. Ex: "qualquer um pode ler eventos com status='approved', mas só o autor pode editar o próprio evento"
- **Formulários em React**: você pode começar com state simples (`useState`), mas vai apreciar muito o **React Hook Form** + **Zod** pra validação. Esse combo é padrão de mercado

### O que construir

- Páginas de login/cadastro
- Hook `useAuth()` que expõe usuário atual e funções de login/logout
- Header mostra "Login" ou "Olá, [nome] / Sair"
- Página "Submeter Evento" protegida (só logado acessa). Formulário com validação Zod: título, descrição, sistema (dropdown puxando da tabela `rpgs`), data, local, contato
- Configura RLS na tabela `events`: SELECT público só pra `status='approved'`, INSERT pra qualquer usuário autenticado (status default='pending'), UPDATE só pro autor ou admin
- Cria um campo `user_id` em `events` referenciando `auth.users`
- Adiciona página "Meus Eventos" (eventos submetidos pelo usuário logado, mostrando status)
- Cria um critério simples de admin: uma tabela `admins` com user_ids, ou um campo na tabela de profiles
- Página `/admin/events` que lista pendentes e permite aprovar/rejeitar

### Como saber que terminou

Você cria uma conta, submete um evento, vê ele "pendente". Logado como admin, aprova. Evento aparece publicamente.

### Skill que você ganha

Autenticação completa, RLS (segurança a nível de banco), formulários com validação, fluxos com autorização, conceito de roles.

### Dica importante

Isso já substitui completamente sua ideia original de "mestre manda email". É melhor em todos os sentidos: mais profissional, mais seguro, e demonstra mais skills.

---

## Fase 4 — Primeira serverless function e API externa (4-5 dias)

**Objetivo:** Construir um endpoint backend e consumir uma API externa. Te prepara pra Fase 5 (chatbot).

### O que estudar antes

- **Conceito de serverless function**: uma função que roda no servidor sob demanda, sem você gerenciar servidor. Na Vercel, você cria um arquivo em `/api/nome.ts` e ele vira o endpoint `/api/nome`. Lê a doc de Vercel Functions
- **Fetch / async-await / error handling**
- Conceito de **CORS** (você não vai ter problema porque a function fica no mesmo domínio do site, mas é bom entender)
- **Variáveis de ambiente no servidor** vs no cliente

### O que construir

Decide a integração com API externa. Recomendo: **Open5e** (catálogo de monstros, magias, classes do D&D 5e e outros sistemas SRD — sem auth, gratuito). Cria uma página "Bestiário" ou "Biblioteca" onde o usuário pesquisa monstros/magias.

Implementa duas formas pra comparar e aprender:

1. **Chamada direta do frontend** (pra ver que funciona, já que essa API permite CORS)
2. **Chamada via serverless function** (`/api/open5e?type=monsters&search=dragon`), que faz a chamada no servidor e retorna pro frontend. Explica no README por que a segunda forma é melhor pra APIs que precisam de chave secreta

Bônus: adiciona um botão "Adicionar à minha coleção" em cada item, que salva no Supabase numa tabela `user_collection`. Mistura API externa + banco próprio.

### Como saber que terminou

Página funcional consumindo Open5e, com busca e filtros. Sua primeira serverless function deployada e funcionando.

### Skill que você ganha

Serverless functions, consumo de API externa, separação cliente/servidor, gestão de secrets.

---

## Fase 5 — Chatbot com LLM (1 semana)

**Objetivo:** Implementar o chatbot básico, sem RAG ainda. Você quer ver o LLM respondendo primeiro, depois melhora.

### O que estudar antes

- **Como funciona uma API de LLM**: você envia mensagens (system prompt + histórico de conversa), recebe resposta
- **Streaming**: a resposta vem em pedaços, palavra por palavra. Faz a experiência muito melhor
- Lê a doc do **Google Gemini API** (provavelmente Gemini Flash, gratuito). Cria conta no Google AI Studio, pega API key. Lê a seção sobre "system instructions" e "streaming"
- **Prompt engineering básico**: como escrever um system prompt bom. Princípios: seja específico sobre o papel, defina o tom, dê exemplos, restrinja o escopo ("se perguntarem sobre algo fora de RPG, redirecione gentilmente")

### O que construir

Cria a serverless function `/api/chat` que recebe `{ messages: ChatMessage[] }`, chama o Gemini com um system prompt definindo o bot como "especialista em RPGs indies que ajuda a encontrar o sistema ideal", e retorna a resposta. Começa sem streaming (mais simples) — se sobrar tempo, adiciona streaming usando Server-Sent Events.

No frontend, cria a página/widget de chat: lista de mensagens, input, botão enviar. Estado da conversa em React (array de mensagens). Indicador de "digitando...". Persiste a conversa atual no `localStorage` pra não perder ao recarregar.

### System prompt inicial sugerido

> "Você é um assistente especializado em RPGs de mesa, com foco em sistemas indies e alternativos ao D&D. Sua função é entender as necessidades do usuário (tipo de experiência, número de jogadores, tempo disponível, estilo narrativo) e recomendar sistemas que atendam esses critérios, explicando por que cada um pode servir. Quando não tiver certeza, faça perguntas. Mantenha respostas em português, tom amigável e informativo."

### Como saber que terminou

Você consegue conversar com o bot e receber respostas relevantes. As respostas ainda são limitadas ao que o modelo sabe (não conhece RPGs muito obscuros).

### Skill que você ganha

Integração com LLM, prompt engineering, gestão de histórico de conversa, UX de chat.

### Limites importantes a respeitar

Rate limits do Gemini Free Tier são generosos, mas se viralizar você precisa adicionar limite por IP/usuário. Mais pra frente, sem urgência.

---

## Fase 6 — RAG: o salto técnico (1-1.5 semanas)

**Objetivo:** Fazer o bot conhecer os RPGs que estão no seu banco, mesmo os que o LLM nunca ouviu falar. Essa é a fase que mais vai te diferenciar.

### O que estudar antes

- **Conceito de embeddings**: um texto vira um vetor de números (~768 ou ~1536 dimensões) que captura seu significado semântico. Textos parecidos têm vetores próximos. É como um "endereço" do significado
- **Busca vetorial / similaridade por cosseno**: dada a pergunta do usuário, você gera o embedding dela e busca os 5 RPGs do banco cujos embeddings são mais parecidos
- **pgvector no Supabase**: extensão do Postgres que armazena vetores e busca eficiente. Supabase tem doc dedicada sobre isso, leia
- **Conceito de RAG**: Retrieval (buscar contexto relevante) + Augmented (injetar no prompt) + Generation (LLM gera resposta usando esse contexto)

### O que construir

- Habilita `pgvector` no Supabase
- Adiciona uma coluna `embedding vector(768)` na tabela `rpgs` (768 é o tamanho dos embeddings do Gemini `text-embedding-004`, gratuito)
- Cria um script (`scripts/generate-embeddings.ts`) que: pra cada RPG sem embedding, gera o embedding da descrição (e tags concatenadas) via API, salva no banco. Roda esse script uma vez. Cada vez que adicionar um RPG novo, gera o embedding (pode ser um trigger no banco ou rodar manualmente)
- Cria uma função SQL no Supabase `match_rpgs(query_embedding, match_threshold, match_count)` que retorna os RPGs mais similares
- Modifica a serverless function `/api/chat`: antes de chamar o LLM, gera o embedding da última mensagem do usuário, busca os 5 RPGs mais relevantes, monta o prompt incluindo as descrições deles como contexto, manda pro LLM

### Estrutura do prompt com RAG

```
[system prompt original]

Aqui estão alguns RPGs do nosso catálogo que podem ser relevantes pra essa pergunta:

1. [Nome] — [Descrição] (tags: ...)
2. [Nome] — [Descrição] (tags: ...)
...

Use essas informações pra responder. Se nenhum desses RPGs servir, diga isso honestamente.

Pergunta do usuário: [mensagem]
```

### Como saber que terminou

Quando você pergunta sobre um RPG indie obscuro que está no seu banco, o bot recomenda ele corretamente, mesmo o modelo nunca ter ouvido falar.

### Skill que você ganha

RAG completo, embeddings, busca vetorial, engenharia de prompt avançada. Isso te coloca acima de 95% dos juniores em entrevistas com vagas que envolvem IA.

---

## Fase 7 — Polimento, testes, README e detalhes finais (1 semana)

**Objetivo:** Transformar um projeto "funciona" num projeto "impressionante".

### O que estudar

- **Vitest + React Testing Library**: como testar componentes e hooks. Não precisa cobrir 100%; mira em testar a lógica não-trivial (validação do formulário, hook do chat, função de filtro)
- **SEO básico**: title, meta description, og:image. Use **react-helmet-async** ou o suporte nativo do React 19 pra meta tags
- **Acessibilidade**: roda o Lighthouse no Chrome DevTools. Mira em 90+ nas 4 categorias

### O que construir

- Adiciona testes (mínimo: 1 teste de componente, 1 teste de hook, 1 teste de função utilitária)
- Configura CI no GitHub Actions pra rodar testes a cada PR
- Cria favicon decente (pode usar favicon.io)
- Adiciona open graph image (pré-visualização quando compartilhar no WhatsApp/Twitter)
- Faz a versão mobile estar realmente boa — testa no celular real
- Adiciona uma página `/sobre` explicando o projeto, sua motivação, stack, e linkando seu GitHub e LinkedIn. Isso é descaradamente pro recrutador
- Refina o README do repositório: descrição, screenshots/GIF do funcionamento, stack com badges, decisões arquiteturais (por que Supabase, como RAG funciona, diagrama simples), como rodar localmente, e o que você aprendeu construindo

**O README é metade do valor do projeto pro currículo.**

### Como saber que terminou

Você conseguiria mandar o link pro projeto numa entrevista sem sentir vergonha de nada.

---

## O que estudar em paralelo (continuamente)

Conforme você vai construindo, **lê código de outras pessoas**. Procura projetos open source com Supabase + React + TypeScript no GitHub e olha como organizam. Lê posts da Vercel e Supabase — os blogs deles são didáticos.

**Documenta seu progresso** em algum lugar: Twitter/X, LinkedIn, dev.to, ou um devlog no próprio site. Posts curtos tipo "Hoje aprendi a fazer RAG com pgvector" valem ouro pra recrutador encontrar você organicamente.

---

## Como tratar travamentos

Vai travar. Quando travar:

1. Primeiro, lê a mensagem de erro com calma — 80% das vezes ela já diz o problema
2. Procura no Google a mensagem exata, ou pergunta pra um LLM (Claude, ChatGPT) explicar
3. Isola o problema: reduza a um exemplo mínimo
4. Se ainda não resolveu em 1-2 horas, pede ajuda em comunidades (Discord do Supabase, Stack Overflow, Reddit r/reactjs)

**Não fique 8 horas travado em silêncio. Isso queima motivação.**

---

## Sugestões de nome

- Mesa Aberta
- Sistema Aberto
- Forja de Mesa
- Dado Indie
- RPG Compass
- Rolagem

Escolha um que combine com a vibe e cria um logo simples no Canva ou Figma.

---

## Checklist final do projeto

Antes de considerar o projeto pronto pra portfólio, confirme:

- [ ] Site deployado e acessível por URL pública
- [ ] Deploy automático configurado (push na main → site atualiza)
- [ ] Responsivo no mobile (testado em celular real)
- [ ] Autenticação funcionando (login/logout/proteção de rotas)
- [ ] CRUD de eventos com fluxo de aprovação
- [ ] Chatbot com RAG funcionando (recomenda RPGs do banco)
- [ ] API externa integrada (Open5e ou equivalente)
- [ ] RLS configurado corretamente no Supabase
- [ ] Testes básicos rodando em CI
- [ ] README excelente com screenshots/GIFs
- [ ] Lighthouse 90+ em todas as categorias
- [ ] SEO básico (title, description, og:image)
- [ ] Favicon e branding consistente
- [ ] Página "Sobre" linkando GitHub e LinkedIn

Boa jornada. Foco em terminar fases, não em perfeição. Um projeto deployado e imperfeito vale mais que um projeto perfeito que ficou na sua máquina.
