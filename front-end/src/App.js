import React, { Component } from 'react';
import Panel from './components/Panel';
import Search from './components/Search';
import Button from './components/Button';
import Info from './components/Info';
import { getCep } from './utils/api';
import './index.css';

const CEP_LENGTH = 8;

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            cep: '',
            loading: false,
            cepInfo: null
        }

        this.handleChangeCep = this.handleChangeCep.bind(this);
        this.handleClickSearch = this.handleClickSearch.bind(this);
    }

    handleChangeCep(e){
        const value = e.target.value;
        if(e.target.value.length <= CEP_LENGTH){
            this.setState({ cep: value })
        }
    }

    handleClickSearch(){
        const { cep } = this.state;

        this.setState({ loading: true })
        getCep(cep)
            .then((res) => {
                this.setState({ 
                    cepInfo: res.data, 
                    loading: false 
                })
            })
    }

    render(){
        const { cep, loading, cepInfo } = this.state;
        return (
            <div className="container">
                <Panel>
                    <Search cep={cep} setCep={this.handleChangeCep}/>
                    <Button title="Buscar CEP" onClick={this.handleClickSearch}/>
                </Panel>
                { cepInfo || loading ? 
                    <Panel>
                        { loading ?
                            <div>Carregando informações...</div>
                        :   <Info data={cepInfo}/>
                        }
                    </Panel>
                : null }
            </div>
        );
    }
}

export default App;