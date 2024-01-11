/* 
    emailjs 
    URL https://www.emailjs.com/docs/tutorial/creating-contact-form/    

*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail =(e) => {
    e.preventDefault()
 
      //   ServiceID  TemplateID  #form publicKey
    emailjs.sendForm('service_vzawofj','template_zit1qgo','#contact-form','CHajtn3di0_rwW49w')
        .then(() =>{

            contactMessage.textContent = 'Message sent successfully '
            
            setTimeout(() => {contactMessage.textContent = '' }, 5000)

            contactForm.reset()
        }), () =>{
            contactMessage.textContent='Message NOT Sent'
        }
}

contactForm.addEventListener('submit', sendEmail)