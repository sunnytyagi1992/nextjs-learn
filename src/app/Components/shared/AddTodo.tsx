"use client"

import  Form  from "../ui/Form";
import { Input }  from "../ui/Input";
import { Button } from "../ui/Button";
import { create } from "@/app/actions/todoActions";
import Link from "next/link";
import { usePathname } from "next/navigation";


export const AddTodo = () => {
  const pathname = usePathname();
  return (<>
  <nav>
    <ul>
      <li>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">Home </Link>
      </li>
      <li>
        <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">About</Link>
      </li>
    </ul>
  </nav>
    <Form action= {create} className="m-auto" >
      <div className="flex">
        <Input name="input"
                type="text"
                placeholder="Add Todo"
        />
        <Button type= "submit" text= "Add" />

        </div>
      
</Form>
    </>
  )
}
