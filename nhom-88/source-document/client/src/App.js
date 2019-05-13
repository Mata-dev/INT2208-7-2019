import React from 'react'
import './CSS/App.css';
import './CSS/styles.css';
import Menu from './Components/Menu_';

/*  Font awesome */


class App extends React.Component{

    render(){

        return (
               <React.Fragment>
                    <Menu/>
                    <div className="page-content">
                    <PageContainer/>
                  </div>
               </React.Fragment>
        );
    }
}

class ProfileSummary extends React.Component{
    render(){
        return(
        <div id="profile-summary">
			<div className="content">
				<img className='avatar' src={this.props.linkAvatar} />
				<p>{this.props.yourName}</p>
		    </div>
		</div>
        );
    }
}


class PostTweet extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            input: '',
            submit:'',
            URL_API:'http://localhost:5000/submit'
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
      }

    handleSubmit(event){
        this.sendRequest(this.state.input);
    }

    sendRequest(message){
        const data = {
            content: message
          }

        fetch(this.state.URL_API, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
        .then((result) => {
            console.log('ok');
        });
    } 

    render(){

        return(
        <div id="tweet-content">
        <form onSubmit={this.handleSubmit}>
            <textarea 
                className="tweet-compose" 
                placeholder="Compose new Tweet..."
                onChange={this.handleChange}>
            </textarea>
            <div id="tweet-controls">
				<div id="char-count">140</div>
				<button className="button" id="tweet-submit" type="submit">Tweet</button>
			</div>
            
            </form>
        </div>
        );
    }
}

class Dashboard extends React.Component{
    render(){
        return(
        <div id="dashboard">
            <ProfileSummary linkAvatar={'/image/jennyshen.jpg'} yourName={'Vuongxuan'} />
            <PostTweet/>
        </div>);
    }
}

class UserControl extends React.Component{
    render(){
        return(
        <div id="dashboard">
            
        </div>);
    }
}

class ShowTweet extends React.Component{
    render(){
        return(
        <div>
            <img className="avatar" src={this.props.linkAvatar} />
		    <strong className="fullname">{this.props.fullName}</strong>
		    <span className="username">{this.props.userName}</span>
		    <p className="tweet-text">{this.props.tweetText}</p>
        </div>);
    }
}

class TweetAction extends React.Component{
    render(){
        return(
        <div className="tweet-actions">
			<ul>
				<li><span className="icon action-reply"></span> Reply</li>
				<li><span className="icon action-retweet"></span> Retweet</li>
				<li><span className="icon action-favorite"></span> Favorite</li>
				<li><span className="icon action-more"></span> More</li>
			</ul>
		</div>);
    }
}

class Stats extends React.Component{
    render(){
        return (
        <div className="stats">
			<div className="retweets">
				<p className="num-retweets">{this.props.retweets}</p>
				<p>RETWEETS</p>
			</div>

		    <div className="time">
			    {this.props.time}
            </div>
	    </div>);
    }
}


class Tweet extends React.Component{
    render(){
        return(
            <div className="tweet">
                <ShowTweet linkAvatar={this.props.link} name={this.props.name} 
                userName={this.props.username} 
                tweetText={this.props.tweetText} />
                <TweetAction />
                <Stats time={this.props.timePost}/>
            </div>
        );
    }
}


class TweetContainer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            tweetData:[],
            counter : 0
        }
       
    }   

    componentDidMount(){
        
        fetch('http://localhost:5000/tweet')
        .then(function(response) {
            return response.json();
        })
        .then(result=>{
            console.log(result)
            this.setState({
                tweetData: result.data,
                counter: result.data.length
            }, ()=>console.log(this.state.tweetData));
        });
    }

   render(){
    console.log(this.listweet);

    return(
            <div id="main">
                <h2>Tweet</h2>
                {this.state.tweetData.slice(
                    this.state.counter-6,this.state.counter).reverse().map(tweet => 
                    <Tweet
                        key={tweet.id}
                        linkAvatar={tweet.linkAvatar}
                        name={tweet.name}
                        userName={tweet.userName}
                        tweetText={tweet.content}
                        timePost={tweet.created}
                    />
            )}
        </div>
        );
    }
}

class PageContainer extends React.Component{
    render(){
        return(
                <div id="page-container">
                    <Dashboard/>
                    <TweetContainer />
                </div>
        );
    }
}

export default App;