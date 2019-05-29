const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const userProfileSchema = mongoose.Schema({
    
    full_name: {
        type: String,
        trim: true
    },

    gender: {
        type: String,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid, Please check the Email and try again')
            }
        }
    },

    address: {
        type: String,
        minLength: '10',
        maxLength: '60',
        trim: true,
        lowercase: true,
        required: true
    },

    phone_number: {
        type: Number,
        trim: true,
        minLength: '10'
    },

    password: {
        type: String,
        trim: true,
        minLength: '3',
        required: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Please your password cannot contain "password"')
            }
        }
    },

    avatar: {
        type: Buffer
    },

    category: [{
        type: Array,
        required: true
    }],

    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
}, {
    timestamps: true
})

//method to generate token
userProfileSchema.methods.generateAuthToken = async function () {

    //accessing the global current user registering at that point in time
    const userProfile = this

    const token = jwt.sign({ _id: userProfile._id.toString() }, process.env.SECRET, { expiresIn: 6 })

    //saving the token in the model
    userProfile.tokens = userProfile.tokens.concat({ token })

    return token;
}

//methods to hash passwords before save the data to the db
userProfileSchema.pre('save', async function (next) {
    
    const userProfile = this

    if(userProfile.isModified('password')) {
        userProfile.password = await bcrypt.hash( userProfile.password, 8 )
    }

    next()
})

const User = mongoose.model('userProfile', userProfileSchema)

module.exports = User;