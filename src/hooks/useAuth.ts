import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { onAuthStateChanged } from "firebase/auth";

import { useRouter } from "next/router";
import { OwnerState, OwnerStateType } from "@/store/owner";
import { auth } from "@/lib/firebase";
import { setAuthToken } from "@/lib/axios";
import { Routing } from "./routing";
import { ownerRepository } from "@/feature/owner/modules/owner/owner.repository";

export const useAuth = (): OwnerStateType => {
  const router = useRouter();
  const [owner, setOwner] = useRecoilState<OwnerStateType>(OwnerState);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (authOwner) => {
      //操作者がfirebase上でログインしている状態でなければ、サインインページにリダイレクト
      if (!authOwner) {
        router.push(Routing.ownerSignIn.buildRoute().path);
        return;
      }

      const token = await authOwner.getIdToken();
      setAuthToken(token);

      const owner = await ownerRepository.findUserByFirebaseUID();
      //firebase上でログインしている操作者がDBのuserレコード上では見つからなかった場合も、サインインページにリダイレクト
      if (!owner) {
        router.push(Routing.ownerSignIn.buildRoute().path);
        return;
      }
      setOwner(owner);
    });
    return () => unsub();
  }, []);

  return owner;
};

