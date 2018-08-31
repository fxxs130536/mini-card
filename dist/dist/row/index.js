Component({
  externalClasses: ['i-class'],

  relations: {
    '../col/index': {
      type: 'child'
    }
  },
  properties: {
    type: {
      value: '',
      type: String
    }
  }
})
