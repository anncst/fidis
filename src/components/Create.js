import InputLabel from "./InputLabel";
import React from "react";
import axios from 'axios';


class Create extends React.Component {

    state = {
        chords: [],
        optionsList: []
    }

    componentDidMount(){
        axios.get('/chord')
        .then(res => {
            this.setState({chords: res.data})
        })
    }
    
    chosenOption = (chord, event) => {
        let optionsList = this.state.optionsList
        if (event.target.checked) {
            optionsList.push(chord)
        } else {
            optionsList = optionsList.filter(item => item !== chord)
        }
        this.setState(state => ({
            optionsList: optionsList
        }))
        console.log(event);
    }

    handleDragStart = (chord, event) => {
        event.dataTransfer.setData("chord", chord.symbol)
    }

    handleDrop = (event) => {
        event.preventDefault();
        console.log(event.dataTransfer.getData('chord'))
    }

    render(){
        let chordList = this.state.chords.map(chord => {
            return(
                <label className="mx-2">
                    <input type="checkbox" id={chord.symbol} className="hidden" onChange={this.chosenOption.bind(this, chord)}/>
                    <div className="shadow-lg text-white text-xl font-bold rounded-full h-12 w-12 bg-primary flex items-center justify-center label-checked:bg-secondary">{chord.symbol}</div>
                </label>
            )
        });
        let checkedChords = this.state.optionsList.map(chord => {
            return(
                <div className="shadow-lg text-white text-xl font-bold rounded-full h-12 w-12 bg-secondary flex items-center justify-center mx-2" draggable onDragStart={this.handleDragStart.bind(this, chord)}>{chord.symbol}</div>
            )
        })
        return(
            <div>
                <h1 className="text-4xl text-left mt-10 mb-5">Add song</h1>
                <div className="flex flex-col items-start">
                   <InputLabel id="title" text="Title" />
                   <InputLabel id="artist" text="Artist" />
                    <label className="text-xl"> Choose chords which you use</label>
                    <div className="flex mb-10 mt-2">
                        {chordList}
                    </div>
                    <div className="flex justify-center">
                        <div contentEditable onDrop={this.handleDrop.bind(this)} onDragOver={(event) => event.preventDefault()}>fverrfreerfe</div>
                        <div className="ml-6">
                            <h2 className="text-3xl text-left ml-2">Chords</h2>
                            <div className="flex">
                                {checkedChords}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Create;