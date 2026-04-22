import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import DaftarFrom from"./pages/DaftarForm";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="grid grid-cols-2 gap-20 w-full max-w-6xl px-10">
        
        <div>
          <LoginForm />
        </div>

        <div>
          <RegisterForm />
        </div>
          <DaftarFrom />
        <div>

        </div>

      </div>
    </div>
  );
}

export default App;