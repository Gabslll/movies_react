import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi"
import { SiCloudflare } from "react-icons/si";

import styles from "./Title.module.css"

const Navbar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!search) return

        navigate(`/search?q=${search}`)
        setSearch("");
    }


    return (
        <nav id={styles.navbar}>
            <h2 className={styles.title}>
                <Link to="/"><SiCloudflare /> Cloud</Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input className={styles.input}
                    type="text" 
                    placeholder="Busque um filme" 
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    )
}

export default Navbar;