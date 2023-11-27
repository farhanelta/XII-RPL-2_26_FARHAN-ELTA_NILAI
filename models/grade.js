const mongoose = require('mongoose');

const GradeSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama siswa'],
        unique: true
    },
    mapel: {
        type: String,
    },
    nilai_uh: {
        type: String,
    },
    nilai_praktek: {
        type: String,
    },
    nilai_teori: {
        type: String,
    },
})

module.exports = mongoose.model('Grade', GradeSchema)