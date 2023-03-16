import { useAppSelector } from "./hooksTypes";

export function useAuth() {
  //@ts-ignore
  const { email } = useAppSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
  };
}
