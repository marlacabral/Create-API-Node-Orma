// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

// const express = require("express");
// const cors = require("cors");
// const app = express();
// app.use(express.json());
// app.use(cors());

// const db_url = process.env.DB_URL;
// const db_user = process.env.DB_USER;
// const db_pass = process.env.DB_PASS;
// const db_data = process.env.DB_DATA;

// const Conn = require("./conn/competition.conn");

// Conn(db_url, db_user, db_pass, db_data);

// const competitionRoutes = require("./routers/competition.routes");

// app.use("/competition", competitionRoutes);

// const port = 3001;

// app.listen(process.env.PORT || port, () => {
//   console.log(`Server loading in port ${port}.`);
// });
