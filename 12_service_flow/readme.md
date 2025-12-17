# 🏪 ServiceFlow - Barbería Pro

**Aplicación SaaS profesional para gestión integral de barberías.**

## 🎯 Descripción

ServiceFlow es una solución SaaS completa para la gestión profesional de barberías. Incluye gestión de citas, clientes, servicios, empleados y análisis de negocio.

## ✨ Características Principales

- ✅ **Autenticación JWT** - Login/Register con bcrypt
- ✅ **CRUD Completo** - Clientes, Servicios, Citas, Empleados
- ✅ **Dashboard Analytics** - KPIs y estadísticas en tiempo real
- ✅ **Dark/Light Mode** - Tema dinámico
- ✅ **API RESTful** - 20+ endpoints bien documentados
- ✅ **Diseño Responsivo** - Mobile-first
- ✅ **Base de Datos** - PostgreSQL con migraciones

## 🛠️ Stack Tecnológico

| Componente | Tecnología |
|-----------|-----------|
| **Frontend** | React + Vite |
| **Backend** | Express.js + Node.js |
| **Base de Datos** | PostgreSQL |
| **Autenticación** | JWT + bcrypt |
| **Hosting** | Heroku / Render |
| **UI Framework** | Tailwind CSS / MUI |

## 📁 Estructura

```
service_flow/
├── backend/
│   ├── routes/          # 20+ endpoints
│   ├── controllers/     # Lógica de negocio
│   ├── models/          # Esquemas DB
│   └── middleware/      # Autenticación, validación
├── frontend/
│   ├── components/      # Componentes React
│   ├── pages/          # Vistas
│   └── services/       # API client
└── docs/               # 8 guías técnicas
```

## 📊 Endpoints Principales

- `POST /auth/register` - Registro de usuarios
- `POST /auth/login` - Login
- `GET /appointments` - Listar citas
- `POST /appointments` - Crear cita
- `GET /clients` - Listar clientes
- `GET /services` - Catálogo de servicios
- `GET /dashboard/stats` - Analytics

## 📊 Habilidades Demostradas

- 🏢 SaaS full-stack
- 🗄️ Database design avanzado
- 🔐 Autenticación y autorización
- 📊 Analytics y dashboards
- 📱 Responsive design
- 🔧 API RESTful profesional
- 📚 Documentación completa

## 🔐 Credenciales Demo

- **Email:** barbero@example.com
- **Password:** password123

---

[Volver al Portfolio](../)
