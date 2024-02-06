
import mongoose from 'mongoose';

const { Schema } = mongoose;

const newSchema = new Schema(
    {
        title: String,
        description: String
    },
    {
        timestamps: true,
    }
);

const Modal = mongoose.models.Topic || mongoose.model('Topic', newSchema);

export default Modal;
