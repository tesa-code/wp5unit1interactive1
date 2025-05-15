// script.js
document.querySelectorAll('.component').forEach(component => {
  component.addEventListener('click', () => {
    const targetId = component.dataset.target;
    const target = document.getElementById(targetId);
    
    // Hide all other sub-items
    document.querySelectorAll('.sub-items').forEach(el => {
      if (el !== target) {
        el.classList.add('hidden');
      }
    });

    // Toggle current target
    target.classList.toggle('hidden');
  });
});
