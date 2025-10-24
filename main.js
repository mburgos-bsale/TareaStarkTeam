/**
 * FORMULARIO DE AFILIACIÓN BSALE - FASE I
 * Renovación del formulario de registro para clientes Bsale
 * Stack: HTML5, CSS3, JavaScript ES6+ y Material Design Components
 * 
 * CONTEXTO:
 * Fase I del proyecto de modernización del proceso de captura de información para
 * afiliación e inicio de puesta en marcha de nuevos clientes Bsale.
 * 
 * ARQUITECTURA:
 * Event-Driven Architecture - Basada en eventos del DOM para mantener separación de
 * responsabilidades y facilitar evolución hacia frameworks modernos en fases futuras.
 * 
 * DECISIONES TÉCNICAS PRINCIPALES:
 * 
 * 1. DOMContentLoaded: Garantiza carga completa del DOM antes de ejecutar lógica,
 *    evitando errores de null reference en scripts async/defer.
 * 
 * 2. Validación en Tiempo Real: Event listeners en 'input' para feedback inmediato
 *    al usuario, mejorando UX y reduciendo abandonos del flujo.
 * 
 * 3. Programación Defensiva: Optional chaining (?.) y nullish coalescing (??)
 *    permiten que el mismo script funcione en múltiples páginas sin errores.
 * 
 * 4. MDC Condicional: Verificación de window.mdc antes de instanciar componentes
 *    para resilencia ante fallos de CDN o entornos de testing.
 * 
 * 5. Modal de Confirmación: Patrón pre-navegación para revisión de datos, reduciendo
 *    errores y mejorando calidad de información capturada.
 * 
 * 6. Estructura Dinámica: Array.map() para construcción de HTML escalable y mantenible,
 *    preparado para migración a template engines o frameworks de componentes.
 * 
 * @author Bsale Development Team
 * @version 1.0.0 - Fase I
 * @date Octubre 2025
 */

document.addEventListener('DOMContentLoaded', () => {
  // Helpers: Abstracción de selección de elementos para mayor legibilidad
  const $ = sel => document.querySelector(sel);
  const byId = id => document.getElementById(id);
  const getValue = id => (byId(id)?.value || '').trim() || '(sin dato)';

  // === NAVEGACIÓN: Gestión del estado activo en el menú lateral ===
  // Determina qué página está activa basándose en la URL actual
  const activeIndex = location.pathname.includes('form_02.html') ? 1 : 0;
  document.querySelectorAll('.menu-item')[activeIndex]?.classList.add('active');

  // === VALIDACIÓN: Control del estado del botón de envío ===
  // Los campos RUT y Razón Social son obligatorios en form_01.html
  const btn = byId('btn-enviar');
  const requiredFields = [byId('rut-empresa'), byId('razon-social')].filter(Boolean);
  
  if (btn && requiredFields.length === 2) {
    const validateForm = () => {
      btn.disabled = !requiredFields.every(field => field.value.trim());
    };
    
    requiredFields.forEach(field => field.addEventListener('input', validateForm));
    validateForm(); // Validación inicial al cargar la página
  }

  // === DIÁLOGO: Confirmación de datos antes de proceder ===
  // Inicialización condicional del componente MDC Dialog
  const dialogEl = $('.mdc-dialog');
  const dialog = window.mdc && dialogEl ? new mdc.dialog.MDCDialog(dialogEl) : null;
  const contentEl = byId('emp-dialog-content');

  // Evento de confirmación: Muestra resumen de datos capturados
  btn?.addEventListener('click', () => {
    if (!dialog || !contentEl) return;

    // Construcción dinámica del contenido del diálogo con los datos del formulario
    const formData = [
      ['RUT de la empresa', 'rut-empresa'],
      ['Razón Social', 'razon-social'],
      ['Dirección de la empresa', 'direccion-empresa'],
      ['Comuna', 'comuna'],
      ['Actividad económica', 'actividad-economica']
    ];

    contentEl.innerHTML = `
      <div class="dialog-grid">
        ${formData.map(([label, id]) => 
          `<span>${label}</span><span>${getValue(id)}</span>`
        ).join('')}
      </div>
    `;
    
    dialog.open();
  });

  // Evento de cierre: Navegación al siguiente formulario si se confirma
  dialog?.listen('MDCDialog:closing', (e) => {
    if (e.detail.action === 'accept') {
      window.location.href = 'form_02.html';
    }
  });
});