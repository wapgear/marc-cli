const nameReplacePrototype = (name) => {
  console.log(this.toString())
  return this.toString().replace(/\*NAME\*/g, name)
}
module.exports = nameReplacePrototype