import { asyncHandler } from "../utils/asyncHandler.js";
import { ResponseHandler } from "../utils/responseHandler.js";
import config from "../config/index.js";

const healthCheckService = asyncHandler(async (req,res) => {
    const data = {
        apikey: config.API_KEY
    }
    return res
    .json(
        new ResponseHandler(200,data,"All services are up and running")
    )

});

export { 
    healthCheckService
}