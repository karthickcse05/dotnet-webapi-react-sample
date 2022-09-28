import React,{Component} from "react";
import {API_URL} from './variables'

export class ExamCentre extends Component{
    constructor(props){
        super(props);

        this.state={
            examCenters:[]
        }
    }

    loadData(){
        fetch('https://localhost:44387/api/ExamCentre')
        .then(response => response.json())
        .then(data => {
            this.setState({examCenters:data});
        })
    }

    componentDidMount(){
        this.loadData();
    }
    render() {
        const {examCenters} = this.state;
        return (<div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Town</th>
                        <th>Country</th>
                        <th>UserName</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        examCenters.map(center=>
                            <tr key={center.id}>
                        <td>{center.id}</td>
                        <td>{center.name}</td>
                        <td>{center.address}</td>
                        <td>{center.town}</td>
                        <td>{center.country}</td>
                        <td>{center.username}</td>
                        <td>{center.gender}</td>
                        <button></button>
                        <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
                        </button>
                            </tr>)

                    }
                </tbody>
                {/* <tbody>
                    {examCenters.map(center=>
                        <tr key={center.id}>
                        <td>{center.Id}</td>
                        <td>{center.Name}</td>
                        <td>{center.Address}</td>
                        <td>{center.Town}</td>
                        <td>{center.Country}</td>
                        <td>{center.UserName}</td>
                        <td>{center.Gender}</td>
                        </tr>
                        )}
                </tbody> */}
            </table>
            
            </div>)
        

      }
}