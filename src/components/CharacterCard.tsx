import type {Char} from "../types/Char.ts";

type CharacterProps = {
    char: Char;
}

export default function CharacterCard(props: Readonly<CharacterProps>) {
    return (
        <div className="character">
            <h2>{props.char.name}</h2>
            <p>{props.char.gender}</p><span>{props.char.status}</span>
            <p>Species: {props.char.species}</p>
            <img src={props.char.image} alt={props.char.name} width={150}/>
            <aside>Origin: <a href={props.char.origin.url}>{props.char.origin.name}</a></aside>
        </div>
    )
}