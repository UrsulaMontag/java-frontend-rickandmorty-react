type SearchProps = {
    setSearchInput: (value: string) => void
}

export default function Search(props: Readonly<SearchProps>) {

    return (
        <><input type="search" id="search" onChange={(event) => props.setSearchInput(event.target.value)}
                 placeholder="Search by name..."/>
        </>
    )
}