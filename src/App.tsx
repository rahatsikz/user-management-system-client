import MainLayout from "./layouts/MainLayout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <MainLayout></MainLayout>
      <Toaster />
    </div>
  );
}

export default App;
