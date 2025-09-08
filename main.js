document.addEventListener('DOMContentLoaded', function () {

    // Get modals
    const basicModal = document.getElementById('basicModal');
    const proModal = document.getElementById('proModal');
    const enterpriseModal = document.getElementById('enterpriseModal');

    // Get buttons that open the modals
    const chooseBasicBtn = document.getElementById('chooseBasic');
    const chooseProBtn = document.getElementById('choosePro');
    const contactSalesBtn = document.getElementById('contactSales');

    // Get all close buttons
    const closeButtons = document.querySelectorAll('.close-button');

    // Function to open a modal
    function openModal(modal) {
        if (modal) {
            modal.style.display = 'block';
        }
    }

    // Function to close a modal
    function closeModal(modal) {
        if (modal) {
            modal.style.display = 'none';
        }
    }

    // Event listeners for buttons
    if (chooseBasicBtn) {
        chooseBasicBtn.onclick = function(e) {
            e.preventDefault();
            openModal(basicModal);
        }
    }

    if (chooseProBtn) {
        chooseProBtn.onclick = function(e) {
            e.preventDefault();
            openModal(proModal);
        }
    }

    if (contactSalesBtn) {
        contactSalesBtn.onclick = function(e) {
            e.preventDefault();
            openModal(enterpriseModal);
        }
    }

    // Event listener for close buttons
    closeButtons.forEach(button => {
        button.onclick = function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        }
    });

    // Event listener for window click to close modals
    window.onclick = function(event) {
        if (event.target == basicModal) {
            closeModal(basicModal);
        }
        if (event.target == proModal) {
            closeModal(proModal);
        }
        if (event.target == enterpriseModal) {
            closeModal(enterpriseModal);
        }
    }
});
