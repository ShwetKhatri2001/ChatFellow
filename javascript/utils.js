const pswrdField = document.querySelector(".form input[type='password']"),
  toggleIcon = document.querySelector(".form .field i"),
  uploadField = document.querySelector(".form input[type='file']"),
  uploadLabel = document.querySelector(".form .field .custom-file-upload");

toggleIcon.onclick = () => {
  if (pswrdField.type === "password") {
    pswrdField.type = "text";
    toggleIcon.classList.add("active");
  } else {
    pswrdField.type = "password";
    toggleIcon.classList.remove("active");
  }
};

uploadField.onchange = () => {
  let fileName = uploadField.files[0].name;
  if (fileName.length > 30)
    fileName =
      fileName.substr(0, 10) + "..." + fileName.substr(fileName.length - 20);
  uploadLabel.textContent = fileName;
};
