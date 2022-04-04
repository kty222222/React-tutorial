import React from "react";
import {TableRow}  from "@material-ui/core";
import  {TableCell} from "@material-ui/core";
export default function Customer(props) {
    return (
        <TableRow>
            <TableCell><p>{props.id}</p></TableCell>
            <TableCell><img src={props.image}></img></TableCell>
            <TableCell><h2>{props.name}</h2></TableCell>
            <TableCell><p>{props.birthday}</p></TableCell>
            <TableCell><p>{props.gender}</p></TableCell>
            <TableCell><p>{props.job}</p></TableCell>
        </TableRow>

    );
}
