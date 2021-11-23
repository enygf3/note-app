import "../sass/style.css"
import Filter from "../filter";
import MakeNote from "../make-note";
import { Component } from "react";

export default class App extends Component {

  state = {
    tags: [],
    notes: []
  }

  createNote = (value, tags) => {
    return {
      value,
      tags
    }
  }

  onKeyDown = (e) => {
    let value = e.target.value, tags = []
    const regExp = /\w*#\w*/g

    if(e.key == "Enter") {

      e.target.value = ""

      tags = value.match(regExp)
      console.log(tags)

      this.setState((state) => {
        const item = this.createNote(value, tags);
        return { notes: [...state.notes, item],
        tags: [...state.tags, ...tags] };
      })
    }
  }

  render() {
    return (
      <div className="wrapper">
        <MakeNote onKeyDown = { this.onKeyDown }/>
        <Filter />
      </div>
    ); 
  }
}
