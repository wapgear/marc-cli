const prompt = require('promptly');

const component_generator = async (program) => {
  const module = await prompt.prompt('Module name: ');
  const isRedux = await prompt.confirm('Need redux?: ');
  await console.log(`Module name: ${module} isRedux: ${isRedux}`)
};

module.exports = component_generator