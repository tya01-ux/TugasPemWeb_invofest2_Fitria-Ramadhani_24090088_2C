import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
          <Header />  


          <main className="max-w-7xl mx-auto py-6">
            <Outlet />
          </main>

          <Footer />
          
        </div>
    );
}