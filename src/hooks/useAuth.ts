import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCertainOwner } from "./useCertainOwner";
import { Routing } from "./routing";
import { useRecoilValue } from "recoil";

// TODO: 最終日までに認証をしっかり書く
export const useAuth = () => {
  const router = useRouter();
  const { owner } = useCertainOwner();

  useEffect(() => { 
    if (!owner) router.push(Routing.ownerSignIn.buildRoute().path);
    return
  }, []);

};

