import { redirect } from "react-router-dom";
import { logout } from "../ulties/firebase";

export async function action() {
    await logout()
    return redirect('/auth?mode=login')
}