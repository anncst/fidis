import {Link} from 'react-router-dom';

function TabsTable ({songs}) {
    let tabsList = songs.map(song => {
        let chordsList = song.chords.map(chord => {
            return(
                <span className="border-r border-gray-200 last:border-0 px-2">
                    {chord.symbol}
                </span>
            )
        })
        return(
            <tr className="border-b border-gray-200">
                <td> 
                    <Link to={"/song/" + song.id}>{song.title}</Link>
                </td>
                <td><Link to={"/author/" + song.author.name}>{song.author.name}</Link></td>
                <td className="text-left">{chordsList}</td>
            </tr>
        )
    })
    return(
        <table className="bg-white mx-auto text-2xl w-full">
            <thead>
                <tr className="bg-primary text-white ">
                    <th>Title</th>
                    <th>Artist</th>
                    <th className="text-left px-2">Chords</th>
                </tr>
            </thead>
            <tbody>
                {tabsList}
            </tbody>
        </table>
    )
}

export default TabsTable;