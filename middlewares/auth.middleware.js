const JobSeeker = require("../v1/models/job-seeker.model");

module.exports.requireAuth = async (req, res, next) => {

    if (!req.headers.authorization){
        res.json({
            code: 400,
            message: 'Vui lòng lòng gửi lên token!'
        });
        return;
    }

    const token = req.headers.authorization.split(" ")[1];

    const jobSeeker = await JobSeeker.findOne({
        token: token,
    })

    if (!jobSeeker){
        res.json({
            code: 400,
            message: 'Không có dữ liệu về người dùng!'
        });
        return;
    }

    res.locals.jobSeeker = jobSeeker;

    next();
}