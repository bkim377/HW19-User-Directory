import React from "react";

const Table = (props) => {
    return (
    <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>{props.cell}</td>
    </tr>
    );
};

export default Table;