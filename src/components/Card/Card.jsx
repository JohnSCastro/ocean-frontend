import { Link } from "react-router-dom"

export default function Card(props) {
    console.log(props)

    const item = props.item

    return (
        <Link to={`/item/${item.id}`}>
            <div className="card">
                <h2>{item.name}</h2>
                <div className='tag'>
                    <h5>Status: {item.status}</h5>
                    <h5>Espécie: {item.species}</h5>
                    <h5>Origem: {item.origin.name} </h5>
                </div>
                <img src={item.image}></img>
            </div>
        </Link>
    )
}