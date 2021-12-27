import axios from "axios";

var instance = axios.create();

instance.defaults.timeout = 2000;
instance.defaults.timeoutErrorMessage = "Délai d'attente de la demande dépassé";

export { instance as default };
