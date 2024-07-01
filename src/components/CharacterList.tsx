import type {Char} from "../types/Char.ts";
import CharacterCard from "./CharacterCard.tsx";

type CharacterListProps = {
    characters: Char[],
}

export default function CharacterList(props: Readonly<CharacterListProps>) {
    return (<> {props.characters.map(character => <CharacterCard char={character}/>)}</>

    )
}