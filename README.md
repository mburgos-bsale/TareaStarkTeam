# Formulario de Afiliación Bsale - Fase I

## 📋 Descripción del Proyecto

Este proyecto corresponde a la **Fase I** del desarrollo del formulario de afiliación para clientes de Bsale. El objetivo es modernizar el proceso de captura de información necesaria para la afiliación e inicio del proceso de puesta en marcha de nuevos clientes.

### Contexto

En el marco del proyecto de renovación del formulario de registro, se ha desarrollado una solución que permite a los clientes ingresar y validar la información requerida de manera intuitiva y eficiente, utilizando las mejores prácticas de diseño y desarrollo web.

## 📊 Cumplimiento de Requisitos

| Requisito | Estado | Notas |
|-----------|--------|-------|
| Diseño igual a Figma | ✅ | Pixel-perfect según especificaciones |
| Validación RUT y Razón Social | ✅ | Validación en tiempo real |
| Inicialización Material Components | ✅ | MDC Dialog inicializado correctamente |
| Estructura de datos | ✅ | Datos capturados dinámicamente |
| Popup con valores | ✅ | Modal muestra resumen completo |
| Diseño responsivo | ✅ | Grid layout adaptativo |

## 🚀 Funcionalidades Implementadas

### 1. Validación de Campos Obligatorios
- Validación en tiempo real de campos requeridos (RUT y Razón Social)
- Habilitación/deshabilitación dinámica del botón de envío
- Feedback visual inmediato al usuario

### 2. Estructura de Datos Reactiva
- Captura automática de datos mientras el usuario escribe
- Almacenamiento temporal en memoria durante la sesión
- Preparación para futura persistencia

### 3. Modal de Confirmación
- Popup de confirmación que muestra resumen de datos ingresados
- Opciones de editar o continuar al siguiente formulario
- Navegación fluida entre formularios


### 5. Diseño Responsivo
- Adaptación a diferentes tamaños de pantalla (Unicamente Form)
- Grid layout flexible
- Componentes Material Design adaptativos

## 🎨 Diseño y UI/UX

El diseño se basa en el prototipo proporcionado en **Figma**, siguiendo los lineamientos de:

- **Material Design 3** para componentes interactivos
- **Paleta de colores** corporativa de Bsale (`#0099CC` como color primario)
- **Tipografía Roboto** (400, 500, 600)
- **Espaciado consistente** y jerarquía visual clara
- **Sombras y elevaciones** para profundidad

### Componentes Material Design Utilizados

- `mdc-text-field` - Campos de entrada de texto
- `mdc-button` - Botones de acción
- `mdc-dialog` - Modal de confirmación (popup)
- `mdc-radio` - Botones de selección (Form 02)


