import React, { createContext, useReducer } from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Global styles for your application
import { RouterProvider } from "react-router-dom"; // Import RouterProvider to use the router
import { router } from "./routes"; // Import the router configuration

export const Context = createContext();

const reducter = (state, action) => {
  if (action.type === "CREATE_CONTACT") {
    const updatedContactList = [...state.contactList, action.value];
    return { ...store, constacList: updatedContactList };
  }
  if (action.type === "EDIT_CONTACT") {
    store.constacList.map((contact, index) => {
      if (index === action.position) {
        return action.value;
      }
      return contact;
    });
    return { ...store, contacList: updatedContactList };
  }

  if (action.type === "REMOVE_CONTACT") {
    const updatedContactList = store.contacList.filter((_, index) => {
      return action.position !== index;
    });
    return { ...store, constacList: updatedContactList };
  }
  return store;
};

const Main = () => {
  const [store, dispatch] = useReducer(reducter, {
    constacList: [{ mail: "raulreyes2@gmail.com" }],
  });

  return (
    <React.StrictMode>
      {/* Provide global state to all components */}
      <Context.Provider value={{ store, dispatch }}>
        {/* Set up routing for the application */}
        <RouterProvider router={router}></RouterProvider>
      </Context.Provider>
    </React.StrictMode>
  );
};

// Render the Main component into the root DOM element.
ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
