// TODO: 2. Select all elements needed

const formTag = document.querySelector("#quiz-form");
const answerInputs = document.querySelectorAll(" .answer");
const allQuestions = document.querySelectorAll(".question-item");
const msg = document.querySelector("#alert");

const answerArray = Array.from(answerInputs); //Nodelist to array
// TODO: 3. Create a submit event listener for the form that does the following.
formTag.addEventListener("submit", (e) => {
  e.preventDefault(); //To avoid reloading the page

  //For all unchecked questions item to be marked wrong by default
  allQuestions.forEach((questionItem) =>
    questionItem.classList.add("incorrect")
  );

  // returning only the checked options
  const checkedAnswer = answerArray.filter((answer) => answer.checked);

  //looping throught the returned options to check if the value attribute is set to true
  checkedAnswer.forEach((each) => {
    const styledParent = each.closest(".question-item"); //To style the parent of the checked options
    const correctOption = each.value === "true"; //(To set condtions for the options)

    if (correctOption) {
      styledParent.classList.add("correct");
      styledParent.classList.remove("incorrect");
    } else {
      styledParent.classList.remove("correct");
      styledParent.classList.add("incorrect");
    }
    const alltrueOptions = checkedAnswer.every((ans) => ans.value === "true");
    if (alltrueOptions && checkedAnswer.length === allQuestions.length) {
      msg.classList.add("active");
      setTimeout(() => {
        msg.classList.remove("active");
      }, 1000);
    }
  });
});
