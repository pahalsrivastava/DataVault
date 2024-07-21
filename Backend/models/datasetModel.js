import mongoose from "mongoose";

const dataSchema=mongoose.Schema(
    {
       
       title:{
            type:String,
            required:true,
            

        },
        description:{
            type:String,
            required:true, 
        },
        price:{
            type:String,
            required:true, 

        },
        

    });

export const DataSet=mongoose.model('Dataset',dataSchema ); 