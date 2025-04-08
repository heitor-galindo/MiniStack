# MiniStack 🚀 - Projeto Open Source — Simulando a Infraestrutura de uma Startup Real

Este projeto tem como objetivo construir uma infraestrutura completa, 100% open source, simulando o ambiente real de uma startup. A stack será executada em um cluster bare metal (notebooks antigos) usando Kubernetes (k3s).

---

## ✅ Checklist de Implementação

### 1. 🧱 Infraestrutura e Cluster

- [ ] Instalar Ubuntu Server nos notebooks
- [ ] Configurar rede local (IP fixo, SSH, etc.)
- [ ] Instalar `k3s` (1 nó server + 1-2 nós agents)
- [ ] Instalar `kubectl` e `k9s` para gerenciamento

---

### 2. 🌐 Proxy, DNS e Autenticação

- [ ] Deploy do `Traefik` como Ingress Controller
- [ ] Configurar DNS local ou `/etc/hosts` para testes
- [ ] Deploy do `Authentik` para autenticação (OIDC)

---

### 3. 📦 Repositórios e Artefatos

- [ ] Deploy do `Nexus` (Docker registry + Maven, backend em MinIO)

---

### 4. 🔍 Monitoramento e Uptime

- [ ] Deploy do `Uptime Kuma` (monitoramento simples)
- [ ] Deploy do `Prometheus` (coleta de métricas)
- [ ] Deploy do `Grafana` (dashboards)
- [ ] Deploy do `ELK Stack` (logs)

---

### 5. 💾 Armazenamento e Banco de Dados

- [ ] Deploy do `MinIO` (standalone ou distribuído)
- [ ] Deploy do `PostgreSQL` com réplica (Bitnami ou Patroni)

---

### 6. ⚙️ Aplicações e Dev Tools

- [ ] Deploy do backend (`Spring Boot`) e frontend (`React`)
- [ ] Deploy do `RabbitMQ` (mensageria entre apps)
- [ ] Deploy do `App A` (produtora) e `App B` (consumidora)
- [ ] Deploy do `Jenkins` (CI/CD com pipelines)
- [ ] Conectar ao repositório público no `GitHub`

---

### 7. 🧠 Dados e Machine Learning

- [ ] Deploy do `MLflow` (tracking de modelos, backend no MinIO)
- [ ] Configurar `DVC` (versionamento de datasets no MinIO)
- [ ] Deploy do `Airflow` (DAGs simulando pipelines ETL)

---

## 📢 Contribua!

O projeto é aberto para a comunidade. Quer colaborar? Fique à vontade para comentar, sugerir ou abrir um PR!

📍 Repositório oficial: [em breve no GitHub]

---

#kubernetes #opensource #infra #devops #springboot #react #ml #startup #projeto
