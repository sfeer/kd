import SBox from './SBox'

SBox.install = function (app) {
  app.component(SBox.name, SBox)
  return app
};

export default SBox
