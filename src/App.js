import "./App.css";
import ContactsContextProvider from "./contexts/ContactsContextProvider";
import Routing from "./Routing";

function App() {
  return (
    <ContactsContextProvider>
      <Routing />
    </ContactsContextProvider>
  );
}

export default App;
