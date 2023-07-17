import El from "../../library/El";

// our final items
let finaldata = [];

// create modal
const Modal = () => {
  return El({
    element: "div",
    id: "taskModal",
    className: "mx-72 absolute top-[24px] hidden",
    child: El({
      element: "form",
      className:
        "w-[50rem] max-w-screen-2xl  flex flex-col rounded m-8 shadow-2xl transition-shadow z-10 relative bg-white",
      child: [
        El({
          element: "h2",
          child: "New Task",
          className: "font-medium m-0 px-6 py-4 text-xl text-[#000000DE]",
        }),
        El({
          element: "hr",
          className:
            "m-0 divide-x-0 divide-y-0 border-solid border-black/[.12]",
        }),
        El({
          element: "div",
          className: "px-6 py-5",
          child: [
            El({
              element: "div",
              className: "mb-16 w-full flex flex-col",
              child: [
                El({
                  element: "label",
                  child: "Task Name",
                  className: "text-black/[.6] font-normal text-base pb-2",
                }),
                El({
                  element: "input",
                  id: "task-name",
                  type: "text",
                  placeholder: "Enter Your Task Name",
                  className:
                    "w-full py-4 px-3 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded outline-none hover:border-black focus:border-[#6101EA]",
                }),
              ],
            }),
            El({
              element: "div",
              className: "flex items-center gap-6 mb-12",
              child: [
                El({
                  element: "select",
                  id: "priority",
                  className:
                    "w-full py-4 pr-32 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded focus:border-[#6101EA] focus:border-2 hover:border-black outline-none",
                  child: [
                    El({
                      element: "option",
                      child: "Priority",
                    }),
                    El({
                      element: "option",
                      child: "Low",
                    }),
                    El({
                      element: "option",
                      child: "Medium",
                    }),
                    El({
                      element: "option",
                      child: "High",
                    }),
                  ],
                }),
                El({
                  element: "select",
                  id: "status",
                  className:
                    "w-full py-4 pr-32 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded focus:border-[#6101EA] focus:border-2 hover:border-black outline-none",
                  child: [
                    El({
                      element: "option",
                      child: "Status",
                    }),
                    El({
                      element: "option",
                      child: "Todo",
                    }),
                    El({
                      element: "option",
                      child: "Doing",
                    }),
                    El({
                      element: "option",
                      child: "Done",
                    }),
                  ],
                }),
                El({
                  element: "input",
                  id: "date",
                  type: "date",
                  value: "2023-03-08",
                  className:
                    "w-full py-4 px-3 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded focus:border-[#6101EA] focus:border-2 hover:border-black outline-none",
                }),
              ],
            }),
            El({
              element: "textarea",
              child: "",
              id: "textarea",
              placeholder: "Details (optional)",
              className:
                "w-full h-40 p-4 border border-solid border-slate-300 rounded-lg",
            }),
          ],
        }),
        El({
          element: "hr",
          className:
            "m-0 divide-x-0 divide-y-0 border-solid border-black/[.12]",
        }),
        El({
          element: "div",
          className: "flex justify-between items-center m-4 p-2",
          child: [
            El({
              element: "button",
              child: "CANCEL",
              onclick(e) {
                e.preventDefault();
                const cancelTaskModal = document.getElementById("taskModal");
                if (!cancelTaskModal.className.split(" ").includes("hidden"))
                  cancelTaskModal.classList.add("hidden");
              },
              className:
                "text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:bg-blue-300 font-medium border border-solid border-blue-400 rounded text-sm px-5 py-2.5 text-center",
            }),
            El({
              element: "button",
              child: "SAVE",
              onclick(e) {
                e.preventDefault();
                save();

                // hide the modal
                const saveTaskModal = document.getElementById("taskModal");
                if (!saveTaskModal.className.split(" ").includes("hidden"))
                  saveTaskModal.classList.add("hidden");
              },
              className:
                "text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:bg-blue-200 font-medium rounded text-sm px-5 py-2.5 text-center",
            }),
          ],
        }),
      ],
    }),
  });
};

// show items modal
function showModal(taskName, priority, status, date, textarea) {
  const existingModal = document.getElementById("showModal");
  if (existingModal) {
    existingModal.remove();
  }
  const showModal = El({
    element: "div",
    id: "showModal",
    className: "mx-72 absolute top-[24px]",
    child: El({
      element: "form",
      className:
        "w-[50rem] max-w-screen-2xl flex flex-col rounded m-8 shadow-2xl transition-shadow z-10 relative bg-white",
      child: [
        El({
          element: "h2",
          child: "New Task",
          className: "font-medium m-0 px-6 py-4 text-xl text-[#000000DE]",
        }),
        El({
          element: "hr",
          className:
            "m-0 divide-x-0 divide-y-0 border-solid border-black/[.12]",
        }),
        El({
          element: "div",
          className: "px-6 py-5",
          child: [
            El({
              element: "div",
              className: "mb-16 w-full flex flex-col",
              child: [
                El({
                  element: "label",
                  child: "Task Name",
                  className: "text-black/[.6] font-normal text-base pb-2",
                }),
                El({
                  element: "input",
                  disabled: "true",
                  id: "showTaskName",
                  value: taskName,
                  type: "text",
                  className:
                    "w-full py-4 px-3 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded",
                }),
              ],
            }),
            El({
              element: "div",
              className: "flex items-center gap-6 mb-12",
              child: [
                El({
                  element: "select",
                  disabled: "true",
                  id: "showPriority",
                  className:
                    "w-full py-4 pr-32 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded",
                  child: [
                    El({
                      element: "option",
                      child: priority,
                    }),
                    El({
                      element: "option",
                      child: "Low",
                    }),
                    El({
                      element: "option",
                      child: "Medium",
                    }),
                    El({
                      element: "option",
                      child: "High",
                    }),
                  ],
                }),
                El({
                  element: "select",
                  disabled: "true",
                  id: "showStatus",
                  className:
                    "w-full py-4 pr-32 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded",
                  child: [
                    El({
                      element: "option",
                      child: status,
                    }),
                    El({
                      element: "option",
                      child: "Todo",
                    }),
                    El({
                      element: "option",
                      child: "Doing",
                    }),
                    El({
                      element: "option",
                      child: "Done",
                    }),
                  ],
                }),
                El({
                  element: "input",
                  disabled: "true",
                  id: "showDate",
                  value: date,
                  type: "date",
                  className:
                    "w-full py-4 px-3 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded",
                }),
              ],
            }),
            El({
              element: "textarea",
              value: textarea,
              disabled: "true",
              id: "showTextarea",
              className:
                "w-full h-40 p-4 border border-solid border-slate-300 rounded-lg",
            }),
          ],
        }),
        El({
          element: "hr",
          className:
            "m-0 divide-x-0 divide-y-0 border-solid border-black/[.12]",
        }),
        El({
          element: "div",
          className: "flex justify-between items-center m-4 p-2",
          child: [
            El({
              element: "button",
              child: "CANCEL",
              onclick(e) {
                e.preventDefault();
                const cancelShowModal = document.getElementById("showModal");
                if (!cancelShowModal.className.split(" ").includes("hidden"))
                  cancelShowModal.classList.add("hidden");
              },
              className:
                "text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:bg-blue-300 font-medium border border-solid border-blue-400 rounded text-sm px-5 py-2.5 text-center",
            }),
            El({
              element: "button",
              disabled: "true",
              child: "SAVE",
              className:
                "text-white bg-gray-300 font-medium rounded text-sm px-5 py-2.5 text-center",
            }),
          ],
        }),
      ],
    }),
  });
  return showModal;
}

// show items button
function showBtn() {
  return El({
    element: "div",
    className: "flex justify-center items-center bg-gray-600 w-9 h-7 rounded",
    child: El({
      element: "button",
      id: "show",
      onclick: (e) => {
        e.preventDefault();
        const showItem = e.target.closest("tr").getAttribute("id");
        fetch(`http://localhost:3000/all?id=${showItem}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            document.body.append(
              showModal(
                data[0].taskName,
                data[0].priority,
                data[0].status,
                data[0].date,
                data[0].textarea,
                data[0].id
              )
            );
          });
      },
      child: El({
        element: "ion-icon",
        name: "eye",
        className: "text-lg text-white align-text-top",
      }),
    }),
  });
}

// edit items modal
function editModal(taskName, priority, status, date, textarea, id) {
  const existingModal = document.getElementById("editModal");
  if (existingModal) {
    existingModal.remove();
  }
  const editModal = El({
    element: "div",
    id: "editModal",
    className: "mx-72 absolute top-[24px]",
    child: El({
      element: "form",
      id: id,
      className:
        "w-[50rem] max-w-screen-2xl flex flex-col rounded m-8 shadow-2xl transition-shadow z-10 relative bg-white",
      child: [
        El({
          element: "h2",
          child: "New Task",
          className: "font-medium m-0 px-6 py-4 text-xl text-[#000000DE]",
        }),
        El({
          element: "hr",
          className:
            "m-0 divide-x-0 divide-y-0 border-solid border-black/[.12]",
        }),
        El({
          element: "div",
          className: "px-6 py-5",
          child: [
            El({
              element: "div",
              className: "mb-16 w-full flex flex-col",
              child: [
                El({
                  element: "label",
                  child: "Task Name",
                  className: "text-black/[.6] font-normal text-base pb-2",
                }),
                El({
                  element: "input",
                  id: "editTaskname",
                  value: taskName,
                  type: "text",
                  placeholder: "Enter Your Task Name",
                  className:
                    "w-full py-4 px-3 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded outline-none hover:border-black focus:border-[#6101EA]",
                }),
              ],
            }),
            El({
              element: "div",
              className: "flex items-center gap-6 mb-12",
              child: [
                El({
                  element: "select",
                  id: "editPriority",
                  className:
                    "w-full py-4 pr-32 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded focus:border-[#6101EA] focus:border-2 hover:border-black outline-none",
                  child: [
                    El({
                      element: "option",
                      child: priority,
                    }),
                    El({
                      element: "option",
                      child: "Low",
                    }),
                    El({
                      element: "option",
                      child: "Medium",
                    }),
                    El({
                      element: "option",
                      child: "High",
                    }),
                  ],
                }),
                El({
                  element: "select",
                  id: "editStatus",
                  className:
                    "w-full py-4 pr-32 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded focus:border-[#6101EA] focus:border-2 hover:border-black outline-none",
                  child: [
                    El({
                      element: "option",
                      child: status,
                    }),
                    El({
                      element: "option",
                      child: "Todo",
                    }),
                    El({
                      element: "option",
                      child: "Doing",
                    }),
                    El({
                      element: "option",
                      child: "Done",
                    }),
                  ],
                }),
                El({
                  element: "input",
                  id: "editDate",
                  value: date,
                  type: "date",
                  className:
                    "w-full py-4 px-3 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded focus:border-[#6101EA] focus:border-2 hover:border-black outline-none",
                }),
              ],
            }),
            El({
              element: "textarea",
              value: textarea,
              id: "editTextarea",
              placeholder: "Details (optional)",
              className:
                "w-full h-40 p-4 border border-solid border-slate-300 rounded-lg",
            }),
          ],
        }),
        El({
          element: "hr",
          className:
            "m-0 divide-x-0 divide-y-0 border-solid border-black/[.12]",
        }),
        El({
          element: "div",
          className: "flex justify-between items-center m-4 p-2",
          child: [
            El({
              element: "button",
              child: "CANCEL",
              onclick(e) {
                e.preventDefault();
                const cancelEditModal = document.getElementById("editModal");
                if (!cancelEditModal.className.split(" ").includes("hidden"))
                  cancelEditModal.classList.add("hidden");
              },
              className:
                "text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:bg-blue-300 font-medium border border-solid border-blue-400 rounded text-sm px-5 py-2.5 text-center",
            }),
            El({
              element: "button",
              child: "SAVE",
              onclick(e) {
                e.preventDefault();
                const saveEditModal = document.getElementById("editModal");
                if (!saveEditModal.className.split(" ").includes("hidden"))
                  saveEditModal.classList.add("hidden");
                const {
                  editTaskname,
                  editStatus,
                  editPriority,
                  editDate,
                  editTextarea,
                } = e.target.closest("form").elements;
                let trId = e.target.closest("form").getAttribute("id");
                putItems(trId, {
                  taskName: editTaskname.value,
                  priority: editPriority.value,
                  status: editStatus.value,
                  date: editDate.value,
                  textarea: editTextarea.value,
                  id: trId,
                });
              },
              className:
                "text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:bg-blue-200 font-medium rounded text-sm px-5 py-2.5 text-center",
            }),
          ],
        }),
      ],
    }),
  });
  return editModal;
}

// edit items button
function editBtn() {
  return El({
    element: "div",
    className: "flex justify-center items-center bg-blue-600 w-9 h-7 rounded",
    child: El({
      element: "button",
      id: "edit",
      onclick: (e) => {
        e.preventDefault();
        const editItem = e.target.closest("tr").getAttribute("id");
        fetch(`http://localhost:3000/all?id=${editItem}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            document.body.append(
              editModal(
                data[0].taskName,
                data[0].priority,
                data[0].status,
                data[0].date,
                data[0].textarea,
                data[0].id
              )
            );
          });
      },
      child: El({
        element: "ion-icon",
        name: "pencil",
        className: "text-lg text-white align-text-top",
      }),
    }),
  });
}

// delete items
function deleteBtn() {
  return El({
    element: "div",
    className: "flex justify-center items-center bg-red-600 w-9 h-7 rounded",
    onclick() {},
    child: El({
      element: "button",
      id: "delete",
      onclick: (e) => {
        const deleteItemWithId = e.target.closest("tr").getAttribute("id");
        deleteItem(deleteItemWithId);
      },
      child: El({
        element: "ion-icon",
        name: "trash",
        className: "text-lg text-white align-text-top",
      }),
    }),
  });
}

// priority background color
const priorityColor = (priority) => {
  switch (priority) {
    case "Low":
      return "bg-gray-300";
    case "Medium":
      return "bg-yellow-300";
    case "High":
      return "bg-red-300";
    default:
      return "";
  }
};

// status background color
const statusColor = (status) => {
  switch (status) {
    case "Todo":
      return "bg-red-300";
    case "Doing":
      return "bg-yellow-300";
    case "Done":
      return "bg-green-300";
    default:
      return "";
  }
};

export const createNewRow = (data) => {
  const dataTable = document.getElementById("data-table");
  dataTable.querySelector("tbody").innerHTML = "";
  if (data && Array.isArray(data)) {
    data.map((item) => {
      const newRow = El({
        element: "tr",
        className: "hover:bg-gray-100",
        id: item.id,
        child: [
          El({
            element: "td",
            child: item.taskName,
            className:
              "border border-solid border-slate-200 font-normal py-2 text-left pl-2",
          }),
          El({
            element: "td",
            className:
              "border border-solid border-slate-200 font-normal py-2 text-center",
            child: El({
              element: "div",
              child: El({
                element: "span",
                child: item.priority,
                className: `${priorityColor(
                  item.priority
                )} px-3 py-2 rounded-full text-sm`,
              }),
            }),
          }),
          El({
            element: "td",
            className:
              "border border-solid border-slate-200 font-normal py-2 text-center",
            child: El({
              element: "div",
              child: El({
                element: "span",
                child: item.status,
                className: `${statusColor(
                  item.status
                )} px-3 py-2 rounded-full text-sm`,
              }),
            }),
          }),
          El({
            element: "td",
            className:
              "border border-solid border-slate-200 font-normal py-2 text-center",
            child: item.date,
          }),
          El({
            element: "td",
            style: "border-left-style: initial; border-top-style: initial",
            className:
              "flex justify-center items-center gap-2 border border-solid border-slate-200 font-normal p-[10px] text-center",
            child: [deleteBtn(), editBtn(), showBtn()],
          }),
        ],
      });
      dataTable
        .querySelector("tbody")
        .insertAdjacentElement("afterbegin", newRow);
    });
  }
};

// save modal data
const save = () => {
  const taskName = document.getElementById("task-name");
  const priority = document.getElementById("priority");
  const status = document.getElementById("status");
  const date = document.getElementById("date");
  const textarea = document.getElementById("textarea");
  const id = crypto.randomUUID();

  // our final data
  finaldata = [
    ...finaldata,
    {
      taskName: taskName.value,
      priority: priority.value,
      status: status.value,
      date: date.value,
      textarea: textarea.value,
      id,
    },
  ];

  // push data into state
  state.push(finaldata);

  // send items to db.json
  postItems({
    taskName: taskName.value,
    priority: priority.value,
    status: status.value,
    date: date.value,
    textarea: textarea.value,
    id,
  });

  // empty fields
  taskName.value = "";
  textarea.value = "";

  // create new row with our items
  createNewRow(getItems());
};

// our global state
const state = [];

// get item from modal and create a new row
export async function getItems() {
  try {
    const response = await fetch("http://localhost:3000/all", {
      method: "GET",
    });

    response.ok
      ? createNewRow(await response.json())
      : console.error(`HTTP error! status: ${response.status}`);
  } catch (error) {
    console.error("Error fetching items:", error);
  }
}

// send item to db.json
async function postItems(obj) {
  try {
    const response = await fetch("http://localhost:3000/all", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });

    response.ok
      ? getItems()
      : console.error(`HTTP error! status: ${response.status}`);
  } catch (error) {
    console.error("Error posting items:", error);
  }
}

// edit item
async function putItems(id, obj) {
  try {
    const response = await fetch(`http://localhost:3000/all/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });

    response.ok
      ? getItems()
      : console.error(`HTTP error! status: ${response.status}`);
  } catch (error) {
    console.error("Error posting items:", error);
  }
}

// delete item
async function deleteItem(id) {
  try {
    await fetch(`http://localhost:3000/all/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error deleting item:", error);
  }
  createNewRow(getItems());
}

export default Modal;
