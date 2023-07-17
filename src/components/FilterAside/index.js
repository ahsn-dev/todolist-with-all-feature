import El from "../../library/El";
import { createNewRow } from "../Modal";

const FilterAside = () => {
  const handleFilterChange = async () => {
    const priority = document.getElementById("prioritySelect").value;
    const status = document.getElementById("statusSelect").value;
    // const deadline = document.getElementById("deadlineSelect").value;

    let url = `http://localhost:3000/all?`;

    if (priority !== "All") {
      url += `priority=${priority}&`;
    }

    if (status !== "All") {
      url += `status=${status}&`;
    }

    // if (deadline !== "All") {
    //   url += `date=${deadline}&`;
    // }

    const response = await fetch(url);
    const data = await response.json();
    createNewRow(data);
  };

  return El({
    element: "div",
    id: "filterAside",
    className:
      "w-[448px] flex flex-col items-center h-full z-10 fixed top-0 right-0 outline-none shadow hidden bg-white",
    child: El({
      element: "div",
      className: "w-[28rem] p-4",
      child: [
        El({
          element: "div",
          className: "flex justify-between items-center mb-8",
          child: [
            El({
              element: "h6",
              child: "Filters",
              className: "font-medium text-lg",
            }),
            El({
              element: "button",
              className:
                "cursor-pointer bg-transparent p-2 hover:rounded-full hover:bg-slate-50 hover:align-sub",
              child: El({
                element: "ion-icon",
                name: "close",
                className: "text-2xl text-gray-700 align-top",
              }),
              onclick() {
                const filterBut = document.getElementById("filterAside");
                if (!filterBut.className.split(" ").includes("hidden"))
                  filterBut.classList.add("hidden");
              },
            }),
          ],
        }),
        El({
          element: "div",
          className:
            "my-4 flex flex-col text-black/[.87] text-base w-full align-top",
          child: [
            El({
              element: "label",
              child: "Priority:",
              className: "pb-4",
            }),
            El({
              element: "select",
              id: "prioritySelect",

              // filter with javascript method
              // onchange: async (e) => {
              //   const response = await fetch("http://localhost:3000/all");
              //   const data = await response.json();

              //   if (e.target.value !== "All") {
              //     const x = data.filter(
              //       (item) => item.priority === e.target.value
              //     );
              //     createNewRow(x);
              //   } else {
              //     createNewRow(data);
              //   }
              // },

              // filter with json-server method
              // onchange: async (e) => {
              //   let url = "http://localhost:3000/all";
              //   if (e.target.value !== "All") {
              //     url += `?priority=${e.target.value}`;
              //   }
              //   const response = await fetch(url);
              //   const data = await response.json();
              //   createNewRow(data);
              // },
              onchange: handleFilterChange,

              className:
                "h-14 px-2 cursor-pointer rounded border border-solid border-slate-300 hover:border-black focus:border-[#6101EA] focus:border-2 focus:outline-none",
              child: [
                El({
                  element: "option",
                  child: "All",
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
          ],
        }),
        El({
          element: "div",
          className:
            "my-4 flex flex-col text-black/[.87] text-base w-full align-top",
          child: [
            El({
              element: "label",
              child: "Status:",
              className: "pb-4",
            }),
            El({
              element: "select",
              id: "statusSelect",

              // onchange: async (e) => {
              //   let url = "http://localhost:3000/all";
              //   if (e.target.value !== "All") {
              //     url += `?status=${e.target.value}`;
              //   }
              //   const response = await fetch(url);
              //   const data = await response.json();
              //   createNewRow(data);
              // },
              onchange: handleFilterChange,

              className:
                "h-14 px-2 cursor-pointer rounded border border-solid border-slate-300 hover:border-black focus:border-[#6101EA] focus:border-2 focus:outline-none",
              child: [
                El({
                  element: "option",
                  child: "All",
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
          ],
        }),
        El({
          element: "div",
          className:
            "my-4 flex flex-col text-black/[.87] text-base w-full align-top",
          child: [
            El({
              element: "label",
              child: "Deadline:",
              className: "pb-4",
            }),
            El({
              element: "select",
              id: "deadlineSelect",

              // onchange: async (e) => {
              //   let url = "http://localhost:3000/all";
              //   if (e.target.value !== "All") {
              //     url += `?date=${e.target.value}`;
              //   }
              //   const response = await fetch(url);
              //   const data = await response.json();
              //   createNewRow(data);
              // },
              // onchange: handleFilterChange,

              className:
                "h-14 px-2 cursor-pointer rounded border border-solid border-slate-300 hover:border-black focus:border-[#6101EA] focus:border-2 focus:outline-none",
              child: [
                El({
                  element: "option",
                  child: "All",
                }),
                El({
                  element: "option",
                  child: "Overdue",
                }),
                El({
                  element: "option",
                  child: "For Today",
                }),
                El({
                  element: "option",
                  child: "For The Future",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};

export default FilterAside;
