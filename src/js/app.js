import Validator from './components/validator/Validator';

const container = document.querySelector("#card-validator-container");
const validator = new Validator(container);
validator.bindToDOM();
