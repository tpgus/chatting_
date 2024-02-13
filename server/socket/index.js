module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('사용자가 연결되었습니다.');

    socket.on('message', () => {
      console.log('meesage');
    });

    socket.on('disconnect', () => {
      console.log('사용자 연결이 끊어졌습니다.');
    });
  });
};
