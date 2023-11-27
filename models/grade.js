const mongoose = require('mongoose');

const GradeSchema = new mongoose.Schema({
    nis: {
        type: String,
        required: [true, 'Silahkan isikan nis siswa'],
        unique: true
    },
    mapel: {
        type: String,
        required: [true, 'Silahkan isikan mapel siswa'],
        unique: true
    },
    nilai_pengetahuan: {
        type: String,
    },
    nilai_keterampilan: {
        type: String,
    },
    nilai_akhir: {
        type: String,
    },
    nilai_predikat: {
        type: String,
    },
    guru_pengampu: {
        type: String,
        required: [true, 'Silahkan isikan nama guru pengampu'],
        unique: true
    }
})

module.exports = mongoose.model('Grade', GradeSchema)