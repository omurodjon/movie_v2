import React from "react";
import { IEntity } from "../types/types";
import "./styles/index.css";
export function Movies(props:IEntity.Movies){ 
    return( 
        <div className="flex">
            <ul className="list-group">
               <li className="list-group-item">An item</li>
               <li className="list-group-item">A second item</li>
               <li className="list-group-item">A third item</li>
               <li className="list-group-item">A fourth item</li>
               <li className="list-group-item">And a fifth one</li>
            </ul>
            <table className="table table-hover">
            <thead>
              <tr>
                <th className="clickable">Title <i className="fa fa-sort-asc"></i></th>
                <th className="clickable">Genre</th>
                <th className="clickable">Stock</th>
                <th className="clickable">Rate</th>
                <th className="clickable"></th>
              </tr>
            </thead>
            <tbody className="tbody">
              <tr>
                <td>
                    {props.title}
                </td>
                <td>
                    {/* {proops.genre.name} */}
                    ss
                </td>
                <td>
                    {props.numberInStock}
                </td>
                <td>
                    {props.dailyRentalRate}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    )
}