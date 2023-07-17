// import El from "../../library/El";
// import { createNewRow, getItems } from "../Modal";

// let page = 1;

// const Footer = () => {
//   return El({
//     element: "div",
//     className:
//       "h-14 flex justify-end items-center gap-4 pr-4 text-sm font-light mt-4",
//     child: [
//       El({
//         element: "div",
//         child: "",
//       }),
//       El({
//         element: "p",
//         child: "Rows per page:",
//       }),
//       El({
//         element: "select",
//         id: "selectRow",
//         onchange(e) {
//           if (e.target.value == "All") {
//             getItems();
//           } else {
//             showCards(page, e.target.value);
//           }
//         },
//         className: "border border-solid border-slate-300 outline-none mr-6",
//         child: [
//           El({
//             element: "option",
//             child: "All",
//             value: "All",
//           }),
//           El({
//             element: "option",
//             child: "4",
//             value: "4",
//           }),
//           El({
//             element: "option",
//             child: "8",
//             value: "8",
//           }),
//         ],
//       }),
//       El({
//         element: "div",
//         child: [
//           El({
//             element: "span",
//             id: "countPage",
//             child: page,
//           }),
//           El({
//             element: "span",
//             child: " of",
//           }),
//           El({
//             element: "span",
//             // child: maxLimitPage,
//           }),
//         ],
//       }),
//       El({
//         element: "div",
//         className: "flex gap-6",
//         child: [
//           El({
//             element: "button",
//             id: "prevBtn",
//             onclick() {
//               const selectRow = document.getElementById("selectRow");
//               const countPage = document.getElementById("countPage");
//               page > 1 ? page-- : page;
//               showCards(page, selectRow.value);
//               countPage.textContent = page;
//               return page;
//             },
//             child: El({
//               element: "ion-icon",
//               name: "chevron-back-outline",
//               className: "text-gray-400 text-lg align-text-top",
//             }),
//           }),
//           El({
//             element: "button",
//             id: "nextBtn",
//             onclick() {
//               const selectRow = document.getElementById("selectRow");
//               const countPage = document.getElementById("countPage");
//               page > 0 ? page++ : page;
//               showCards(page, selectRow.value);
//               countPage.textContent = page;
//               return page;
//             },
//             child: El({
//               element: "ion-icon",
//               name: "chevron-forward-outline",
//               className: "text-gray-400 text-lg align-text-top",
//             }),
//           }),
//         ],
//       }),
//     ],
//   });
// };

// function showCards(count, rowsPerPage) {
//   const URL = `http://localhost:3000/all?_page=${count}&&_limit=${rowsPerPage}`;
//   fetch(URL)
//     .then((response) => response.json())
//     .then((data) => createNewRow(data));
// }

// export default Footer;

import El from "../../library/El";
import { createNewRow, getItems } from "../Modal";

export const Footer = function () {
  return El({
    element: "div",
    className: "flex justify-end gap-3 w-full items-center px-4 mt-10 mb-5",
    child: [
      El({
        element: "h1",
        child: "Rows per page:",
      }),
      El({
        element: "select",
        className: "border border-solid border-slate-300 outline-none",
        name: "rowPerPage",
        id: "rowPerPage",
        onchange: perPageNumber,
        child: [
          El({
            element: "option",
            value: "all",
            child: "All",
          }),
          El({
            element: "option",
            value: "3",
            child: "3",
          }),
          El({
            element: "option",
            value: "5",
            child: "5",
          }),
          El({
            element: "option",
            value: "8",
            child: "8",
          }),
        ],
      }),
      El({
        element: "h2",
        id: "pageNumber",
        child: "1",
        className: "ml-6",
      }),
      El({
        element: "h2",
        child: "of",
        className: "",
      }),
      El({
        element: "h2",
        child: "1",
        id: "allPageNumber",
        className: "mr-6",
      }),
      El({
        element: "ion-icon",
        name: "chevron-back-outline",
        onclick: prevBtn,
        className: "cursor-pointer",
      }),
      El({
        element: "ion-icon",
        name: "chevron-forward-outline",
        onclick: nextBtn,
        className: "cursor-pointer",
      }),
    ],
  });
};

async function getRequest(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const pagination = () => {
  getRequest("http://localhost:3000/all").then((response) => {
    let responseLength = response.length;
    const rowPerPage = document.getElementById("rowPerPage").value;
    if (rowPerPage === "all") {
      getItems();
      document.getElementById("allPageNumber").innerHTML = "1";
      document.getElementById("pageNumber").innerHTML = "1";
    } else {
      const newTotalPageNumber = Math.ceil(responseLength / Number(rowPerPage));
      document.getElementById("allPageNumber").innerHTML = newTotalPageNumber;
    }
  });
};

const perPageNumber = function (e) {
  const selectPageNumber = e.target.value;
  if (selectPageNumber === "all") {
    getRequest("http://localhost:3000/all").then((response) => {
      document.getElementById("allPageNumber").innerHTML = "1";
      pagination(response.length);
    });
  } else {
    getRequest(
      `http://localhost:3000/all?_page=1&_limit=${selectPageNumber}`
    ).then((response) => {
      pagination(response.length);
      createNewRow(response);
    });
  }
};

const nextBtn = function () {
  const selectPageNumber = document.getElementById("rowPerPage").value;
  const pageNumber = Number(document.getElementById("pageNumber").innerText);
  const totalPageNumber = Number(
    document.getElementById("allPageNumber").innerText
  );
  if (pageNumber < totalPageNumber) {
    getRequest(
      `http://localhost:3000/all?_page=${
        pageNumber + 1
      }&_limit=${selectPageNumber}`
    ).then((response) => {
      createNewRow(response);
    });
    document.getElementById("pageNumber").innerHTML = pageNumber + 1;
  }
};

const prevBtn = function () {
  const selectPageNumber = Number(document.getElementById("rowPerPage").value);
  const pageNumber = Number(document.getElementById("pageNumber").innerText);
  if (pageNumber > 1) {
    getRequest(
      `http://localhost:3000/all?_page=${
        pageNumber - 1
      }&_limit=${selectPageNumber}`
    ).then((response) => {
      createNewRow(response);
    });
    document.getElementById("pageNumber").innerHTML = pageNumber - 1;
  }
};

export default Footer;
