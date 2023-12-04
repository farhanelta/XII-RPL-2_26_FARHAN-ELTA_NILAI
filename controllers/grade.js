const Grade = require('../models/grade')

module.exports = {
    index: async (req, res) => {
      try{
        const grades = await Grade.find()
        if(grades.length > 0){
          res.status(200).json({
            status: true,
            data: grades,
            method: req.method,
            url: req.url,
          })
        }else{
            res.json({
                status: false,
                message: "Nilai siswa masih kosong"
            })
        }
      } catch(error){
        res.status(400).json({success: false})
      }
    },
    show: async (req, res) => {
      try {
        const grades = await Grade.findById(req.params.id)
        res.json({
          status: true,
          data: grades,
          method: req.method,
          url: req.url,
          message: "Nilai siswa telah didapatkan"
        })

      } catch (error) {
        res.status(400).json({success: false})
      }
    },
    store: async (req, res) => {
      try{
        const grades = await Grade.create(req.body)
        res.status(200).json({
          status: true,
          data: grades,
          method: req.method,
          url: req.url,
          message: "Nilai siswa berhasil ditambahkan"
        })

      }catch(error){
        res.status(400).json({success: false})
      }
      },
    update: async (req, res) => {
      try {
        const grades = await Grade.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true
        })
        res.json({
          status: true,
          data: grades,
          method: req.method,
          url: req.url,
          message: "Nilai siswa berhasil diubah"
        })

      } catch (error) {
        res.status(400).json({success: false})
      }
    },
    delete: async (req, res) => {
        try {
          const grades = await Grade.findByIdAndDelete(req.params.id)
          res.json({
            status: true,
            data: grades,
            method: req.method,
            url: req.url,
            message: "Nilai siswa telah berhasil dihapus"
          })
        } catch (error) {
          res.status(400).json({success: false})
        }
      }
}
