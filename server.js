//...............Pull in required resources...............\\
const express= require('express');
const apiRoutes= require('./routes/apiRoutes');
const htmlRoutes= require('./routes/htmlRoutes');

// ..............Start Express...............\\
const app= express();
// ..............Set Port...............\\
const PORT= process.env.PORT || 3001;

