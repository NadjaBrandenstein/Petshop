import {Outlet, useNavigate} from "react-router";
import {useState} from "react";

export default function Layout() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div>
            <div className="navbar">
                <div className={"relative"}>
                    <button
                        className="text-2xl md:hidden focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>
                    {menuOpen && (
                        <div className="menu-dropdown">
                            <div onClick={() => navigate("/")}> Pets </div>
                            <div onClick={() => navigate("/newpet")}> New Pet </div>
                        </div>
                    )}
                </div>
                <h1 className="navbar-text">
                    Pet Shop
                </h1>

            </div>
            <main>
                <Outlet />
            </main>
        </div>
    )
}