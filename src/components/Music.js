import React, { Component } from 'react';
export class Music extends Component {
    constructor(props){
        super(props);
        this.state={
            play:false,
            pause:true,
            stop:true,
            a:''
        }
        this.url= "http://streaming.tdiradio.com:8000/house.mp3";
        this.audio=new Audio(this.url);
    }
    play=()=>{
        this.a= setInterval(
            function () {
              var randomColor = Math.floor(Math.random()*16777215).toString(16);
              document.body.style.backgroundColor = "#"+randomColor;
            },1000);
        this.setState({
            play:true,
            pause:false,
            stop:false,
        })
        this.audio.play();
    }
    pause=()=>{
        clearInterval(this.a);
        this.setState({pause:true,play:false,stop:false})
        this.audio.pause();
    }
    stop=()=>{
        document.body.style.backgroundColor ="white";
        clearInterval(this.a);
        this.setState({play:false,pause:false,stop:true})
        this.audio.pause();
    }
    render() {
        return (
            <div>
                <button className="button button4" onClick={this.play} >Play</button> 
                <button className="button button4" onClick={this.pause}>Pause</button>
                <button className="button button4" onClick={this.stop}>Stop</button>
            </div>
        );
    }
}

export default Music
