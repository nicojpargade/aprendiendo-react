import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

const users = [
    {
        userName: "midudev",
        name: "Miguel Ángel Durán",
        isFollowing: true,
    },
    {
        userName: "pheralb",
        name: "Pablo Hernández",
        isFollowing: false,
    },
    {
        userName: "pacohdezs",
        name: "Paco Hdez",
        isFollowing: true,
    },
    {
        userName: "TMChein",
        name: "Tomás C.",
        isFollowing: false,
    },
];

export function App() {
    return (
        <section className="App">
            {users.map(({ userName, name, isFollowing }) => (
                <TwitterFollowCard
                    userName={userName}
                    isFollowing={isFollowing}
                    key={userName}
                >
                    {name}
                </TwitterFollowCard>
            ))}
        </section>
    );
}
