import React from "react";
import { IEntity } from "../types/types";

export function GetMovies(props:IEntity.Movies){ 
    return( 
        <tr>
                <td>
                    {props.title}
                </td>
                <td>
                   {props.genre.name}
                </td>
                <td>
                    {props.numberInStock}
                </td>
                <td>
                    {props.dailyRentalRate}
                </td>
        </tr>
    )
}