# 🚀 MiniStack — Simulando a Infra de uma Startup 100% Open Source

Este projeto é uma simulação realista da infraestrutura completa de uma startup, construída inteiramente com tecnologias open source e executada em um cluster local bare metal (notebooks antigos). A ideia é aprender, documentar e compartilhar toda a experiência como se eu fosse o único desenvolvedor da empresa.

📡 Acesse alguns serviços via: [www.ministack.com.br](https://www.ministack.com.br)  
📁 Repositório oficial: [github.com/heitor-galindo/MiniStack](https://github.com/heitor-galindo/MiniStack)

---

## ✅ Plano de Implementação

### 1. 🧱 Infraestrutura e Cluster
- [ ] Instalar Ubuntu Server nos notebooks
- [ ] Configurar rede local (IP fixo, SSH, etc.)
- [ ] Instalar `k3s` (1 nó server + 1-2 nós agents)
- [ ] Instalar `kubectl` e `k9s` para gerenciamento

---

### 2. 🌐 Proxy, DNS e Autenticação
- [ ] Deploy do `Traefik` como Ingress Controller
- [ ] Configurar DNS local e/ou via Cloudflare
- [ ] Deploy do `Authentik` para autenticação centralizada (OIDC)

---

### 3. 📦 Repositórios e Artefatos
- [ ] Deploy do `Nexus` (Docker registry + Maven, com backend em `MinIO`)

---

### 4. 🔍 Monitoramento e Uptime
- [ ] Deploy do `Uptime Kuma` (monitoramento simples e externo)
- [ ] Deploy do `Prometheus` (coleta de métricas)
- [ ] Deploy do `Grafana` (dashboards detalhados)
- [ ] Deploy do `ELK Stack` (logs centralizados)

---

### 5. 💾 Armazenamento e Banco de Dados
- [ ] Deploy do `MinIO` (compatível com S3, para dados e arquivos)
- [ ] Deploy do `PostgreSQL` com réplica (Bitnami ou Patroni)

---

### 6. ⚙️ Aplicações e Dev Tools
- [ ] Deploy do backend com `Spring Boot`
- [ ] Deploy do frontend com `React`
- [ ] Deploy do `RabbitMQ` (mensageria entre apps)
- [ ] Deploy de `App A` (produtora de dados) e `App B` (consumidora/processadora)
- [ ] Deploy do `Jenkins` (pipelines CI/CD)
- [ ] Conexão com repositório público no `GitHub`

---

### 7. 🧠 Dados e Machine Learning
- [ ] Deploy do `MLflow` (tracking de modelos, backend no `MinIO`)
- [ ] Configurar `DVC` (versionamento de datasets com `MinIO`)
- [ ] Deploy do `Airflow` (pipelines ETL de exemplo)

---

## 🧪 Fase Atual
Estamos iniciando com apenas 1 máquina (notebook com i3, 12 GB RAM, SSD 512 GB), rodando os serviços em modo all-in-one. A infraestrutura será expandida gradualmente com mais máquinas bare metal para simular um cluster distribuído real.

---

## 🙌 Contribua
O projeto é aberto para a comunidade. Se você curte DevOps, backend, ML ou apenas quer explorar uma stack completa em casa, acompanhe, comente ou contribua!

---

#kubernetes #opensource #infraestrutura #devops #ml #springboot #react #startup #homelab
