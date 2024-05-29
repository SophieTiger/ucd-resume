function sendMail(contactForm) {
    emailjs.send("service_76in8zc","rosie", {
        "from_name": contactForm.name.value,
        "project_request": contactForm.projectsummary.value,
        "from_email": contactForm.emailaddress.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            });
}