import {Controller} from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["container", "firstName", "lastName", "phoneNumber", "emailAddress"]

    connect() {
        // console.log('ok')
    }

    toggleValidation(element) {
        if (element.value === '' || element.value.length > 25) {
            element.style.borderColor = 'red'
        } else {
            element.style.borderColor = 'green'
        }
    }

    reformatPhoneNumber(element) {
        let value = element.value.replace(/\D[^\.]/g, "");
        this.phoneNumberTarget.value = value.slice(0, 3) + "-" + value.slice(3, 6) + "-" + value.slice(6);
    }

    emailValidator(email) {
        return (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(this.emailAddressTarget.value)
    }


    validateFirstName() {
        let element = this.firstNameTarget
        this.toggleValidation(element)
    }

    validateLastName() {
        let element = this.lastNameTarget
        this.toggleValidation(element)
    }

    validatePhoneNumber() {
        let element = this.phoneNumberTarget
        if (element.value !== '') {
            this.reformatPhoneNumber(element)
        }
    }

    validateEmailAddress() {
        let element = this.emailAddressTarget
        if (element.value !== '') {
            const result = this.emailValidator(element.value)
            if (result) {
                element.style.borderColor = 'green'
            } else {
                element.style.borderColor = 'red'
            }
        }
    }
}
