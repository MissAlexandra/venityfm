import React from "react";

export default class RadioInfo extends React.Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "http://188.40.244.179/api/nowplaying";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data[0], loading: false });
    console.log(data[0].live.streamer_name)
    setInterval(this.getData, 5000)
}

  render() {
    if (this.state.loading) {
      return <div>{this.state.person}</div>;
    }

    if (!this.state.person.live.streamer_name) {
      return <div>AutoDJ</div>;
    }

    return (
      <div>
        <div>{this.state.person.live.streamer_name}</div>

      </div>
    );
  }
}