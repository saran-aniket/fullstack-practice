const addBtn = document.querySelector(".add-btn");
const removeBtn = document.querySelector(".remove-btn");
const closeModalBtn = document.querySelector(".close-modal");
const modalOverlayCont = document.querySelector(".modal-overlay");
const modalCancelButton = document.querySelector("#modal-cancel-btn");
const modalSubmitButton = document.querySelector("#modal-submit-btn");
const colorSelector = document.querySelectorAll(".color");
const modalcolorSelector = document.querySelectorAll(".priority-color");
const mainContainer = document.querySelector(".main-container");
const textAreaField = document.querySelector("#input-task-desc");

const colorCheckMark = '<i class="fa-solid fa-check"></i>';

const colorList = ["turquoise", "skyaqua", "rosekiss", "thistle"];

let deleteTaskActive = false;

addBtn.addEventListener("click", function (event) {
  modalOverlayCont.style.display = "flex";
});

closeModalBtn.addEventListener("click", function (event) {
  modalOverlayCont.style.display = "none";
});

modalCancelButton.addEventListener("click", function (event) {
  modalOverlayCont.style.display = "none";
});

modalSubmitButton.addEventListener("click", (event) => {
  createTask();
  modalOverlayCont.style.display = "none";
  textAreaField.value = "";
  for (const othercolorElement of modalcolorSelector) {
    if (othercolorElement.innerHTML != "") {
      othercolorElement.innerHTML = "";
    }
  }
  modalcolorSelector[0].innerHTML = colorCheckMark;
});

removeBtn.addEventListener("click", function (event) {
  deleteTaskActive = !deleteTaskActive;
  if(deleteTaskActive){
      event.currentTarget.classList.add("remove-btn-active");
  }else{
    event.currentTarget.classList.remove("remove-btn-active");
  }
});

function addColorEvent(elementSelector) {
  let isColorSelected = false;
  for (const colorElement of elementSelector) {
    colorElement.addEventListener("click", (event) => {
      for (const othercolorElement of elementSelector) {
        if (
          othercolorElement.innerHTML != "" &&
          othercolorElement != colorElement
        ) {
          othercolorElement.innerHTML = "";
        }
      }
      if (event.currentTarget.innerHTML == "") {
        event.currentTarget.innerHTML = colorCheckMark;
        isColorSelected = true;
      } else {
        event.currentTarget.innerHTML = "";
        isColorSelected = false;
      }

      if (colorElement.getAttribute("class").split(" ").includes("color")) {
        filterTask(colorElement.classList[0], isColorSelected);
      }
    });
  }
}

function createTask() {
  let colorSelected = "";
  for (let colorElement of modalcolorSelector) {
    if (colorElement.innerHTML != "") {
      colorSelected = colorElement.getAttribute("class").split(" ")[0];
    }
  }
  let ticketContainer = document.createElement("div");
  ticketContainer.setAttribute("class", "ticket-container");
  ticketContainer.innerHTML = `
        <div id="ticket-id">1234</div>
        <div class="ticket-description">${textAreaField.value}</div>
        <div class="lock-icon"><i class="fa-solid fa-lock"></i></div>
    `;
  ticketContainer.classList.add(colorSelected);
  ticketContainer.classList.add("ticket-container-active");
  addDeleteListener(ticketContainer);
  addLockListener(ticketContainer);
  mainContainer.appendChild(ticketContainer);
}

function addDeleteListener(ticketContainer){
    ticketContainer.addEventListener("click", function(event) {
    if(deleteTaskActive){
        ticketContainer.remove();
    }
  });
}

function addLockListener(ticketContainer){
    //<i class="fa-solid fa-lock-open"></i>
    const lockButton = ticketContainer.querySelector(".lock-icon > i");
    lockButton.addEventListener("click", function(event){
        if(lockButton.classList.contains("fa-lock")){
            lockButton.classList.replace("fa-lock", "fa-lock-open");
            ticketContainer.setAttribute("contenteditable","true");
        }else{
            lockButton.classList.replace("fa-lock-open","fa-lock");
            ticketContainer.setAttribute("contenteditable","false");
        }
    });
}

function filterTask(selectedColor, isColorSelected) {
  const ticketContainerAll = document.querySelectorAll(".ticket-container");
  for (let ticketContainerElmnt of ticketContainerAll) {
    if (
      !isColorSelected ||
      (selectedColor && ticketContainerElmnt.classList.contains(selectedColor))
    ) {
      ticketContainerElmnt.classList.add("ticket-container-active");
    } else {
      ticketContainerElmnt.classList.remove("ticket-container-active");
    }
  }
}

addColorEvent(colorSelector);
addColorEvent(modalcolorSelector);
