# Edgar Antonio - Portfolio

Portafolio personal convertido de Laravel + Inertia.js a React puro.

## 🚀 Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Navigation/     # Componentes de navegación
│   ├── CloudWaves.jsx  # Animación de ondas
│   ├── ThoughtCard.jsx # Tarjetas con flip
│   └── ...
├── pages/              # Páginas principales
│   ├── Welcome.jsx     # Página principal
│   ├── Heart.jsx       # Página del corazón
│   ├── Thoughts.jsx    # Página de pensamientos
│   └── History.jsx     # Página de historia
├── constants/          # Constantes y configuración
├── css/               # Estilos CSS
└── main.jsx           # Punto de entrada
```

## 🎨 Características

- **React Router** para navegación
- **Tailwind CSS** para estilos
- **Animaciones CSS** personalizadas
- **Responsive Design**
- **Componentes interactivos** (flip cards, modales)
- **Música de fondo** automática
- **Navegación suave** entre secciones

## 🌐 Deploy

### Netlify (Recomendado)
1. Conecta tu repositorio
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Conecta tu repositorio
2. Framework preset: Vite
3. Deploy automático

## 📂 Assets Necesarios

Asegúrate de copiar estas carpetas del proyecto Laravel:

```
public/images/     → react-portfolio/public/images/
public/media/      → react-portfolio/public/media/
```

## 🔧 Personalización

- **Imágenes**: Actualiza `src/constants/paths.js`
- **Colores**: Modifica `tailwind.config.js`
- **Animaciones**: Edita `src/css/index.css`
- **Contenido**: Actualiza los componentes en `src/pages/`

## 📱 Responsive

El portafolio está optimizado para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)