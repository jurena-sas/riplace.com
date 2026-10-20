
export default async function Header() {

    const response = await fetch("https://www.laceter.com/api/navigations_laceter.json");

    if (!response.ok) {
        throw new Error("Impossible de récupérer le contenu");
    }

    //const { item } = await response.json();
    const data = await response.json();

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>Nav 1</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}