module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        ['@babel/preset-react', {targets: {node: 'current'}}] 
      ]
}
// __mocks__/styleMock.js

module.exports = {};

// __mocks__/fileMock.js

module.exports = 'test-file-stub';
