import React from 'react';

export default function CoinTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>
                        <button 
                        onClick={()=>props.sortBy('age')}
                        >
                        age 
                        </button>
                    </th>
                    <th>name</th>
                    <th>gender</th>
                    <th>company</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(elem=>(
                        <tr key={elem.name} onClick={props._onClick}>
                            <td>{elem._id}</td>
                            <td>{elem.age}</td>
                            <td>{elem.name}</td>
                            <td>{elem.gender}</td>
                            <td>{elem.company}</td>
                            <td>{elem.email}</td>
                            <td>{elem.phone}</td>
                            <td><button name={elem.name}>delete</button> 
                            </td>       
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}