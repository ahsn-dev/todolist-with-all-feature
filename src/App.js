import El from "./library/El";
import Navbar from "./components/Navbar";
import TaskTable from "./components/TaskTable";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import FilterAside from "./components/FilterAside";

function isLoading() {
  return El({
    element: "div",
    id: "loading",
    className:
      "flex justify-center items-center text-4xl m-96 border border-solid border-blue-400 p-4 rounded-full bg-blue-100 text-blue-800",
    child: "Loading...",
  });
}

const App = () => {
  const app = El({
    element: "div",
    child: [
      Navbar(),
      isLoading(),
      TaskTable(),
      Footer(),
      FilterAside(),
      Modal(),
    ],
  });

  return app;
};

export default App;
