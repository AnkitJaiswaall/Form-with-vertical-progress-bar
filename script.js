document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".step");
  const lines = document.querySelectorAll(".line");
  const formSections = document.querySelectorAll(".form-section");
  const nextButtons = document.querySelectorAll(".next-btn");
  const prevButtons = document.querySelectorAll(".prev-btn");
  const reviewDetails = document.getElementById("reviewDetails");
  let currentSection = 0;

  function showSection(sectionIndex) {
    formSections.forEach((section, index) => {
      if (index === sectionIndex) {
        section.classList.add("active");
        section.classList.add("completed");
      } else {
        section.classList.remove("active");
      }
    });

    steps.forEach((step, index) => {
      if (index === sectionIndex) {
        step.classList.add("active");
        step.classList.add("completed");
      } else {
        step.classList.remove("active");
      }
    });

    lines.forEach((line, index) => {
      if (index < sectionIndex) {
        line.classList.add("active");
      } else {
        line.classList.remove("active");
      }
    });

    currentSection = sectionIndex;

    if (currentSection === formSections.length - 1) {
      displayReview();
    }
  }

  nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentForm = formSections[currentSection].querySelector("form");
      if (validateForm(currentForm)) {
        showSection(currentSection + 1);
      }
    });
  });

  prevButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (currentSection > 0) {
        showSection(currentSection - 1);
      }
    });
  });

  function validateForm(form) {
    const inputs = form.querySelectorAll("input, textarea, select");
    let isValid = true;
    inputs.forEach((input) => {
      if (input.hasAttribute("required") && !input.value.trim()) {
        isValid = false;
        input.classList.add("error");
      } else {
        input.classList.remove("error");
      }
    });
    return isValid;
  }

  // Add event listener to the clear button in company details section
  const companyClearBtn = document.querySelector(".company-details .clear-btn");
  companyClearBtn.addEventListener("click", function () {
    const companyDetailsForm = document.getElementById("companyDetailsForm");
    companyDetailsForm.reset();
  });

  // Add event listener to the clear button in job details section
  const jobClearBtn = document.querySelector(".job-details .clear-btn");
  jobClearBtn.addEventListener("click", function () {
    const jobDetailsForm = document.getElementById("jobDetailsForm");
    jobDetailsForm.reset();
  });

  function displayReview() {
    const companyDetailsForm = document.getElementById("companyDetailsForm");
    const jobDetailsForm = document.getElementById("jobDetailsForm");

    const companyName = companyDetailsForm.querySelector("#companyName").value;
    const companyEmail = companyDetailsForm.querySelector("#email").value;
    const companyPhone = companyDetailsForm.querySelector("#phoneNumber").value;
    const companyAddress = companyDetailsForm.querySelector("#address").value;
    const country = companyDetailsForm.querySelector("#country").value;
    const state = companyDetailsForm.querySelector("#state").value;
    const city = companyDetailsForm.querySelector("#city").value;
    const zipCode = companyDetailsForm.querySelector("#zipCode").value;
    const dateEstablished =
      companyDetailsForm.querySelector("#dateEstablished").value;
    const category = companyDetailsForm.querySelector("#category").value;
    const companyWebsite =
      companyDetailsForm.querySelector("#companyWebsite").value;
    const companyDescription = companyDetailsForm.querySelector(
      "#companyDescription"
    ).value;

    const jobTitle = jobDetailsForm.querySelector("#jobTitle").value;
    const jobCategory = jobDetailsForm.querySelector("#jobCategory").value;
    const jobType = jobDetailsForm.querySelector(
      'input[name="jobType"]:checked'
    ).value;
    const jobMode = jobDetailsForm.querySelector(
      'input[name="workMode"]:checked'
    ).value;
    const experience = jobDetailsForm.querySelector("#experience").value;
    const salaryCurrency =
      jobDetailsForm.querySelector("#salaryCurrency").value;
    const salaryAmount = jobDetailsForm.querySelector("#salaryAmount").value;
    const fromDate = jobDetailsForm.querySelector("#fromDate").value;
    const toDate = jobDetailsForm.querySelector("#toDate").value;
    const jobSchedule = jobDetailsForm.querySelector(
      'input[name="jobSchedule"]:checked'
    ).value;
    const vacancy = jobDetailsForm.querySelector("#vacancy").value;
    const jobDescription =
      jobDetailsForm.querySelector("#jobDescription").value;
    const requirements = jobDetailsForm.querySelector("#requirements").value;

    const cssClass = `
    .custom-style {
        color: red;
        font-size: 16px;
    }

    .bg{
     
        background-image: url('./amazon-bg.jpeg');
        width: 100%;
        height: 230px;
        background-size: contain;
        /* background-repeat: no-repeat; */
        background-position: center;
        border: 1px solid transparent;
        border-radius:20px;
      }
      .logo{
          margin-top: -50px;
          margin-left: 40px;
          height: 100px;
          width: 110px;
          border: 1px solid transparent;
          border-radius: 10px;
      }
      .job-title{
          margin-left: 20px;
      }
      .url{
          margin-left: 20px;
      }
      .jdh{
          display: flex; 
          justify-content: space-between;
          margin-top: 30px;
          color: gray;
      }
      .jd{
          display: flex;
          justify-content:space-between;
          margin-top:-10px;
      }
      .job-description{
          color: gray;
      }
      .post-btn{
          margin-top: 30px;
          display: flex;
          margin-left: 650px;
      }
`;

    // Create style element and append it to the document head
    const styleElement = document.createElement("style");
    styleElement.innerHTML = cssClass;
    document.head.appendChild(styleElement);

    reviewDetails.innerHTML = `
            

            <div id="reviewDetails">
                    <div>
                       <div class="bg"></div>
                        <img class="logo" src="./amazon-logo.png" alt="logo">
                    </div>
                    <h2 class="job-title">${jobTitle}</h2>
                    <a class="url" href="${companyWebsite}">${companyWebsite}</a>
                    <div>
                        <div >
                            <span class="jdh">
                                <div>Department</div>
                                <div>Job Type</div>
                                <div>Work Mode</div>
                                <div>Salary</div>
                                <div>Job Type</div>
                            </span>
                            <span  class="jd">
                            <h4>${jobCategory}</h4>
                            <h4>${jobType}</h4>
                            <h4>${jobMode}</h4>
                            <h4>${salaryAmount} ${salaryCurrency}</h4>
                            <h4>${jobType}</h4>

                            </span>
                        </div>
                        <h3>Job Description</h3>
                        <div class="job-description">
                        <ul>
                        ${jobDescription
                          .split("\n")
                          .map((item) => `<li>${item}</li>`)
                          .join("")}
                    </ul>
                    </div>
                        <h3>Requirements</h3>
                        <div class="job-description">
                        <ul>
              ${requirements
                .split("\n")
                .map((item) => `<li>${item}</li>`)
                .join("")}
          </ul>
                        </div>
                    </div>
            
                  
          `;
  }

  showSection(currentSection);
});

function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const email = emailInput.value.trim();

  if (validateEmailFormat(email)) {
    emailError.textContent = ""; // Clear error message if email is valid
  } else {
    emailError.textContent = "Please enter a valid email address"; // Display error message
  }
}

function validateEmailFormat(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function validatePhoneNumber() {
  const phoneNumberInput = document.getElementById("phoneNumber");
  const phoneNumberError = document.getElementById("phoneNumberError");
  const phoneNumber = phoneNumberInput.value.trim();

  if (validatePhoneNumberFormat(phoneNumber)) {
    phoneNumberError.textContent = ""; // Clear error message if phone number is valid
  } else {
    phoneNumberError.textContent = "Please enter a valid phone number"; // Display error message
  }
}

function validatePhoneNumberFormat(phoneNumber) {
  const pattern = /^\d{10}$/; // Assuming a 10-digit phone number format
  return pattern.test(phoneNumber);
}

function validateZipCode() {
  const zipCodeInput = document.getElementById("zipCode");
  const zipCodeError = document.getElementById("zipCodeError");
  const zipCode = zipCodeInput.value.trim();
  const zipCodePattern = /^\d{6}$/;

  if (zipCodePattern.test(zipCode)) {
    zipCodeInput.classList.remove("error");
    zipCodeError.textContent = "";
  } else {
    zipCodeInput.classList.add("error");
    zipCodeError.textContent = "Zip code must be 6 digits.";
  }
}

function validateWebsite() {
  const inputField = document.getElementById("companyWebsite");
  const errorSpan = document.getElementById("companyWebsiteError");
  const pattern =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

  if (inputField && errorSpan) {
    const value = inputField.value.trim();
    const isValid = pattern.test(value);

    if (!isValid) {
      errorSpan.textContent = "Invalid website URL";
      inputField.classList.add("error");
    } else {
      errorSpan.textContent = "";
      inputField.classList.remove("error");
    }
  }
}

function validateSalary() {
  const inputField = document.getElementById("salaryAmount");
  const errorSpan = document.getElementById("salaryError");

  if (inputField && errorSpan) {
    const value = inputField.value.trim();

    if (isNaN(value)) {
      errorSpan.textContent = "Salary must be a number";
      inputField.classList.add("error");
    } else {
      errorSpan.textContent = "";
      inputField.classList.remove("error");
    }
  }
}
