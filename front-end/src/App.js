import React, { Component } from 'react';
import Panel from './components/Panel';
import Input from './components/Input';
import Button from './components/Button';
import Info from './components/Info';
import { getCep } from './utils/api';
import './App.css';
import './index.css';

const CEP_LENGTH = 8;

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            cep: '',
            loading: false,
            cepInfo: null,
            message: ''
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

        if(cep){
            this.setState({ loading: true })
            getCep(cep)
                .then((res) => {
                    this.setState({ loading: false })
                    if(res.data){
                        if(res.data.erro){
                            this.setState({ 
                                cepInfo: null, 
                                message: 'Nenhum CEP encontrado!'
                            })
                        } else if(res.data.cep){
                            this.setState({ 
                                cepInfo: res.data, 
                                message: ''
                            })
                        }
                    } else if (res.message) {
                        this.setState({ 
                            cepInfo: null,
                            message: res.message
                        })
                    }
                })
                .catch((err) => {
                    this.setState({ 
                        loading: false,
                        cepInfo: null,
                        message: err.message
                    })
                })
        } else {
            this.setState({ message: 'Informe um CEP!' })
        }
    }

    render(){
        const { cep, loading, cepInfo, message } = this.state;
        return (
            <div className="App">
                <Panel>
                    <Input cep={cep} setCep={this.handleChangeCep}/>
                    <Button title="Buscar CEP" onClick={this.handleClickSearch}/>
                </Panel>
                { (cepInfo && !message) || loading ? 
                    <Panel>
                        { loading ?
                            <div>Carregando informações...</div>
                        :   <Info data={cepInfo}/>
                        }
                    </Panel>
                : [message ? <Panel error key="error">{message}</Panel> : null] }
            </div>
        );
    }
}

export default App;