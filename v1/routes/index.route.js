const taskRoutes = require("./task.route.js");
const jobSeekerRoutes = require("./job-seeker.route.js")

// const requireAuth = require("../../middlewares/auth.middleware.js");

module.exports = (app) => {
    const version = "/api/v1";

    app.use(`${version}/tasks`, taskRoutes)

    // requireAuth.requireAuth

    app.use(`${version}/job-seeker`, jobSeekerRoutes)

}