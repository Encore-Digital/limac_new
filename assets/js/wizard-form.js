let currentStep = 1;
const totalSteps = 3;

function setWizardStepActive(step) {
  for(let i=1; i<=3; i++) {
    const icon = document.getElementById(`step-icon-${i}`);
    if (icon) {
      icon.classList.remove('step-icon-soft-success', 'step-icon-soft-primary');
      if(i === step) {
        icon.classList.add('step-icon-soft-success');
      } else {
        icon.classList.add('step-icon-soft-primary');
      }
    }
  }
}

function showStep(step) {
  document.querySelectorAll('.wizard-step').forEach((el, idx) => {
    el.style.display = (idx + 1 === step) ? 'block' : 'none';
  });
  currentStep = step;
  setWizardStepActive(step);
}

function nextStep() {
  if (currentStep < totalSteps) showStep(currentStep + 1);
}
function prevStep() {
  if (currentStep > 1) showStep(currentStep - 1);
}

// SOLO DENTRO DEL DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  showStep(1);

  document.getElementById('multiStepForm').onsubmit = function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    fetch('/tu-endpoint', { method: 'POST', body: formData })
      .then(resp => alert('¡Formulario enviado!'))
      .catch(() => alert('Error al enviar.'));
  };
});
