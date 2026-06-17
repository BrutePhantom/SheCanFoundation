const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Check that the user has filled in every required field.
  if (name === "" || email === "" || message === "") {
    formStatus.textContent = "Please fill in all fields.";
    formStatus.className = "form-status error";
    return;
  }

  const submittedData = {
    name: name,
    email: email,
    message: message,
    submittedAt: new Date().toISOString()
  };

  // Store the latest successful submission in localStorage.
  localStorage.setItem("sheCanContactForm", JSON.stringify(submittedData));

  // Display the submitted data in the browser console.
  console.log("Submitted form data:", submittedData);

  formStatus.textContent = "Form Submitted Successfully";
  formStatus.className = "form-status success";

  contactForm.reset();
});
