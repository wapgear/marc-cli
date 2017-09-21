const moduleDirHelper = (path, options) => {
  const {isRedux = false} = options
  if(isRedux) return __dirname + '/../templates/modules/redux/' + path
  if(!isRedux) return __dirname + '/../templates/modules/vanilla/' + path
  return __dirname + '../templates/modules/'
}

module.exports = moduleDirHelper