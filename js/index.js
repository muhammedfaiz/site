function validate(event) {
  event.preventDefault();
  const nameMessage = document.getElementById("from_name");
  const emailMessage = document.getElementById("email_id");
  const message = document.getElementById("message");
  const error = document.querySelector(".err");

  if (nameMessage.value === "" || emailMessage.value === "" || message.value === "") {
    error.innerHTML = "* Please enter all the details to send message...";
    return false;
  } else {
    const namePattern = /^[a-zA-z]+$/;
    const emailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z]+.[A-Za-z]{2,}$/;
    if (namePattern.test(nameMessage.value) === false) {
      error.innerHTML =
        "* Name should contain only alphabets and no numbers or special characters.";
      return false;
    } else if (emailPattern.test(emailMessage.value) === false) {
      error.innerHTML = "* Email is not valid.";
      return false;
    } else {
        error.innerHTML='';
        const form=document.getElementById('form');
        const serviceID="service_lzvib1j";
        const templateID='template_9nymk2d';
    
        emailjs.sendForm(serviceID, templateID, form).then((res)=>{
            const success=document.querySelector('.send');
            success.innerHTML="Message have been successfully sended !!!";
            console.log(res.status);
        })
        return true;
    }
  }
}


