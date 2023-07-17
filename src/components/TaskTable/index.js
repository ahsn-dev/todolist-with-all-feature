import El from "../../library/El";

const TaskTable = () => {
  return El({
    element: "table",
    id: "data-table",
    className: "w-full table-auto",
    child: [
      El({
        element: "thead",
        className: "h-16",
        child: El({
          element: "tr",
          child: [
            El({
              element: "th",
              child: "Task Name",
              className:
                "border border-solid border-slate-200 font-medium text-left pl-2",
            }),
            El({
              element: "th",
              className: "border border-solid border-slate-200 font-medium",
              child: [
                "Priority",
                El({
                  element: "button",
                  className: "pl-2 text-xl align-text-top",
                  child: El({
                    element: "ion-icon",
                    name: "arrow-down-outline",
                    className:
                      "text-white hover:text-gray-500 hover:cursor-pointer",
                  }),
                }),
              ],
            }),
            El({
              element: "th",
              className: "border border-solid border-slate-200 font-medium",
              child: [
                "Status",
                El({
                  element: "button",
                  className: "pl-2 text-xl align-text-top",
                  child: El({
                    element: "ion-icon",
                    name: "arrow-down-outline",
                    className:
                      "text-white hover:text-gray-500 hover:cursor-pointer",
                  }),
                }),
              ],
            }),
            El({
              element: "th",
              className: "border border-solid border-slate-200 font-medium",
              child: [
                "Deadline",
                El({
                  element: "button",
                  className: "pl-2 text-xl align-text-top",
                  child: El({
                    element: "ion-icon",
                    name: "arrow-down-outline",
                    className:
                      "text-white hover:text-gray-500 hover:cursor-pointer",
                  }),
                }),
              ],
            }),
            El({
              element: "th",
              child: "Actions",
              className: "border border-solid border-slate-200 font-medium",
            }),
          ],
        }),
      }),
      El({
        element: "tbody",
        id: "tbody-table",
        className: "h-12",
        child: "",
      }),
    ],
  });
};

export default TaskTable;
