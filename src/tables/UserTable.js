import React, { useState } from 'react'
const week = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const date = new Date();
const monthIndex = date.getMonth();
const UserTable = (props) => {
    const [showFlag, setShowFlag] = useState(false);

    const updateFlag = () => {
        setShowFlag(!showFlag);
    }
    return(
        <table>
        <tbody>
        {props.users.length > 0 ? (
            props.users.map(user => (
                <tr key={user.id} className="card">
                    <tr className="card-header">
                        <td className="card-details title">{user.name}</td>
                        <td className="card-details subtitle">{user.username}</td>
                        <td className="ham-details" onClick={updateFlag}>...
                        </td>
                    </tr>
                    <tr>
                        <td className="card-item"><p className="count">{user.device}</p><p className="desc">Device</p>
                        </td>
                        <td className="card-item"><p className="count count2">{user.plugin}</p><p
                            className="desc">Plugin</p></td>
                    </tr>
                    {/* eslint-disable-next-line no-undef */}
                    <td className="dateIndex">Added
                        on {week[monthIndex]}, {month[monthIndex]} {date.getDate()}, {date.getFullYear()} </td>
                    {showFlag ? <td className="card-separator">
                    <div>
                        <button
                            onClick={() => {
                                props.editRow(user)
                            }}
                            className="button muted-button"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => props.deleteUser(user.id)}
                            className="button muted-button float-r"
                        >
                            Delete
                        </button>
                    </div>
                </td> : '' }
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan={3}>No users</td>
            </tr>
        )}
        </tbody>
    </table>)
}

export default UserTable
