import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class WelcomeText extends Component{
    render(){
            return(
                <div>
                    <p className="App-intro">
        In dem WPM geht es um die Entwicklung moderner hochgradig interaktiver Webanwendungen.<br/>
        Bekannte Beispiele sind Google gmail, Facebook, Twitter, Instagram, Netflix und AirBnB u.v.a.m.<br/>
        Diese Anwendungen sind als Single Page Applications (SPA) organisiert und sind im Kern<br/> 
        komplexe JavaScript-Anwendungen, die durch HTML und CSS ergänzt werden.<br/>
        <br/>
        In der Veranstaltung werden wir mit dem JS-Framework React arbeiten, das von Facebook entwickelt wurde und<br/> 
        das gerade bei innovativen interaktiven Anwendungen verstärkt eingesetzt wird.<br/> 
        Das Modul ist recht programmierlastig angelegt – eine Auseinandersetzung mit fortgeschrittenen Konzepten<br/> 
        der Programmiersprachen JavaScript (Funktionen in allen Variationen: als Parameter,<br/>
        Fat Arrow Function, Closures, dazu Promises und Module) ist zwingend erforderlich.<br/> 
        </p>
                
                </div>
                
                
                
            )
    }
}