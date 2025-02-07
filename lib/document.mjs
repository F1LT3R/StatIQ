export default class Document {
  constructor({ directory } = {}) {
    console.log({ directory })
    this.directory = directory
  }

  //   watchUpdate(filePath) {
  //     console.log(filePath)
  //   }
}
