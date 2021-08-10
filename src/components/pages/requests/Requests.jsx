import "./requests.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import {userRows} from "../../../requestData";
import { useState } from "react";

export default function Requests() {

    const [data,setData] = useState(userRows);
    const handleDelete = (id)=> {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "user", headerName: "Name", width:200, renderCell: (params)=>{
           return (
               <div className="userListUser">

                   {params.row.username}
               </div>
           ) 
        } },
        {
          field: 'request',
          headerName: 'Request',
          width: 200,
          editable: true,
        },
          {
              field: "action",
              headerName: "Action",
              width:150,
              renderCell: (params)=>{
                  return(
                      <>
                      <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)} />
                      </>
                      
                  )
              }
          },
      ];
      
      
    return (
        <div className="userList">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection disableSelectionOnClick />
        </div>
    )
}
