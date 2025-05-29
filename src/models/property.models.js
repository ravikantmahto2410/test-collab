import mongoose, { Schema } from "mongoose";

const propertySchema = new Schema(
    {
        id:{
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        title: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        type:{
            type: String,
            required: true,
        },
        price:{
            type: Number,
            required: true
        },
        state:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true,
        },
        areaSqFt: {
            type: Number,
            required: true
        },
        bedrooms:{
            type: Number,
            required: true
        },
        bathrooms: {
            type : Number,
            required: true
        },

        amenities: {
            type: [String],
            required: true
        },

        furnished: {
            type: String,
            required: true

        },
        availableFrom: {
            type: Date,
            required: true
        },

        listedBy: {
            type: String,
            required: true
        },

        tags:{
            type: [String],
            required: true
        },
        colorTheme: {
            type: String,
            required: true
        },

        rating: {
            type: Number,
            required: true,
        },

        isVerified : {
            type: Boolean,
            required : true
        },
        listingType:{
            type: String,
            required: true,
        },

        createdBy:{
            type: Schema.Types.ObjectId,
            required: true
        }


    },
    {timestamps: true}
)

export const Properties = mongoose.model("Properties",propertySchema)