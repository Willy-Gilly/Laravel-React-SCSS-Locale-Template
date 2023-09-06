import React from "react";
import { ReactElement, useContext, useState } from "react";
import {IUploadProps} from "./IUpload";

export default function Upload(props:IUploadProps): ReactElement{
    const {accept,multiple, onFileChange} = props;
    const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0){
            onFileChange((multiple ?? false) ? e.target.files : e.target.files[0]);
        }else{
            onFileChange(null);
        }
    }
    return (<input type={'file'} accept={accept} onChange={handleFileChange}/>);
}
