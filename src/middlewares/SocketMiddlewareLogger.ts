import {Args, SocketMiddleware} from "@tsed/socketio";
import {$log} from "@tsed/logger";

@SocketMiddleware()
export class SocketMiddlewareLogger {
  constructor() {
  }

  async use(@Args() args: any[]) {

    $log.debug("Socket", args);

    return args;
  }
}
