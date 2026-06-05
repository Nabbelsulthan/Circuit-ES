// import { Navigate } from "react-router-dom";

// export default function ProtectedRoute({ children }) {
//   const customer = localStorage.getItem("customer");

//   if (!customer) {
//     return <Navigate to="/portal" replace />;
//   }

//   return children;
// }



// import { Navigate } from "react-router-dom";

// export default function ProtectedRoute({ children }) {
//   const customer = localStorage.getItem("customer");

//   return customer
//     ? children
//     : <Navigate to="/portal" replace />;
// }


import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
}) {
  const isLoggedIn =
    localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/portal"
        replace
      />
    );
  }

  return children;
}