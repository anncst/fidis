import CardLink from './CardLink';

function Cards() {
    return(
        <ul className="flex">
            <CardLink url="/tabs" name="Tabs" />
            <CardLink url="/mytabs" name="My tabs" />
            <CardLink url="/create" name="Create" />
        </ul>
    )
}

export default Cards;