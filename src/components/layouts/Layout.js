import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout({ children }) {
  return (
    <body>
      <ToastContainer />
      {children}
    </body>
  );
}

export default Layout;
