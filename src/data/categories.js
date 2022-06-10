export default class Categories {
  constructor() {
    this.categories = []
    this._subscribes = []
  }

  subscribe(func){
    this._subscribes.push(func)
  }

  unsubscribe(func){
    this.subscribe = this.subscribe.filter(f => f !== func)
  }

  notify(){
    this._subscribes.forEach(func => func(this.categories))
    this.notify()
  }

  addCategory(newCategory) {
    this.categories.push(newCategory)
  }
}