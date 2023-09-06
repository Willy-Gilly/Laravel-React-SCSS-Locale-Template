export interface IUploadProps{
    multiple?:boolean;
    accept:string;
    onFileChange:(value:File|FileList|null) => void;
}
