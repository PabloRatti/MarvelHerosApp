import React from 'react';
import {Text, View } from 'react-native';

const FullDescription = ({}) => (
    <View style = {styles.container}>     
        <View>
            <View>
                <Text style={styles.titles}>{'Published on: '}</Text>        
                <Text style={styles.info}>{'June 22, 2016'}</Text>        
            </View>
            <View>
                <Text style={styles.titles}>{'Writers: '}</Text>        
                <Text style={styles.info}>{'Mike Cost, David Baldeon'}</Text>        
            </View>
            <View>
                <Text style={styles.titles}>{'Artist: '}</Text>        
                <Text style={styles.info}>{'Julian Tonino Tedesco'}</Text>        
            </View>
            <View>
                <Text style={styles.titles}>{'Summary: '}</Text>        
                <Text >{'The Web of Life and Destiny is a three-dimensional construct in five-dimensional space which acts as a model of the entire Multiverse and enables travel between realities.[2] Its nexus lies in Earth-001, where it is maintained by the Master Weaver'}</Text>        
            </View>
        </View>    
    </View>    
);
const styles = {
    container:{
        flex: 1,
        margin:20,
        height:500
    },
    info:{
        fontSize:18,
    },
    titles:{
        paddingBottom: 5,
        color:'#b2afaf',
    }

}

export default FullDescription;