import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./layout/Rootlayout";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Rootlayout />}></Route>)
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
