import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="show-new-bookmark"
export default class extends Controller {
  static targets = ["form"]
  connect() {
    console.log("It works")
  }

  reveal() {
    console.log("click")
    this.formTarget.classList.toggle("form-hidden")
  }
}
