# SOCIAL_IS | Expert Monorepo Platform

![Premium UI](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop)

Bienvenido a **SOCIAL_IS**, un ecosistema de red social de alto nivel gestionado como un **Monorepo** con **Bun Workspaces**. Este proyecto integra una red social premium con un laboratorio de ingeniería DevOps en una sola unidad arquitectónica.

## 🚀 Vision General

### Características Clave:

- **Monorepo con Bun Workspaces**: Gestión unificada de dependencias y scripts globales para Backend, Frontend y Laboratorio de Estrés.
- **Expert UI/UX**: Diseño de 3 columnas inspirado en las plataformas líderes mundiales.
- **DevOps Command Center**: Scripts centralizados en `/scripts` para caos, estrés y simulaciones.
- **Screaming Architecture**: Organización intuitiva por dominios de negocio.

## 🛠️ Stack Tecnológico

- **Runtime & Orchestration**: Bun (Monorepo Workspaces).
- **Core App**: Next.js 14, Express, TypeScript, Prisma ORM.
- **Database**: PostgreSQL (Dockerized).

## 📥 Configuración Rápida (Monorepo)

### 1. Requisitos Previos

- [Bun](https://bun.sh/)
- [Docker](https://www.docker.com/)

### 2. Instalación Global

Desde la raíz del proyecto, instala todas las dependencias de todos los paquetes:

```bash
bun install
```

### 3. Base de Datos

Levanta el contenedor y prepara Prisma desde la raíz:

```bash
docker-compose up -d
bun run prisma:generate
bun run prisma:migrate
bun run prisma:seed
```

### 4. Lanzamiento de Servicios

Inicia todo el ecosistema con un solo comando:

```bash
bun run dev:all
```

O de forma individual:

- `bun run dev:back`
- `bun run dev:front`
- `bun run dev:lab`

## 🧪 DevOps Command Center (`/scripts`)

Este proyecto centraliza sus herramientas de ingeniería en la raíz para un control total:

| Script             | Propósito              | Comando                       |
| ------------------ | ---------------------- | ----------------------------- |
| `stress-test.js`   | Prueba de carga masiva | `bun run lab:stress`          |
| `chaos_devs.sh`    | Inyección de fallos    | `bun run lab:chaos`           |
| `dev_simulator.sh` | Simulador de tráfico   | `sh scripts/dev_simulator.sh` |

## 🏗️ Estructura del Ecosistema

```text
social_is/
├── backend/        # API Core (Screaming Mode)
├── frontend/       # UI Premium (Next.js 14)
├── infra/
│   └── stress-lab/ # Laboratorio de Estrés (Next.js 16)
├── scripts/        # DevOps Command Center
├── package.json    # Workspace Config
└── README.md
```

---

**Desarrollado con ❤️ por el Equipo de Expertos DevOps SOCIAL_IS** 🚀
