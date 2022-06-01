import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector(".feedback-form");
const localKey = "feedback-form-state";
const formData = {};

feedbackForm.addEventListener ("input",throttle(onInputEvent, 500));

function onInputEvent(event) {
    formData[event.target.name] = event.target.value;
    console.log(formData);
    localStorage.setItem(localKey, JSON.stringify(formData));
};

function getLocalStorageData() {
    const saveMessadge = localStorage.getItem(localKey);
    if (saveMessadge) {
        const parsedSaveMessedge = JSON.parse(saveMessadge);
        feedbackForm.email.value = parsedSaveMessedge.email;
        feedbackForm.message.value = parsedSaveMessedge.message;
        return parsedSaveMessedge;
    };
};
getLocalStorageData();

feedbackForm.addEventListener("submit", onSubmit);
function onSubmit(event) {
    event.preventDefault();
    console.log(formData)
    localStorage.removeItem(localKey);
    event.target.reset();
};
