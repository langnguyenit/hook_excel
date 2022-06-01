import React, {  useEffect  } from "react";
import { useItem } from "../hooks";
import { useState } from "react";
import *as XLSX from 'xlsx'
import * as FileSaver from "file-saver";
export default function Home() {
  const {
    isError,
    handleFetchList,
    isFetching,
    list,
    message,
    totalPage,
    activePage,
    totalRecord,
    handleFetchDelete,
    handleFetchCreate,
    handleFetchUpdate,
    handleFetchSearch,
    handleFetchAdd
  } = useItem();
  

  const [name, setName] = useState(""); 
  const [id, setId] = useState("");
  const [textSearch, setTextSearch] = useState("");
  const [file , setFile]=useState();
  useEffect(() => {
    console.log('qqqqqqqqqqqqqqqq');
    console.log('aaaaaa');
    handleFetchList({ activePage: 1 });
  }, []);

  let array = [];
  for (let i = 1; i <= totalPage; i++) {
    array.push(i);
  }

   function handleFile(file){
      let arrayFile=[]
      for (let i = 0; i < file.length; i++) {
        arrayFile.push(file[i])
      }
      setFile(arrayFile)
   }
   function handleUploadFile(file){
    var form = new FormData();
      for (let i = 0; i < file.length; i++) {
        form.append("excel", file[i]);
      }
      handleFetchCreate({form: form})
   }
   function handleExport () {
console.log(totalRecord.length,"du lieu vao")

    for (let i = 0; i < totalRecord.length; i++) {
      totalRecord[i]._id = i + 1
    }
    const ws = XLSX.utils.json_to_sheet(totalRecord);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    XLSX.writeFileXLSX(wb, 'bai_test_excel.xlsx');
}
  if (isFetching) {
    return <p>Loading</p>;
  }
  if (isError) {
    return <p>{message}</p>;
  }
  let ListItem = [];
  ListItem = list.map((item, key) => {
    return (
      <tr key={key}>
        <th>{key + 1}</th>
        <th>{item.name}</th>
        <th>
          <button onClick={() => handleFetchDelete({ id: item._id })}>
            DELETE
          </button>
        </th>
        <th>
          <button
            onClick={() => {
              setName(item.name);
              setId(item._id);
            }}
          >
            PUT
          </button>
        </th>
      </tr>
    );
  });
  return (
    <>
      <div>Trang Home</div>
      <div>
        <input type="file" onChange={(e) => handleFile(e.target.files)}/>
        <button onClick={() => handleUploadFile(file)}>UPLOAD</button>
        <button onClick={() =>handleExport()}>EXPORT</button>
      </div>
      <div>
        <input onChange={(e) => setName(e.target.value)} value={name} />
        <button onClick={() => handleFetchAdd({ name: name }, setName(""))}>
          ADD
        </button>
        <button onClick={() => handleFetchUpdate({ name: name, id: id })}>
          UPDATE
        </button>
      </div>
      
      <div>
        <input
          onChange={(e) => setTextSearch(e.target.value)}
          value={textSearch}
        />
        <button
          onClick={() =>
            handleFetchSearch({ textSearch: textSearch, activePage: 1 })
          }
        >
          SEARCH
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{ListItem}</tbody>
      </table>
      {array.map((btn, idx) => {
        return (
          <button
            key={idx}
            onClick={() =>
              textSearch
                ? handleFetchSearch({ textSearch: textSearch, activePage: btn })
                : handleFetchList({ activePage: btn })
            }
            style={{ backgroundColor: activePage === btn ? "red" : null }}
          >
            {btn}
          </button>
        );
      })}
    </>
  );
}
