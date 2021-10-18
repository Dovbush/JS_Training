window.onload = () => {
    let agreeCheck = document.getElementById('agree');
    agreeCheck.addEventListener('click', checkAgreement);

    let submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', submitForm);
}

function submitForm(e) {
    e.preventDefault();
    return isFormValid() ? true : false;
}

function isFormValid() {
    let form = document.getElementById('MyValidateForm');
    if (isFieldValid(form.login) && isFieldValid(form.pas1) && isFieldValid(form.pas2)) {
        form.reset();
        submitBtn.setAttribute('disabled', true);
        return true;
    }
    return false;
}

function isFieldValid(field) {
    if (field.value.length > 0) {
        field.className = 'OK';
        return true;
    } else {
        field.className = 'error';
        return false;
    }
}

function checkAgreement(e) {
    let submitBtn = document.getElementById('submitBtn');
    if (e.target.checked) {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', true);
    }
}
