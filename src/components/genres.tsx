import React from "react";
import { IEntity } from "../types/types";


export function GetGenres(props:IEntity.Genre){ 
    return( 
         <a href="#" className="list-group-item list-group-item-action">{props.name}</a>
    )
}