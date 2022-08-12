import {Controller} from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["employer"]

    connect() {
    }

    toggleValidation(element) {
        if (element.value === '' || element.value.length > 25) {
            element.style.borderColor = 'red'
        } else {
            element.style.borderColor = 'green'
        }
    }

    validateEmployer() {
        let element = this.employerTarget
        this.toggleValidation(element)
    }
}
