const mongoose = require('mongoose');

const GradeSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama siswa'],
        unique: true
    },
    mapel: {
        type: Int32Array
    },
    nilai_uh: {
        type: Int32Array
    },
    nilai_praktek: {
        type: Int32Array
    },
    nilai_teori: {
        type: Int32Array
    },
})

module.exports = mongoose.model('Grade', GradeSchema)