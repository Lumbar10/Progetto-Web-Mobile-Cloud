# Progetto Esame - Web, Mobile e Cloud

## 🎯 Scopo dell'Applicazione
L'applicazione web è un sistema gestionale (catalogo prodotti), progettato per semplificare e centralizzare l'inserimento e la consultazione dei dati.

* **Cosa fa:** Gestisce l'autenticazione degli utenti e fornisce un'interfaccia per visualizzare, caricare, modificare o eliminare i prodotti dal catalogo (operazioni CRUD).
* **A cosa serve:** Permette agli amministratori di gestire l'inventario tramite una dashboard web, senza dover operare direttamente sul database o sul codice sorgente.
* **Perché è utile:** Rende le informazioni accessibili in tempo reale da qualsiasi dispositivo (desktop e mobile), automatizzando i processi operativi e garantendo dati sempre sicuri e sincronizzati.

## 📋 Requisiti Soddisfatti
* **Architettura:** Applicazione web cloud-native strutturata nei 3 livelli richiesti (Frontend, Backend, Database).
* **Pattern:** Implementazione tramite architettura **Single Page Application (SPA)**.
* **Fruibilità:** Interfaccia web responsive e fruibile tramite web anche da dispositivi mobili.
* **Deployment:** Predisposizione per l'esecuzione in locale e tramite Cloud Provider sfruttando Docker.

## 🛠️ Tecnologie Utilizzate
* **Frontend:** Angular, Node.js (TypeScript, HTML, CSS)
* **Backend:** Spring Boot, Java 21, Maven
* **Database:** MySQL
* **Cloud & Deployment:** Docker, Docker Compose

---

## 🚀 1. Esecuzione Cloud (Containerizzata)
Modalità automatizzata cloud-native (Deployment).

### Prerequisiti
* Docker Desktop in esecuzione.

### Comandi
1. Clona il repository:
   ```bash
   git clone https://github.com/Lumbar10/Progetto-Web-Mobile-Cloud.git
   cd Progetto-Web-Mobile-Cloud
   ```
2. Avvia l'infrastruttura (compilazione multi-stage automatica):
   ```bash
   docker compose up -d --build
   ```
3. Accesso all'applicativo: `http://localhost`
4. Spegnimento e pulizia:
   ```bash
   docker compose down -v
   ```

---

## 💻 2. Esecuzione Locale (Manuale)
Modalità di sviluppo e test in locale.

### Prerequisiti
* Java 21 (JDK)
* Node.js e npm
* Server MySQL locale (porta 3306)

### Passaggi
1. **Database:**
   * Crea un database `provadb` su MySQL locale.
   * Importa il file `dump.sql` per popolare le tabelle.
2. **Backend (Spring Boot):**
   * Apri un terminale in `/backend` ed esegui:
     ```bash
     .\mvnw.cmd spring-boot:run
     ```
   * Accesso API: `http://localhost:8080`
3. **Frontend (Angular):**
   * Apri un terminale in `/frontend` ed esegui:
     ```bash
     npm install
     npm start
     ```
   * Accesso Web: `http://localhost:4200`

---

## 🔑 Credenziali di Test
* **Email:** `admin@example.com`
* **Password:** `password`
