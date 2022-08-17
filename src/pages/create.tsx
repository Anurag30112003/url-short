import type { NextPage } from "next";
import { useState } from "react";
const create:NextPage = () => {

    const [formData, setFormData] = useState("");
    // const onChange = (e:any) => {
    //     setFormData((prevState:string) => ({
    //       ...prevState,
    //       [e.target.name]: e.target.value,
    //     }));
    //   };

  return (
    <>
    <div>Create URL</div>
    <form>
    <input type="text" value={formData} onChange={(e) => setFormData(e.target.value)} />
    <button onClick={() => {
        console.log(formData);
    } }>Create</button>
    </form>
        
    </>
  );
}
export default create;