

document.getElementById('change-plan').addEventListener('click', function() {
    const planType = document.querySelector('.plan-type');
    const planPrice = document.querySelector('.plan-price');

    if (planType.textContent === 'Annual Plan') {
        planType.textContent = 'Monthly Plan';
        planPrice.textContent = '$38.99/month';
    } else {
        planType.textContent = 'Annual Plan';
        planPrice.textContent = '$459.99/year';
    }
});
