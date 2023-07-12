import { useSelector } from "react-redux";
import { AppState } from "../../redux/store/store";

// Custom Hook
export function useAuth() {
  return useSelector((store: AppState) => store.user);
}

export function useAuthenticated() {
  return useSelector((store: AppState) => store.user.isUserAuthenticated);
}
