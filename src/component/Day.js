import dummpy from "../db/data.json"

export default function Day() {
    return <>
    
    <table> 
        <tbody>
            {dummpy.words.map(word =>(
                <tr>
                    <td>{word.eng}</td>
                    <td>{word.kor}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
}