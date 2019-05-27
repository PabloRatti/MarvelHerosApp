import React, { Component } from 'react';
import {FlatList,View,Image,Dimensions,Text} from 'react-native';

const data = [{key:"https://ichef.bbci.co.uk/news/660/cpsprodpb/6261/production/_104458152_nov23-foxhuntjimfeng.jpg"},
{key:"https://www-tc.pbs.org/wnet/nature/files/2017/09/x1WLcZn-asset-mezzanine-16x9-6kkb4dA.jpg"},
{key:"https://www.cbc.ca/natureofthings/content/images/episodes/foxtales_1920.jpg"},
{key:"https://www.nrcm.org/wp-content/uploads/2018/12/Red-fox-winter-South-China-4-Hal-Winters.jpg"},
{key: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
key:"https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MTkvb3JpZ2luYWwvY3V0ZS1raXR0ZW4uanBn"}];

const ITEM_WIDTH = Dimensions.get('window').width;

export default class HeaderMarvel extends Component {
    renderItem = ({item}) => {
        return(    
            <View >    
               <Image    
                style={{ 
                  width: ITEM_WIDTH/2,
                  height:350,
                }}
                source={{uri: item.key}}
                />
           </View>
        );
    };
    
    render() {
        return (
            <View >
                
                <FlatList                 
                data = {data}                
                renderItem={this.renderItem}
                numColumns={2}
                />
            </View>
        )
    }
}
