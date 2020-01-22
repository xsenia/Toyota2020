const accordionKD = () => {
    let kdAccordion = document.querySelectorAll('.kd-accordion');
    let kdAccordionSlide = document.querySelectorAll('.kd-accordion__slide');

    

    kdAccordionSlide.forEach((elem) => {
        elem.addEventListener('click', (event) => {
            let target = event.target;
            if (target.closest('.kd-accordion__slide')) {
                elem.classList.remove('active');
                target.classList.toggle('active');
            }           
        });  
    });

};


accordionKD();