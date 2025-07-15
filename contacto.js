
  function toggleFAQ(element) {
    const answer = element.querySelector('.faq-answer');
    const icon = element.querySelector('.rotate-icon');

    // Cerrar otros
    document.querySelectorAll('.faq-answer').forEach(a => {
      if (a !== answer) a.classList.add('hidden');
    });
    document.querySelectorAll('.rotate-icon').forEach(i => {
      if (i !== icon) i.classList.remove('rotate-180');
    });

    // Toggle actual
    answer.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
  }

