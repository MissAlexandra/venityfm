import React from "react";

export default class SongInfo extends React.Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "http://188.40.244.179/api/nowplaying";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data[0], loading: false });
    console.log(data[0].now_playing.song.text) 
    
}

  render() {
    
    if (this.state.loading) {
      return <div>{this.state.person}</div>;
    }

    if (!this.state.person.now_playing.song.text) {
      return <div>Nothing is playing</div>;
    }

    return (
      <div>
        <div>{this.state.person.now_playing.song.text}</div>

      </div>
    );
  }
}