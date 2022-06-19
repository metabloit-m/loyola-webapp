import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'Please provide your first name'],
        maxlength: [30, 'Name cannot be more than 30 characters']
    },
    middle_name: {
        type: String,
        required: [true, 'Please provide your middle name'],
        maxlength: [30, 'Name cannot be more than 30 characters']
    },
    last_name: {
        type: String,
        required: [true, 'Please provide your last name'],
        maxlength: [30, 'Name cannot be more than 30 characters']
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
    username: {
        type: String,
        required: [true, 'Please provide your username'],
        maxlength: [20, 'Username cannot be more than 30 characters'],
        validate: {
            validator: function usernameValidator(val) {
                const pattern = /^([a-zA-Z])[a-zA-Z_-]*[\w_-]*[\S]$|^([a-zA-Z])[0-9_-]*[\S]$|^[a-zA-Z]*[\S]$/;
                return pattern.test(val);
            },
            message: props => `${props.value} is not a valid username!`
        }
    },
    dob: {
        type: String,
        required: [true, 'Please provide dob']
    },
    password: {
        type: String,
        required: [true, 'Please provide your password'],
    },
    c_password: {
        type: String,
        required: [true, 'Please provide your password'],
    },
    f_username: {
        type: String,
        required: [true, 'Please provide your facebook username'],
    },
    t_username: {
        type: String,
        required: [true, 'Please provide your twitter username'],
    },
    i_username: {
        type: String,
        required: [true, 'Please provide your instagram username'],
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

export default mongoose.models.test || mongoose.model('test', UserSchema)