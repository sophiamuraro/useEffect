import { useEffect } from "react";

export default function SpecialComponent() {
    useEffect(() => {
        document.title = 'Visible component';

        return () => {
            document.title = 'React Hooks | useEffect'
        }

    }, []);
    return (
        <>
        <h3>Check the page title`s</h3>
        </>
    )
}
