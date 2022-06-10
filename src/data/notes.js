export default class ListNotes {
  constructor() {
    this.notes = []
    this.subscribe = []
  }

  addNote(title, text, category) {
    const newNote = new Note(title, text, category)
    this.notes.push(newNote)
    this.notify()
  }

  deleteNote(index) {
    this.notes.splice(index, 1)
  }

  subscribe(func){
    this._subscribes.push(func)
  }

  unsubscribe(func){
    this.subscribe = this.subscribe.filter(f => f !== func)
  }
  
  notify(){
    this._subscribes.forEach(func => func(this.notes))
  }
}
class Note {
  constructor(title, text, category) {
    this.title = title
    this.text = text
    this.category = category
  }
}