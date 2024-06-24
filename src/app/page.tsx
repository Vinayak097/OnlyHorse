import Image from "next/image";

import AuthScreen from "./home/authscreen/AuthScreen";
import Herosection from "./home/authscreen/Herosection";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ModeToggle } from "@/components/ModeToggle";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
export default async function Home() {
  const {getUser}=getKindeServerSession();
  const user= await getUser();
  console.log(user)
  return (
    <div>
      <ModeToggle></ModeToggle>
      <LogoutLink>
        <Button>Logout</Button>
      </LogoutLink>
      
      {user?<Herosection></Herosection> : <AuthScreen></AuthScreen>}
    </div>
  );
}
