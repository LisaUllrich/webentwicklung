import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Linkslist extends Component{
    links = () => {
        return [
            {
                id: '1',
                title: 'React Docs',
                url: 'https://reactjs.org/docs/hello-world.html'
            },
            {
                id: '2',
                title: 'Github React Repo',
                url: 'https://github.com/facebook/react/'
            },
            {
                id: '3',
                title: 'React Tutorial',
                url: 'https://www.youtube.com/watch?v=A71aqufiNtQ&t=914s'
            }
        ];
    }
    render(){
        const linksToShow = this.links()
            return(
                <div>
                    <hr/>
                    <div>
                        <ul className='linklist'>
                            {
                                linksToShow.map( link =>
                                <li key={link.id}>{link.title}: <a href={link.url}>{link.url}</a></li>
                                )
                            }
                        </ul>
                    </div>
                </div>
                
                
                
            )
    }
}