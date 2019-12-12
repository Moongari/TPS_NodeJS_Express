"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const Port = 3000;
app_1.default.listen(Port, () => {
    console.log("Express server listening on port" + Port);
});
//# sourceMappingURL=server.js.map