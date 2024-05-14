import { asyncHandler } from "../utils/asyncHandler.js";
import initDatacube from "../utils/datacubeHandler.js";
import { formatDate } from "../utils/helper.js";
import PayloadValidationServices from "../services/validationservices.js"
import { dataInsertionExample, dataUpdationExample } from "../utils/payloadSchema.js"
 

const healthCheck = asyncHandler(async(req,res)=>{
    return res
    .status(200)
    .json({
         success: true,
         message: "Admin services is running fine"
     })
})

const registerUser = asyncHandler(async(req,res)=>{
    const { userId, name, email } = req.body;

    // const validatePayload = PayloadValidationServices.validateData(, {
    //     userId: userId,
    //     name: name,
    //     email: email,
    // });
});

export {
    healthCheck
}