import El from "../../library/El";
import { createNewRow } from "../Modal";
import { debounce } from "lodash";

const Navbar = () => {
  return El({
    element: "nav",
    className:
      "flex justify-between items-center h-16 bg-[#6101EA] text-white px-4",
    child: [
      El({
        element: "div",
        className: "flex justify-center items-center gap-2",
        child: [
          El({
            element: "ion-icon",
            className: "text-4xl",
            name: "list-outline",
          }),
          El({
            element: "h1",
            className: "text-2xl font-light",
            child: "My To-Do Tasks",
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex justify-center items-center gap-6",
        child: [
          El({
            element: "div",
            className: "flex items-center relative",
            child: [
              El({
                element: "ion-icon",
                name: "search",
                className: "text-white text-xl absolute pl-4",
              }),
              El({
                element: "input",
                type: "text",
                // debounce with fetch
                // onkeyup: debounce((e) => {
                //   fetch("http://localhost:3000/all")
                //     .then((response) => {
                //       return response.json();
                //     })
                //     .then((data) => {
                //       const filterItem = data.filter((item) =>
                //         item.taskName.includes(e.target.value)
                //       );
                //       createNewRow(filterItem);
                //     });
                // }, 500),

                // debounce with async/await
                onkeyup: debounce(async (e) => {
                  try {
                    const response = await fetch("http://localhost:3000/all");
                    const data = await response.json();
                    const filterItem = data.filter((item) =>
                      item.taskName
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase())
                    );
                    createNewRow(filterItem);
                  } catch (error) {
                    console.error(error);
                  }
                }, 500),
                id: "search",
                className:
                  "rounded py-2 px-3 bg-[#7926ed] pl-12 hover:bg-[#8c46f2] outline-none",
                placeholder: "Search",
              }),
            ],
          }),
          El({
            element: "button",
            id: "openFilterAside",
            className: "hover:bg-white/[.04] rounded-full p-2.5",
            child: El({
              element: "ion-icon",
              name: "funnel",
              className: "text-3xl text-white align-text-top",
            }),
            onclick(e) {
              e.preventDefault();
              const filterButton = document.getElementById("filterAside");
              if (filterButton.className.split(" ").includes("hidden"))
                filterButton.classList.remove("hidden");
            },
          }),
          El({
            element: "button",
            id: "openModal",
            className: "hover:bg-white/[.04] rounded p-2",
            child: El({
              element: "ion-icon",
              name: "add-circle",
              className: "text-3xl text-white align-text-top",
            }),
            onclick(e) {
              e.preventDefault();
              const filterButton = document.getElementById("taskModal");
              if (filterButton.className.split(" ").includes("hidden"))
                filterButton.classList.remove("hidden");
            },
          }),
        ],
      }),
    ],
  });
};

export default Navbar;
