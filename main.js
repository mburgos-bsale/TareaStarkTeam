document.addEventListener('DOMContentLoaded', () => {
  const $ = sel => document.querySelector(sel);
  const byId = id => document.getElementById(id);

  // Activar item del sidebar según página
  const items = document.querySelectorAll('.menu-item');
  const idx = location.pathname.includes('form_02.html') ? 1 : 0;
  items[idx]?.classList.add('active');

  // Habilitar botón ENVIAR cuando RUT y Razón Social tengan texto (form_01)
  const btn = byId('btn-enviar');
  const rut = byId('rut-empresa');
  const razon = byId('razon-social');
  if (btn && rut && razon) {
    const update = () => { btn.disabled = !(rut.value.trim() && razon.value.trim()); };
    rut.addEventListener('input', update);
    razon.addEventListener('input', update);
    update();
  }

  // Diálogo de confirmación (solo si existe MDC y el diálogo en el DOM)
  const dialogEl = $('.mdc-dialog');
  const dialog = (window.mdc && dialogEl) ? new mdc.dialog.MDCDialog(dialogEl) : null;
  const contentEl = byId('emp-dialog-content');

  btn?.addEventListener('click', () => {
    if (!dialog) return;
    const v = id => (byId(id)?.value || '').trim() || '(sin dato)';
    contentEl && (contentEl.innerHTML = `
      <div class="dialog-grid">
        <span>RUT de la empresa</span><span>${v('rut-empresa')}</span>
        <span>Razón Social</span><span>${v('razon-social')}</span>
        <span>Dirección de la empresa</span><span>${v('direccion-empresa')}</span>
        <span>Comuna</span><span>${v('comuna')}</span>
        <span>Actividad económica</span><span>${v('actividad-economica')}</span>
      </div>
    `);
    dialog.open();
  });

  dialog?.listen('MDCDialog:closing', (e) => {
    if (e.detail.action === 'accept') window.location.href = 'form_02.html';
  });
});