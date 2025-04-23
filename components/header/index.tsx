'use client';
import styles from './styles.module.css';

export const Header = () => {
    return (
        <div className={styles.header + " container h-screen flex justify-center items-center"}>
            <div className="flex flex-col items-center lg:items-start">
                <h2 className="text-5xl sm:text-6xl xl:text-7xl font-semibold mb-2 pl-10 sm:pl-20">Hi there,</h2>
                <h2 className="text-5xl sm:text-6xl xl:text-7xl font-semibold mb-2">I'm Aqib.</h2>
                <h2 className="text-5xl sm:text-6xl xl:text-7xl font-semibold mb-2 pl-10 sm:pl-20">I like to</h2>
                <h2 className="text-5xl sm:text-6xl xl:text-7xl font-semibold pl-5 sm:pl-8 md:pl-0"><span className={styles.specialText}>Build</span> stuff.</h2>
            </div>
        </div>
    );
}