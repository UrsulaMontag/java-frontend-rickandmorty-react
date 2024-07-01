import {response} from "./data/response.ts";
import {useState} from "react";

import {Char} from "./types/Char.ts";
import CharacterList from "./components/CharacterList.tsx";
import Search from "./components/Search.tsx";


function App() {
    const [data, setData] = useState<Char[]>(response);
    const [search, setSearch] = useState<string>('')

    const filteredChars: Char[] = data.filter(char => char.name.toLowerCase().includes(search))
    return (
        <>
            <Search setSearchInput={setSearch}/>
            {filteredChars ? <CharacterList characters={filteredChars}/> :
                <strong>No characters with given name found!</strong>}

        </>
    )
}

export default App
