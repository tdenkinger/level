import { getCsrfToken } from "../token";
import { Signup } from "../../elm/src/Signup.elm";

export function initialize() {
  const app = Signup.fullscreen({
    csrfToken: getCsrfToken()
  });
}
