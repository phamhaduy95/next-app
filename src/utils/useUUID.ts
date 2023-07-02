import { useMemo } from "react";
import {v4 as uuidv4 } from "uuid";
export function useUUID(){
   const id = useMemo(()=>{
        return uuidv4();
   },[]);
   return id;
} 