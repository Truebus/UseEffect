//get data from github api
import { useEffect, useState } from "react";

export const Githubdata = () => {
    const [showdata, setShowdata] = useState([]);

    useEffect(() => {
        const calldata = async () => {
            const response = await fetch("https://api.github.com/users");
            const data = await response.json();
            setShowdata(data);
        };
        calldata();
    }, []);

    return (
        <div className="flex flex-wrap p-10 justify-between bg-pink-300 rounded-3xl border-4 border-indigo-600/[.55] ...">
            {showdata.map((user) => (
                <div key={user.id}>
                    <img src={user.avatar_url} alt={user.login} className="h-40 w-30 hover:-translate-y-6" />
                    <h1 className="text-center font-bold">{user.login}</h1>
                </div>
            ))}
        </div>
    );
};
