const paycard = document.getElementById("paycard");
        const paylater = document.getElementById("paylater");
        const display_paycard = document.getElementsByClassName("display-pay-online")[0];
        const display_paylater = document.getElementsByClassName("display-pay-later")[0];
    
        function PayCartSelected() {
            if (display_paycard.classList.contains("d-none")) {
                display_paycard.classList.remove("d-none");
            }
            if (!display_paylater.classList.contains("d-none")){
                display_paylater.classList.add("d-none");
            }
        }
    
        function PayLaterSelected() {
            if (!display_paycard.classList.contains("d-none")) {
                display_paycard.classList.add("d-none");
            }
            if (display_paylater.classList.contains("d-none")){
                display_paylater.classList.remove("d-none");
            }
        }