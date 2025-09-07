// script.js

function calculateAge() {
  const birthDateInput = document.getElementById("birthdate");
  const result = document.getElementById("result");
  const birthDate = new Date(birthDateInput.value);
  const today = new Date();

  if (!birthDateInput.value) {
    result.textContent = "يرجى إدخال تاريخ الميلاد.";
    return;
  }

  if (birthDate > today) {
    result.textContent = "تاريخ الميلاد لا يمكن أن يكون في المستقبل!";
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    // استلاف أيام من الشهر السابق
    months--;
    const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += previousMonth.getDate();
  }

  if (months < 0) {
    months += 12;
    years--;
  }

  result.textContent = `🎉 عمرك هو ${years} سنة و ${months} شهر و ${days} يوم.`;
}

function resetCalculator() {
  document.getElementById("birthdate").value = "";
  document.getElementById("result").textContent = "";
}
