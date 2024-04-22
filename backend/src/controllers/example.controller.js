import { asyncHandler } from "../utils/asyncHandler.js";
import { ResponseHandler } from "../utils/responseHandler.js";
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

    res.json(
        new ResponseHandler(200, createCollectionResponse, "New collection has been created successfully")
    );
});

const getData = asyncHandler(async (req, res) => {
    const { datacube, database, collection } = initDatacube();
    const { limit, offset } = req.params;

    const response = await datacube.dataRetrieval(
        database,
        collection,
        {},
        limit,
        offset
    );

    if (response.success) {
        res.json(
            new ResponseHandler(200, response.data, "Data retrieved successfully")
        );
    } else {
        res.status(response.statusCode).json(
            new ResponseHandler(data.statusCode, null, response.message, response.errors)
        );
    }
});

const insertData = asyncHandler(async (req, res) => {
    const { datacube, database, collection } = initDatacube();
    const { name,email } = req.body;

    const validatePayload =PayloadValidationServices.validateData(dataInsertionExample, {
        name: name,
        email: email,
    });

    if (!validatePayload.isValid) {
        res.json(
            new ResponseHandler(400,null, "Kindly cross verify the payload", validatePayload.errors)
        );
    }

    const data_to_insert= {
        name: name,
        email: email,
        created_at: formatDate() ,
        updated_at:"",
        records: [{"record": "1", "type": "overall"}]
    }


    const response = await datacube.dataInsertion(database, collection, data_to_insert);

    if (response.success){
        res.json(
            new ResponseHandler(201,data_to_insert,"Data inserted successfully")
        )
    } else {
        res.status(response.statusCode).json(
            new ResponseHandler(data.statusCode, null, response.message, response.errors)
        );
    }
});

const updateData = asyncHandler(async (req,res)=>{
    const { datacube, database, collection } = initDatacube();
    const { id:collectionId } = req.params
    const { data } = req.body;

    const validatePayload = PayloadValidationServices.validateData(dataUpdationExample,{
        id: collectionId,
        data: data
    })

    if (!validatePayload.isValid) {
        res.json(
            new ResponseHandler(400,null, "Kindly cross verify the payload", validatePayload.errors)
        );
    }

    const response = await datacube.dataUpdate(database, collection, 
        {
            _id: collectionId
        },
        data
    );

    if (response.success){
        res.json(
            new ResponseHandler(200,"Data update successfully")
        )
    } else {
        res.status(response.statusCode).json(
            new ResponseHandler(data.statusCode, null, response.message, response.errors)
        );
    }
});

const deleteData = asyncHandler(async (req,res)=>{
    const { datacube, database, collection } = initDatacube();
    const { id:collectionId } = req.params

    const response = await datacube.dataDelete(database, collection, 
        {
            _id: collectionId
        }
    );

    if (response.success){
        res.json(
            new ResponseHandler(200,"Data deleted successfully")
        )
    } else {
        res.status(response.statusCode).json(
            new ResponseHandler(data.statusCode, null, response.message, response.errors)
        );
    }
})

export { 
    createCollection,
    getData ,
    insertData,
    updateData,
    deleteData
};


