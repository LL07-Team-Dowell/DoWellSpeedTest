import { z } from "zod"

const dataInsertionExample = z.object({
    name: z.string(),
    email: z.string().email(),
});



const dataUpdationExample = z.object({
    id: z.string(),
    data: z.object({
        name: z.string().optional(),
        email: z.string().email().optional(),
    }).refine(data => {
        return (data.name !== undefined || data.email !== undefined);
    }, {
        message: "Either 'name' or 'email' is required",
        path: ["data"]
    })
});


export {
    dataInsertionExample,
    dataUpdationExample
}