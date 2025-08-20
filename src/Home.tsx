import {useNavigate} from "react-router";
import {useState} from "react";

export default function Home() {

    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="relative bg-white text-black" >
            <div className="felx items-center justify-between p-4">
                <button className="text 2x1 md:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>

                <h1 className="text-xl font-bold felx-grow text-center md:text-left">Pet Shop</h1>

                {menuOpen &&(
                    <div style={{position: "absolute", top: "3.5rem", left: "0", backgroundColor: "#444", padding: "1rem",
                        borderRadius: "0 0 0.5rem 0.5rem"}}>
                        <div onClick={() => navigate("/")}>Pets</div>
                        <div onClick={() => navigate("/pets")}>New pet</div>
                        <div onClick={() => navigate("/")}>Update pet</div>
                    </div>

                )}
            </div>
        </div>
    )
}