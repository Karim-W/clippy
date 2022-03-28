import FtpServer from "ftp-srv";
console.log("======GO-BIT======");
const ftpServer = new FtpServer();

ftpServer.on("login", (data, _, __) => {
  console.log(data);
});

ftpServer.listen().then(() => {
  console.log("ftp server started");
});
