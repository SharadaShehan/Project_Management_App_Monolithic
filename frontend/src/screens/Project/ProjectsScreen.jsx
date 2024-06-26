import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import ProjectsList from '../../components/ProjectsList';
import { SafeAreaView } from 'react-native-safe-area-context';


const ProjectsScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.innerContainer}>
        <ProjectsList navigation={navigation} />
        <TouchableOpacity style={styles.addNewButton} onPress={() => navigation.navigate('CreateProject')}>
            <Text style={{ color: '#fff', fontSize: 20 }}>+</Text>
        </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    innerContainer: {
        height: '100%',
        backgroundColor: '#4CBB17',
        paddingTop: 0,
        marginTop: 0,
    },
    createProjectButton: {
        backgroundColor: '#007BFF',
        padding: 9,
        // margin: 10,
        marginTop: 10,
        borderRadius: 5,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    addNewButton: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        backgroundColor: '#007BFF',
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ProjectsScreen;

