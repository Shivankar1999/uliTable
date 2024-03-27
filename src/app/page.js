"use client"
import { useEffect, useState } from "react";
import Table from "@/Components/Table";

import 'antd/dist/reset.css';
import { data } from "@/data/data";



export default function Home() {
  const [serverData, setserverData] = useState(null)

  useEffect(() => {
    if(typeof window !== undefined && data){
         setserverData(data)
    }
  }, [])
  

  return (
    <div className="p-8">
    <h1 className="text-3xl text-center font-bold mb-4">Vehicle Inventory</h1>
  
      <Table data={serverData}/>
      
      </div>
    
  );
}
