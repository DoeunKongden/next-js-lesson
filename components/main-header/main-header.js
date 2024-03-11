import Link from "next/link"
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css';
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";


export default function MainHeaderComponent() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logoImg} alt="A plate with food on it" priority />
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href='/meals'>Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href='/community'>Commuinity</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}