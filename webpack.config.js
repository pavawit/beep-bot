module.exports = {
  entry: ['./getState.js'],
  target: 'node',
  output: {
    path: `${process.cwd()}/bin`,
    filename: 'getState.js',
    libraryTarget: 'umd'
  }
};
