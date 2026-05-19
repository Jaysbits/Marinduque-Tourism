/* ═══════════════════════════════════════
   INQUIRY PAGE — inquiry.js
   Form validation and submission handling
═══════════════════════════════════════ */

/* ── VALIDATION HELPERS ── */
function getEl(id)    { return document.getElementById(id); }
function getErr(id)   { return document.getElementById('err-' + id); }

function setError(id, msg) {
  const el  = getEl(id);
  const err = getErr(id);
  el.classList.add('error');
  if (msg) err.textContent = msg;
  err.classList.add('show');
}

function clearError(id) {
  const el  = getEl(id);
  const err = getErr(id);
  el.classList.remove('error');
  err.classList.remove('show');
}

function validateField(id, checkFn, errorMsg) {
  const value = getEl(id).value;
  if (!checkFn(value)) {
    setError(id, errorMsg);
    return false;
  }
  clearError(id);
  return true;
}

/* ── RULES ── */
const rules = {
  fullName:    { check: v => v.trim().length > 0,                     msg: 'Full name is required.' },
  email:       { check: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),   msg: 'Please enter a valid email address.' },
  phone:       { check: v => /^[0-9+\-\s()]{7,15}$/.test(v.trim()),  msg: 'Contact number must contain numbers only (7–15 digits).' },
  destination: { check: v => v !== '',                                 msg: 'Please select a destination.' },
  travelDate:  { check: v => v !== '',                                 msg: 'Please select a travel date.' },
  visitors:    { check: v => parseInt(v, 10) >= 1,                    msg: 'Number of visitors must be at least 1.' },
  message:     { check: v => v.trim().length > 0,                     msg: 'Message is required.' },
};

/* ── LIVE VALIDATION (clear errors on input) ── */
Object.keys(rules).forEach(id => {
  const el = getEl(id);
  if (!el) return;
  el.addEventListener('input', () => {
    if (rules[id].check(el.value)) clearError(id);
  });
  el.addEventListener('change', () => {
    if (rules[id].check(el.value)) clearError(id);
  });
});

/* ── SUBMIT ── */
function submitForm() {
  // Run all validations
  let allValid = true;
  Object.keys(rules).forEach(id => {
    const valid = validateField(id, rules[id].check, rules[id].msg);
    if (!valid) allValid = false;
  });

  // Scroll to first error if any
  if (!allValid) {
    const firstError = document.querySelector('.field-error.show');
    if (firstError) {
      firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return;
  }

  // Collect values for confirmation
  const data = {
    fullName:    getEl('fullName').value.trim(),
    email:       getEl('email').value.trim(),
    phone:       getEl('phone').value.trim(),
    destination: getEl('destination').value,
    travelDate:  getEl('travelDate').value,
    visitors:    getEl('visitors').value,
    message:     getEl('message').value.trim(),
  };

  // Show loading state
  const btn = getEl('submitBtn');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  // Simulate network delay then show success
  setTimeout(() => {
    showSuccess(data.fullName);
    resetForm();
    btn.innerHTML = `Send Inquiry <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg>`;
    btn.disabled = false;
  }, 800);
}

function showSuccess(name) {
  const successEl = getEl('formSuccess');
  const firstName = name.split(' ')[0];
  successEl.querySelector('strong').textContent = `Inquiry Sent, ${firstName}!`;
  successEl.classList.add('show');
  successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });

  // Auto-hide after 8 seconds
  setTimeout(() => successEl.classList.remove('show'), 8000);
}

function resetForm() {
  const fields = ['fullName', 'email', 'phone', 'destination', 'travelDate', 'visitors', 'message'];
  fields.forEach(id => {
    const el = getEl(id);
    if (el.tagName === 'SELECT') el.selectedIndex = 0;
    else el.value = '';
    clearError(id);
  });
}

/* ── SET MIN DATE to today ── */
document.addEventListener('DOMContentLoaded', () => {
  const dateInput = getEl('travelDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }
});