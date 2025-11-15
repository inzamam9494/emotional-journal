import mongoose, {Schema} from 'mongoose';

const entrySchema = new Schema({
    emotion:{
        type: String,
        required: true
    },
    note:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

export const Entry = mongoose.model('Entry', entrySchema);