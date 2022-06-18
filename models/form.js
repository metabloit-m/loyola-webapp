import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'Please provide your first name'],
        maxlength: [30, 'Name cannot be more than 30 characters']
    },
    last_name: {
        type: String,
        required: [true, 'Please provide your last name'],
        maxlength: [30, 'Name cannot be more than 30 characters']
    },
    yoe: {
        type: String,
        required: [true, 'Please provide yoe']
    },
    yog: {
        type: String,
        required: [true, 'Please provide yog']
    },
    fam_teacher: {
        type: String,
        required: [true, 'Please provide your famous teacher'],
        maxlength: [30, 'Name cannot be more than 30 characters']
    },
    result: {
        type: String,
        required: [true, 'Please provide your results'],
    },
    occup: {
        type: String,
        required: [true, 'Please provide your current occupation'],
        maxlength: [20, 'Occupation cannot be more than 20 characters']
    },
    address: {
        type: String,
        required: [true, 'Please provide your current occupation'],
        maxlength: [30, 'Occupation cannot be more than 30 characters']
    },
    email: {
        type: String,
        required: [true, 'Please provide your e-mail'],
        validate: {
            validator: function emailValidator(val) {
                const pattern = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ ;
                return pattern.test(val);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    phone: {
        type: String,
        required: [true, 'Please provide your current occupation'],
        maxlength: [30, 'Occupation cannot be more than 30 characters'],
        validate: {
            validator: function phoneValidator(val) {
                const pattern = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
                return pattern.test(val);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
})

export default mongoose.models.Metabloit || mongoose.model('Metabloit', FormSchema)