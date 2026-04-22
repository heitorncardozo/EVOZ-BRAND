const revealElements = document.querySelectorAll(".reveal");
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => observer.observe(el));

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  formMessage.textContent = "Enviando...";

  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Falha ao enviar.");
    }

    form.reset();
    formMessage.textContent = "Lead enviado com sucesso. Em breve entraremos em contato.";
    formMessage.style.color = "#2f5d5a";
  } catch (error) {
    formMessage.textContent = error.message;
    formMessage.style.color = "#b23a2c";
  }
});
