import {AutoComplete, Button, Col, Icon, Input, Select} from "antd";
import React from "react";
import {getProductAllNames} from "../../../Api/ProductApi";




export default class index extends React.Component{

    state={
        productNames:[],
        empty:true,
        results:[],
    }
    handleSearch=(value)=>{


        if (value &&value.trim()!=='') {
            this.asyncCall(value);
        }



    };

    async  asyncCall(value) {

        let result=[];
        console.log("asyncCall")
        for (let index in this.state.productNames){
            const pro=this.state.productNames[index];

            if(pro.name.includes(value))
            {
                result.push(this.renderOption(pro));
            }
            if(result.length>20)
                break ;
        }
        this.setState({ results:result });
    }


    onSelect=(e)=>{

    };

    componentDidMount() {

        getProductAllNames((productNames)=>{

            this.setState({
                productNames:productNames.data.content,
                empty:productNames.data.empty
            })

        },(errorMessage)=>{

        });
    }

     renderOption=(item)=>{
        return (
            <Select.Option key={item.id}  text={item.name} >
            {item.name}
            </Select.Option>
        );
    }

    render() {

        return <AutoComplete
            size="large"
            onSelect={this.onSelect}
            onSearch={this.handleSearch}
            placeholder="产品名称"
            optionLabelProp="text"
            dataSource={this.state.results}
            style={{width:'500px'}}>
            <Input
                suffix={(
                    <Button className="search-btn" size="large" type="primary">
                        <Icon type="search" />
                    </Button>
                )}
            />
        </AutoComplete>
    }


}