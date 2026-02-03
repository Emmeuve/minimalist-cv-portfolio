# 🎨 Portfolio Moderno - React + TypeScript + Tailwind CSS

Un portfolio profesional y moderno construido con las últimas tecnologías web.

## ✨ Características

- 🎯 **Diseño Moderno y Responsivo**: Se adapta perfectamente a cualquier dispositivo
- 🎨 **Animaciones Fluidas**: Transiciones y efectos con Framer Motion
- 🎭 **Componentes shadcn/ui**: UI components de alta calidad
- 📱 **Mobile-First**: Optimizado para dispositivos móviles
- ⚡ **Performance Optimizado**: Carga rápida y experiencia fluida
- 🎯 **SEO Friendly**: Optimizado para motores de búsqueda
- 🌙 **Tema Oscuro Elegante**: Diseño oscuro profesional

## 🚀 Stack Tecnológico

- **Framework**: React 18 + Vite
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **UI Components**: shadcn/ui
- **Iconos**: Lucide React

## 📦 Instalación

### Prerequisitos

- Node.js 18+ 
- npm o pnpm

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/tu-portfolio.git
cd tu-portfolio
```

2. **Instalar dependencias**
```bash
npm install
# o
pnpm install
```

3. **Instalar dependencias adicionales**
```bash
# Framer Motion para animaciones
npm install framer-motion

# Lucide React para iconos
npm install lucide-react

# Si no tienes shadcn/ui configurado
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card badge input textarea
```

4. **Iniciar servidor de desarrollo**
```bash
npm run dev
# o
pnpm dev
```

5. **Abrir en el navegador**
```
http://localhost:5173
```

## 🎨 Personalización

### 1. Datos Personales

Edita el archivo `src/data/portfolio-data.ts` con tu información:

```typescript
export const portfolioData: PortfolioData = {
  personal: {
    name: "Tu Nombre",
    title: "Tu Título Profesional",
    location: "Tu Ciudad, País",
    email: "tu@email.com",
    // ... más campos
  },
  // ... resto de la configuración
};
```

### 2. Colores y Tema

Modifica `tailwind.config.js` para cambiar los colores:

```javascript
theme: {
  extend: {
    colors: {
      // Personaliza tus colores aquí
    },
  },
}
```

### 3. Fuentes

En `index.css` puedes cambiar las fuentes de Google Fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Tu-Fuente:wght@300;400;700&display=swap');
```

## 📁 Estructura del Proyecto

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.tsx           # Sección hero/inicio
│   │   ├── Projects.tsx       # Sección de proyectos
│   │   ├── Experience.tsx     # Experiencia laboral
│   │   ├── Skills.tsx         # Habilidades técnicas
│   │   ├── Contact.tsx        # Formulario de contacto
│   │   ├── Navigation.tsx     # Barra de navegación
│   │   └── Footer.tsx         # Pie de página
│   ├── data/
│   │   └── portfolio-data.ts  # Todos tus datos
│   ├── types/
│   │   └── portfolio.ts       # TypeScript types
│   ├── App.tsx                # Componente principal
│   └── index.css              # Estilos globales
├── public/                    # Archivos estáticos
├── tailwind.config.js         # Configuración de Tailwind
├── tsconfig.json              # Configuración de TypeScript
└── package.json
```

## 🎯 Secciones del Portfolio

1. **Hero**: Presentación inicial con tu nombre, título y enlaces sociales
2. **Proyectos**: Showcase de tus mejores proyectos con detalles
3. **Experiencia**: Timeline de tu experiencia laboral
4. **Habilidades**: Visualización de tus skills técnicos
5. **Contacto**: Formulario y datos de contacto

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build
npm run build

# La carpeta dist/ es tu build de producción
```

### GitHub Pages

Agrega a `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/nombre-repo/',
  // ...
})
```

Luego:
```bash
npm run build
# Push la carpeta dist/ a la rama gh-pages
```

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
```

## 🎨 Personalización Avanzada

### Agregar más secciones

1. Crea un nuevo componente en `src/components/`
2. Importa y úsalo en `App.tsx`
3. Agrega los datos necesarios en `portfolio-data.ts`

### Cambiar animaciones

Modifica los valores de Framer Motion en cada componente:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea tu Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 💡 Tips

- Usa imágenes optimizadas (WebP) para mejor rendimiento
- Mantén los datos en `portfolio-data.ts` actualizados
- Prueba en diferentes dispositivos antes de deployar
- Usa herramientas como Lighthouse para optimizar el performance

## 🆘 Soporte

Si tienes alguna pregunta o problema, puedes:

- Abrir un issue en GitHub
- Contactarme por email: tu@email.com
- Consultar la documentación de las tecnologías usadas

## 🎉 ¡Listo!

Ahora tienes un portfolio profesional y moderno. Personalízalo con tu información y proyectos, y compártelo con el mundo.

---

Hecho con ❤️ usando React, TypeScript y Tailwind CSS