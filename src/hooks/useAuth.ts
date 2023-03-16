import { useAppSelector } from "./hooksTypes";

export function useAuth() {
  //@ts-ignore
  const { email, tokken, id } = useAppSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    tokken,
    id,
  };
}
