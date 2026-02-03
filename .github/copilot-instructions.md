## Objetivo rápido

Ayuda a agentes de codificación a ser productivos inmediatamente en este repositorio: comandos de desarrollo, convenciones de código, puntos de integración y archivos clave a revisar.

## Comandos concretos (ejemplos)
- Desarrollo: `npm run dev` (Vite sirve en `localhost:8080` según `vite.config.ts`).
- Build producción: `npm run build` (ejecuta `tsc && vite build`).
- Preview del build: `npm run preview`.
- Lint: `npm run lint` (ESLint configurado para `.ts`/`.tsx`).
- Tests (no hay `test` script): usar el binario de Vitest directamente: `npx vitest --run` o `pnpm vitest` — la configuración está en `vitest.config.ts` (entorno `jsdom`, `setupFiles: ./src/test/setup.ts`).

## Arquitectura y por qué importa
- Es una SPA React (Vite + TypeScript) con enfoque en componentes pequeños y reutilizables.
- UI primitives y wrappers (estilo `shadcn/ui`) están en `src/components/ui/` — revisa `button.tsx`, `input.tsx`, etc. Los componentes de la app consumen estas primitivas (ej.: `src/components/Navigation.tsx` importa `@/components/ui/button`).
- Rutas/Pages: hay una página principal en `src/pages/Index.tsx` y el app root en `src/App.tsx` — la app monta componentes (Header, ProjectGrid, About, ContactForm, Footer).

## Patrones y convenciones específicas
- Alias de import: `@` apunta a `./src` (definido en `vite.config.ts` y `tsconfig.json`). Prefiere importaciones absolutas con `@/...`.
- Nombres: componentes en PascalCase y exports por defecto o named según archivo (ver `Header`, `ProjectGrid`, `Navigation`).
- Estilos: Tailwind CSS + variables CSS globales en `src/index.css`. Usa clases utilitarias y tokens (ej.: `bg-background`, `text-foreground`). Revisa `tailwind.config.ts` para contenido y tokens extendidos.
- Animaciones: Framer Motion se usa para la mayoría de entradas/transiciones (`framer-motion` en dependencias).

## Puntos de integración y dependencias externas
- shadcn-style components: `src/components/ui/*` — actúan como la capa de diseño para el resto de la app.
- Iconos: `lucide-react`; animaciones: `framer-motion`.
- Alias/paths sincronizados: `vite.config.ts` (alias) y `tsconfig.json` (paths `@/*`) — mantener ambos consistentes cuando cambies rutas.

## Tests y configuración de pruebas
- Vitest está configurado en `vitest.config.ts` con `environment: 'jsdom'`, `globals: true` y `setupFiles: ['./src/test/setup.ts']`.
- Los tests deben ubicarse siguiendo el patrón `src/**/*.{test,spec}.{ts,tsx}` (según `vitest.config.ts`).

## Archivos/Ubicaciones que revisar primero
- `package.json` — scripts disponibles (`dev`, `build`, `lint`, `preview`).
- `vite.config.ts` — puerto (8080), alias y plugins (React SWC, `componentTagger` en dev).
- `vitest.config.ts` — cómo ejecutar y dónde están los setup files.
- `src/components/ui/` — primitives (botones, inputs, etc.).
- `src/index.css` — tokens CSS (colores, dark mode) y utilidades globales.
- `src/assets/` — imágenes usadas por `ProjectGrid` y otros componentes.

## Qué evitar / notas útiles
- No asumir rutas relativas profundas: usa `@/` imports cuando el archivo existe bajo `src/`.
- No añadas un script `test` sin confirmarlo — actualmente la forma comprobable es `npx vitest`.
- Dev server corre en `8080` (no `5173`). HMR overlay está desactivado (véase `vite.config.ts`).

## Ejemplos rápidos (copiar/pegar)
- Import usando alias: `import { Button } from "@/components/ui/button";`
- Ejecutar tests: `npx vitest --run --reporter verbose` (usa `./src/test/setup.ts` automáticamente).

## Preguntas frecuentes para agentes
- ¿Dónde están los tokens de color? — `src/index.css` y `tailwind.config.ts`.
- ¿Cómo se ejecutan los tests de integración/DOM? — Vitest con `jsdom` (ver `vitest.config.ts`).

Si algo de lo anterior está incompleto o quieres que amplíe ejemplos (por ejemplo, patrón de exports en `src/components/ui` o plantillas de PR), dime qué se necesita y lo ajusto.
