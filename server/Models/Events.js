const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Events = new Schema(
    {
        Name:
        {
            type:String,
            required:true,
            min:3,
        },
        Description:
        {
            type:String,
            required:true,
        },
        EventDate:
        {
            type:Date,
            required:true,
        },
        ImageLink:
        {
            type:String,
            required:true,
            default:"https://www.hedgeweek.com/sites/default/files/styles/header_large/public/events.jpg?itok=4nZbX6ro"
        },
        date:
        {
            type: Date,
            default: Date.now
        }
    }, {collection: "events"})

module.exports = mongoose.model("events", Events); 