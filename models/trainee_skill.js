const mongoose = require('mongoose')

const traineeSkillSchema = mongoose.Schema({

    programming_skill: {
        type: Boolean,
        trim: true
    },

    teaching_experience: {
        type: Boolean,
        trim: true
    },
    
    interest_id: {
        type: mongoose.Schema.Types.ObjectId,
        trim: true
    },

    level_id: {
        type: mongoose.Schema.Types.ObjectId,
        trim: true
    },

    trainee_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'userProfile'
    }
})

const TraineeSkill = mongoose.model('traineeSkill', traineeSkillSchema)

module.exports = TraineeSkill;

//remeber you will still connect skill level categories is to this model