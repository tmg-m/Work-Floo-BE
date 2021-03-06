require("dotenv/config");
require("./db");
const express = require("express");
const cors = require('cors')

const { isAuthenticated } = require("./middleware/jwt.middleware");
const allRoutes = require("./routes");
const authRouter = require("./routes/auth.routes");
// const protectedRoute = require("./routes/protected.routes");
const taskRoute = require("./routes/task.routes")
const userRoute = require("./routes/user.routes")
const baseRoute = require("./routes/base.routes")
const chatRoomRoute = require("./routes/chatRoom.routes")
const messageRoute = require("./routes/message.routes")

const app = express();

require("./config")(app);


// app.use("/api", allRoutes);
// app.use("/api/protected", isAuthenticated, protectedRoute);
app.use("/", baseRoute);
app.use("/auth",  authRouter);
app.use("/task", isAuthenticated, taskRoute);
app.use("/user", isAuthenticated , userRoute);
app.use("/chat", isAuthenticated, chatRoomRoute);
app.use("/message", isAuthenticated, messageRoute);



require("./error-handling")(app);

module.exports = app;
