import { asyncHandler } from "../utils/asyncHandler.js";
import initDatacube from "../utils/datacubeHandler.js";
import { formatDate } from "../utils/helper.js";
import PayloadValidationServices from "../services/validationservices.js"
import { dataInsertionExample, dataUpdationExample } from "../utils/payloadSchema.js"
 
/**
 * DON'T USE THIS WITHOUT MYPERMISSIONS
 */
const createCollection = asyncHandler(async (req, res) => {
    const { datacube, database, collection } = initDatacube();

    const createCollectionResponse = await datacube.createCollection(database, collection);

    if (!createCollectionResponse.success) {
        return res
        .status(400)
        .json({
            success: false,
            message: "Failed to create collection",
            response: createCollectionResponse
        });
    }

    return res
    .status(201)
    .json({
        success: true,
        message: "New collection has been created successfully"
    })
});

const getData = asyncHandler(async (req, res) => {
    const { datacube, database, collection } = initDatacube();
    const { limit, offset } = req.query;

    const response = await datacube.dataRetrieval(
        database,
        collection,
        {},
        limit,
        offset
    );

    if(!response.success) {
        return res
       .status(400)
       .json({
            success: false,
            message: "Failed to fetch data",
            response: response
        });
    }
    return res
    .status(200)
    .json({
        success: true,
        message: "Data fetched successfully",
        response: response
    });
});

const insertData = asyncHandler(async (req, res) => {
    const { datacube, database, collection } = initDatacube();
    const { name,email } = req.body;

    const validatePayload =PayloadValidationServices.validateData(dataInsertionExample, {
        name: name,
        email: email,
    });

    if (!validatePayload.isValid) {
        return res
        .status(400)
        .json({
            success: false,
            message: "Kindly cross verify the payload",
            errors: validatePayload.errors
        });
    }

    const data_to_insert= {
        name: name,
        email: email,
        created_at: formatDate() ,
        updated_at:"",
        records: [{"record": "1", "type": "overall"}]
    }


    const response = await datacube.dataInsertion(database, collection, data_to_insert);

    if(!response?.success) {
        return res
       .status(400)
       .json({
            success: false,
            message: "Failed to insert data",
            response: response
        });
    }

    return res
    .status(201)
    .json({
        success: true,
        message: "Data inserted successfully",
        response: response
    });
});

const updateData = asyncHandler(async (req,res)=>{
    const { datacube, database, collection } = initDatacube();
    const { id:collectionId } = req.query
    const { data } = req.body;

    const validatePayload = PayloadValidationServices.validateData(dataUpdationExample,{
        id: collectionId,
        data: data
    })

    if (!validatePayload.isValid) {
        return res
        .status(400)
        .json({
            success: false,
            message: "Kindly cross verify the payload",
            errors: validatePayload.errors
        });
    }

    const response = await datacube.dataUpdate(database, collection, 
        {
            _id: collectionId
        },
        data
    );

    if(!response.status){
        return res
       .status(400)
       .json({
            success: false,
            message: "Failed to update data",
            response: response
        });
    }

    return res
    .status(200)
    .json({
        success: true,
        message: "Data updated successfully",
        response: response
    });
});

const deleteData = asyncHandler(async (req,res)=>{
    const { datacube, database, collection } = initDatacube();
    const { id:collectionId } = req.query

    const response = await datacube.dataDelete(database, collection, 
        {
            _id: collectionId
        }
    );

    if(!response.success){
        return res
       .status(400)
       .json({
            success: false,
            message: "Failed to delete data",
            response: response
        });
    }

    return res
    .status(200)
    .json({
        success: true,
        message: "Data deleted successfully",
        response: response
    });
})

const tests = asyncHandler(async (req,res)=>{
    const { limit, offset } = req.query

    return res
    .status(200)
    .json({
        success: true,
        message: "Backend service is running fine",
        limit: limit,
        offset: offset
    })
});

export { 
    createCollection,
    getData ,
    insertData,
    updateData,
    deleteData,
    tests
};


