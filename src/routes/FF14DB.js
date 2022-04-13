import './FF14DB.css';
import NavigationBar from './../components/NavigationBar';

import { Component } from 'react';

import XIVAPI from "./../XIVAPI";





class FF14DB extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            numItemsPerPage: 20,
            currentPageNum: 1,

            testID: null,

            result: [
                {
                    ID: "",

                },
                
            ],
            

        };

        
    }

    searchMount(query) {
        XIVAPI.search(query)
        .then((mountList) => this.setState({ result: mountList.Results }))
        .catch((err) => console.log(err));
    }

    openLink = () => {
        window.open("https://twitter.com/espressolala/status/1103870707702816769")
    }

    

    async componentDidMount() {
        
        //const response = await xiv.search("Stuffed Khloe");
        //const data = await response.json();
        //this.setState({ person: data.results[0].ID, loading: false});
        try {
            let response = await XIVAPI.search("Stuffed Khloe")
            this.setState({ ID: response.results[0].ID, loading: false});
        } catch (error) {

        }
    }

    
    render() {
        return (

            <div className="FF14DB">
    
                <header>
                <NavigationBar />
                </header>

                <body className="FF14DB-body">

                    <div>

                    {this.state.loading || !this.state.ID ? (
                        <div>loading...</div>
                    ) : (
                        <div>{this.state.ID}</div>
                    )}

                        
                    </div>
                    


                </body>
    
                
                    
                
                
    
            </div>
    
            
        );
    }
    
}
export default FF14DB;