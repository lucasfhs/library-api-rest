const express = require("express");
const userRouter = require("./src/routers/user");
const bookRouter = require("./src/routers/book");
const libraryRouter = require("./src/routers/library");
const bookLibraryRouter = require("./src/routers/bookLibrary");
const app = new express();
const PORT = 3000;
app.use(express.json());
app.use(userRouter);
app.use(bookRouter);
app.use(libraryRouter);
app.use(bookLibraryRouter);
app.listen(PORT, () => {
  console.log(`Server started : http://localhost:${PORT}`);
});
